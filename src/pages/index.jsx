import React, { useState } from 'react';
import Timeline from '@/components';
import { buildTimebar, buildTrack } from '@/utils/builders';
import { fill } from '@/utils/utils';
import { START_YEAR, NUM_OF_YEARS, NUM_OF_TRACKS } from '@/utils/constants';
import styles from './index.less';

const tracksByIdTemp = fill(NUM_OF_TRACKS).reduce((acc, i) => {
  const track = buildTrack(i + 1);
  acc[track.id] = track;
  return acc;
}, {});

const timebar = buildTimebar();

// eslint-disable-next-line no-alert
const clickElement = element =>
  alert(`Clicked element\n${JSON.stringify(element, null, 2)}`);

const MIN_ZOOM = 2;
const MAX_ZOOM = 20;

const now = new Date('2020-09-21');

export default props => {
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(2);
  const [tracksById, setTracksById] = useState(tracksByIdTemp);
  const [tracks, setTracks] = useState(Object.values(tracksByIdTemp));

  const start = new Date(`${START_YEAR}`);
  const end = new Date(`${START_YEAR + NUM_OF_YEARS}`);

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
    const newTracksById = {
      ...tracksById,
      [track.id]: {
        ...track,
        isOpen: !track.isOpen,
      },
    };
    setTracksById(newTracksById);
    setTracks(Object.values(newTracksById));
  };

  return (
    <div>
      <h1 className={styles.title}>Pain past is pleasure</h1>
      <div className={styles.warp}>
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
    </div>
  );
};
