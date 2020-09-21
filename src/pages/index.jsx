import React, { useState } from 'react';
import Timeline from '@/components/Timeline';
import { buildTimebar, buildTrack } from '@/utils/builders';
import { fill } from '@/utils/utils';
import { START_YEAR, NUM_OF_YEARS, NUM_OF_TRACKS } from '@/utils/constants';
import styles from './index.less';

const tracksByIdTemp = fill(NUM_OF_TRACKS).reduce((acc, i) => {
  const track = buildTrack(i + 1);
  acc[track.id] = track;
  return acc;
}, {});

export default props => {
  const [tracksById, setTracksById] = useState(tracksByIdTemp);
  const [tracks, setTracks] = useState(Object.values(tracksByIdTemp));

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
          // timebar={timebar}
          tracks={tracks}
          toggleTrackOpen={handleToggleTrackOpen}
          clickTrackButton={track => {
            // eslint-disable-next-line no-alert
            alert(JSON.stringify(track));
          }}
        />
      </div>
    </div>
  );
};
