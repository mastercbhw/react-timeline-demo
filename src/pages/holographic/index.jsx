import React, { useState, useEffect } from 'react';
import Timeline from '../timelines/index';

import { START_YEAR, NUM_OF_YEARS, NUM_OF_TRACKS } from './constants';
import { buildTimebar, buildTrack } from './builders';
import { fill } from './utils';
import styles from './index.less';

const now = new Date('2021-01-01');
const timebar = buildTimebar();
console.log('timebar', timebar);

// eslint-disable-next-line no-alert
const clickElement = element =>
  alert(`Clicked element\n${JSON.stringify(element, null, 2)}`);

const MIN_ZOOM = 2;
const MAX_ZOOM = 20;

const trackTemp = fill(NUM_OF_TRACKS).reduce((acc, i) => {
  const track = buildTrack(i + 1);
  acc[track.id] = track;
  return acc;
}, {});

function Holographic() {
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(2);
  const [tracksById, setTracksById] = useState(trackTemp);
  const [tracks, setTracks] = useState(Object.values(trackTemp));

  const handleToggleOpen = () => {
    setOpen(!open);
  };

  const handleZoomIn = () => {
    setZoom(Math.min(zoom + 1, MAX_ZOOM));
  };

  const handleZoomOut = () => {
    setZoom(Math.max(zoom - 1, MIN_ZOOM));
  };

  const handleToggleTrackOpen = track => {
    const tracksByIdTemp = {
      ...tracksById,
      [track.id]: {
        ...track,
        isOpen: !track.isOpen,
      },
    };

    setTracksById(tracksByIdTemp);
    setTracks(Object.values(tracksByIdTemp));
  };

  const start = new Date(`${START_YEAR}`);
  const end = new Date(`${START_YEAR + NUM_OF_YEARS}`);

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>React Timelines</h1>
      <Timeline
        scale={{
          start,
          end,
          zoom,
          zoomMin: MIN_ZOOM,
          zoomMax: MAX_ZOOM,
        }}
        isOpen={open}
        toggleOpen={handleToggleOpen}
        zoomIn={handleZoomIn}
        zoomOut={handleZoomOut}
        clickElement={clickElement}
        clickTrackButton={track => {
          // eslint-disable-next-line no-alert
          alert(JSON.stringify(track));
        }}
        timebar={timebar}
        tracks={tracks}
        now={now}
        toggleTrackOpen={handleToggleTrackOpen}
        enableSticky
        scrollToNow
      />
    </div>
  );
}

export default Holographic;
