import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Controls from '@/components/Controls';
import Layout from '@/components/Layout';
import createTime from '@/utils/time';
import styles from './index.less';

const UNKNOWN_WIDTH = -1;

function Timeline(props) {
  const {
    isOpen = true, // 是否可以放大或者缩小
    toggleOpen, //
    zoomIn,
    zoomOut,
    scale,
    scale: { zoom, zoomMin, zoomMax },
    tracks,
    now,
    timebar,
    toggleTrackOpen,
    enableSticky = false,
    scrollToNow,
    clickElement,
    clickTrackButton,
  } = props;

  const [timelineViewportWidth, setTimelineViewportWidth] = useState(
    UNKNOWN_WIDTH,
  );
  const [time, setTime] = useState(
    createTime({ ...scale, viewportWidth: timelineViewportWidth }),
  ); // 右侧可视区
  const [sidebarWidth, setSidebarWidth] = useState(UNKNOWN_WIDTH); // 左侧sidebar宽度

  useEffect(() => {
    const timeTemp = createTime({
      ...scale,
      viewportWidth: timelineViewportWidth,
    });
    setTime(timeTemp);
  }, [scale]);

  // layout宽度发生变化
  const handleLayoutChange = (
    {
      timelineViewportWidth: newTimelineViewportWidth,
      sidebarWidth: newSidebarWidth,
    },
    cb,
  ) => {
    setTime(
      createTime({
        ...scale,
        viewportWidth: timelineViewportWidth,
      }),
    );
    setTimelineViewportWidth(newTimelineViewportWidth);
    setSidebarWidth(newSidebarWidth);
    if (cb) cb();
  };

  return (
    <div className={styles.rt}>
      <Controls
        isOpen={isOpen}
        toggleOpen={toggleOpen}
        zoomIn={zoomIn}
        zoomOut={zoomOut}
        zoom={zoom}
        zoomMin={zoomMin}
        zoomMax={zoomMax}
      />
      <Layout
        enableSticky={enableSticky}
        now={now}
        tracks={tracks}
        timebar={timebar}
        toggleTrackOpen={toggleTrackOpen}
        scrollToNow={scrollToNow}
        time={time}
        isOpen={isOpen}
        onLayoutChange={handleLayoutChange}
        timelineViewportWidth={timelineViewportWidth}
        sidebarWidth={sidebarWidth}
        clickElement={clickElement}
        clickTrackButton={clickTrackButton}
      />
    </div>
  );
}

Timeline.propTypes = {
  scale: PropTypes.shape({
    start: PropTypes.instanceOf(Date).isRequired,
    end: PropTypes.instanceOf(Date).isRequired,
    zoom: PropTypes.number.isRequired,
    zoomMin: PropTypes.number,
    zoomMax: PropTypes.number,
    minWidth: PropTypes.number,
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
  zoomIn: PropTypes.func.isRequired,
  zoomOut: PropTypes.func.isRequired,
  clickElement: PropTypes.func.isRequired,
  clickTrackButton: PropTypes.func.isRequired,
  timebar: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  now: PropTypes.instanceOf(Date).isRequired,
  toggleTrackOpen: PropTypes.func.isRequired,
  enableSticky: PropTypes.bool.isRequired,
  scrollToNow: PropTypes.bool.isRequired,
};

export default Timeline;
