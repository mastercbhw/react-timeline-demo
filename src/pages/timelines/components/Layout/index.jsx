import React, { useRef, useState, useEffect } from 'react';
import { useUpdateEffect } from '@umijs/hooks';
import cls from 'classnames';
import Sidebar from '../Sidebar';
import Timeline from '../Timeline';
import { addListener, removeListener } from '../../utils/events';
import raf from '../../utils/raf';
import getNumericPropertyValue from '../../utils/getNumericPropertyValue';
import styles from '../../less/index.less';

const noop = () => {};

function Layout(props) {
  const timeline = useRef();
  const layout = useRef();
  const sidebar = useRef();
  const [isSticky, setIsSticky] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const { time, now, timelineViewportWidth } = props;

  const scrollToNow = () => {
    if (props.scrollToNow) {
      timeline.current.scrollLeft = time.toX(now) - 0.5 * timelineViewportWidth;
    }
  };

  const updateTimelineBodyScroll = () => {
    timeline.current.scrollLeft = scrollLeft;
  };

  const updateTimelineHeaderScroll = () => {
    setScrollLeft(timeline.current.scrollLeft);
  };

  const handleHeaderScrollY = scrollLeftParam => {
    raf(() => {
      setScrollLeft(scrollLeftParam);
    });
  };

  const handleScrollY = () => {
    raf(() => {
      const markerHeight = 0;
      const { top, bottom } = timeline.current.getBoundingClientRect();
      const isStickyTemp = top <= -markerHeight && bottom >= headerHeight;
      setIsSticky(isStickyTemp);
    });
  };

  const handleScrollX = () => {
    raf(updateTimelineHeaderScroll);
  };

  // 计算侧边菜单的宽度
  const calculateSidebarWidth = () =>
    sidebar.current.offsetWidth +
    getNumericPropertyValue(layout.current, 'margin-left');

  // 计算时间轴的视图宽度
  const calculateTimelineViewportWidth = () => timeline.current.offsetWidth;

  const handleLayoutChange = cb => {
    const { sidebarWidth, onLayoutChange } = props;

    const nextSidebarWidth = calculateSidebarWidth();
    const nextTimelineViewportWidth = calculateTimelineViewportWidth();
    if (
      nextSidebarWidth !== sidebarWidth ||
      nextTimelineViewportWidth !== props.timelineViewportWidth
    ) {
      onLayoutChange(
        {
          sidebarWidth: calculateSidebarWidth(),
          timelineViewportWidth: calculateTimelineViewportWidth(),
        },
        cb,
      );
    }
  };
  const handleResize = () => handleLayoutChange();

  useEffect(() => {
    const { enableSticky } = props;

    if (enableSticky) {
      addListener('scroll', handleScrollY);
      updateTimelineHeaderScroll();
      updateTimelineBodyScroll();
    }

    addListener('resize', handleResize);
    handleLayoutChange(() => scrollToNow());
    return () => {
      if (enableSticky) {
        removeListener('scroll', handleScrollY);
        removeListener('resize', handleResize);
      }
    };
  }, []);

  useUpdateEffect(() => {
    if (props.enableSticky && isSticky) {
      if (!isSticky) {
        updateTimelineHeaderScroll();
      }
      updateTimelineBodyScroll();
    }
  }, [props.enableSticky, isSticky, scrollLeft]);

  useUpdateEffect(() => {
    handleLayoutChange();
  }, [props.isOpen]);

  return (
    <div
      className={cls({
        [styles['rt-layout']]: true,
        [styles['rt-is-open']]: props.isOpen,
      })}
      ref={layout}
    >
      <div className={styles['rt-layout__side']} ref={sidebar}>
        <Sidebar
          timebar={props.timebar}
          tracks={props.tracks}
          toggleTrackOpen={props.toggleTrackOpen}
          sticky={{ isSticky, headerHeight, sidebarWidth: props.sidebarWidth }}
          clickTrackButton={props.clickTrackButton}
        />
      </div>
      <div className={styles['rt-layout__main']}>
        <div
          className={styles['rt-layout__timeline']}
          ref={timeline}
          onScroll={isSticky ? handleScrollX : noop}
        >
          <Timeline
            now={now}
            time={time}
            timebar={props.timebar}
            tracks={props.tracks}
            sticky={{
              isSticky,
              setHeaderHeight,
              viewportWidth: timelineViewportWidth,
              handleHeaderScrollY,
              headerHeight,
              scrollLeft,
            }}
            clickElement={props.clickElement}
          />
        </div>
      </div>
    </div>
  );
}

export default Layout;
