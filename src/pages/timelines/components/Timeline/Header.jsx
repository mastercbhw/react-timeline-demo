import React, { PureComponent, useState, useEffect, useRef } from 'react';

import cls from 'classnames';
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
    sticky: { isSticky, headerHeight, viewportWidth, scrollLeft } = {},
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
        scroll.current.scrollLeft = scrollLeft;
      }
    }
  }, [scrollLeft, isSticky]);

  return (
    <div
      style={isSticky ? { paddingTop: headerHeight } : {}}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div
        className={cls({
          [styles['rt-timeline__header']]: true,
          [styles['rt-is-sticky']]: isSticky,
        })}
        style={isSticky ? { width: viewportWidth, height: headerHeight } : {}}
      >
        <div
          className={styles['rt-timeline__header-scroll']}
          ref={scroll}
          onScroll={isSticky ? handleScroll : noop}
        >
          <div ref={timebar} style={isSticky ? { width } : {}}>
            <Timebar time={time} rows={rows} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
