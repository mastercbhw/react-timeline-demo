import React, { useState, useMemo, useCallback } from 'react';
import Header from './Header';
import Body from './Body';
import NowMarker from './Marker/Now';
import PointerMarker from './Marker/Pointer';
import getMouseX from '../../utils/getMouseX';
import getGrid from '../../utils/getGrid';
import styles from '../../less/index.less';

const Timeline = props => {
  const [pointerDate, setPointerDate] = useState(null);
  const [pointerVisible, setPointerVisible] = useState(false);
  const [pointerHighlighted, setPointerHighlighted] = useState(false);
  console.log('pointerHighlighted', pointerHighlighted);
  console.log('pointerDate', pointerDate);

  const handleMouseMove = useCallback(e => {
    setPointerDate(props.time.fromX(getMouseX(e)));
  }, []);

  const handleMouseLeave = () => {
    setPointerHighlighted(false);
  };

  const handleMouseEnter = () => {
    setPointerVisible(true);
    setPointerHighlighted(true);
  };

  const grid = useMemo(() => {
    return getGrid(props.timebar);
  }, [props.timebar]);

  const { now, time, timebar, tracks, sticky, clickElement } = props;

  return (
    <div
      className={styles['rt-timeline']}
      style={{ width: time.timelineWidthStyle }}
    >
      {now && <NowMarker now={now} visible time={time} />}
      {pointerDate && (
        <PointerMarker
          date={pointerDate}
          time={time}
          visible={pointerVisible}
          highlighted={pointerHighlighted}
        />
      )}
      <Header
        time={time}
        timebar={timebar}
        onMove={handleMouseMove}
        onEnter={handleMouseEnter}
        onLeave={handleMouseLeave}
        width={time.timelineWidthStyle}
        sticky={sticky}
      />
      <Body
        scale={props.scale}
        time={time}
        grid={grid}
        tracks={tracks}
        clickElement={clickElement}
      />
    </div>
  );
};

export default Timeline;
