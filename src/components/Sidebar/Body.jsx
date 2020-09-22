import React from 'react';
import PropTypes from 'prop-types';

import TrackKeys from './TrackKeys';
import styles from './index.less';

const Body = ({ tracks, toggleTrackOpen, clickTrackButton }) => (
  <div className={styles.rtSidebarBody}>
    <TrackKeys
      tracks={tracks}
      toggleOpen={toggleTrackOpen}
      clickTrackButton={clickTrackButton}
    />
  </div>
);

Body.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  toggleTrackOpen: PropTypes.func.isRequired,
  clickTrackButton: PropTypes.func.isRequired,
};

export default Body;
