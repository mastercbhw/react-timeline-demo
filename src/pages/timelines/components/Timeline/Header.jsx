import React, { useEffect, useRef } from 'react';
import cls from 'classnames';
import { useUpdateEffect } from '@umijs/hooks';
import Timebar from './Timebar';
import styles from '../../less/index.less';

const noop = () => {};

const Header = props => {
  const {
    time,
    onMove,
    onEnter,
    onLeave,
    width,
    timebar: rows,
    sticky: { isSticky, headerHeight, viewportWidth } = {},
  } = props;

  const scroll = useRef();
  const timebar = useRef();

  const handleScroll = () => {
    props.sticky.handleHeaderScrollY(scroll.current.scrollLeft);
  };

  useEffect(() => {
    if (props.sticky) {
      props.sticky.setHeaderHeight(timebar.current.offsetHeight);
      if (isSticky) {
        scroll.current.scrollLeft = props.sticky.scrollLeft;
      }
    }
  }, []);

  useUpdateEffect(() => {
    if (props.sticky) {
      props.sticky.setHeaderHeight(timebar.current.offsetHeight);
      scroll.current.scrollLeft = props.sticky.scrollLeft;
    }
  }, [props.sticky.scrollLeft, props.sticky.isSticky]);

  return (
    <div
      style={isSticky ? { paddingTop: headerHeight } : {}}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div
        style={isSticky ? { width: viewportWidth, height: headerHeight } : {}}
        className={cls({
          [styles['rt-timeline__header']]: true,
          [styles['rt-is-sticky']]: isSticky,
        })}
      >
        <div
          className={styles['rt-timeline__header-scroll']}
          ref={scroll}
          onScroll={isSticky ? handleScroll : noop}
        >
          <div ref={timebar} style={isSticky ? { width } : {}}>
            <Timebar time={time} rows={rows} scale={props.scale} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
