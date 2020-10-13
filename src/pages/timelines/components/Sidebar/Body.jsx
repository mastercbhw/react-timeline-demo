import React from 'react';
import TrackKeys from './TrackKeys';
import styles from '../../less/index.less';

const Body = ({ tracks, toggleTrackOpen, clickTrackButton }) => (
  <div className={styles['rt-sidebar__body']}>
    <TrackKeys
      tracks={tracks}
      toggleOpen={toggleTrackOpen}
      clickTrackButton={clickTrackButton}
    />
  </div>
);

export default Body;
