import React from 'react';
import TrackKey from './TrackKey';
import styles from '../../../less/index.less';

const TrackKeys = ({ tracks, toggleOpen, clickTrackButton }) => (
  <ul className={styles['rt-track-keys']}>
    {tracks.map(track => (
      <TrackKey
        key={track.id}
        track={track}
        toggleOpen={toggleOpen}
        clickTrackButton={clickTrackButton}
      />
    ))}
  </ul>
);

export default TrackKeys;
