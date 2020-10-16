import React, { useState, useEffect } from 'react';

import Controls from './components/Controls';
import Layout from './components/Layout';
import createTime from './utils/time';

import styles from './less/index.less';

const UNKNOWN_WIDTH = -1;

function Timeline(props) {
  const [timelineViewportWidth, setTimelineViewportWidth] = useState(
    UNKNOWN_WIDTH,
  );
  const [sidebarWidth, setSidebarWidth] = useState(UNKNOWN_WIDTH);
  const [time, setTime] = useState(
    createTime({ ...props.scale, viewportWidth: timelineViewportWidth }),
  );

  useEffect(() => {
    const timeTemp = createTime({
      ...props.scale,
      viewportWidth: timelineViewportWidth,
    });
    setTime(timeTemp);
  }, []);
  // 缩放比 更新的时候，进行调用
  useEffect(() => {
    const timeTemp = createTime({
      ...props.scale,
      viewportWidth: timelineViewportWidth,
    });
    setTime(timeTemp);
  }, [props.scale]);

  // layout 发生变化
  const handleLayoutChange = (param, cb) => {
    const timeTemp = createTime({
      ...props.scale,
      viewportWidth: param.timelineViewportWidth,
    });
    setTime(timeTemp);
    setTimelineViewportWidth(param.timelineViewportWidth);
    setSidebarWidth(param.sidebarWidth);
    if (cb) cb();
  };

  const {
    isOpen = true,
    toggleOpen,
    zoomIn,
    zoomOut,
    scale,
    scale: { zoom, zoomMin, zoomMax },
    tracks, // 轨道
    now,
    timebar,
    toggleTrackOpen,
    enableSticky = false,
    scrollToNow, // 滚动到当前时间
    clickElement,
    clickTrackButton,
  } = props;

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
        scale={scale}
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

export default Timeline;
