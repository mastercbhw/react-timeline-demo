import React from 'react';
import PropTypes from 'prop-types';
import TrackKey from './TrackKey';
import styles from './index.less';

const TrackKeys = ({ tracks, toggleOpen, clickTrackButton }) => (
  <ul className={styles.rtTrackKeys}>
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

TrackKeys.defaultProps = {
  clickTrackButton: undefined,
};

TrackKeys.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  toggleOpen: PropTypes.func.isRequired,
  clickTrackButton: PropTypes.func,
};

export default TrackKeys;
