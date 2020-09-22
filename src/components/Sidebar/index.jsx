import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Body from './Body';
import styles from './index.less';

const Sidebar = ({
  timebar,
  tracks,
  toggleTrackOpen,
  sticky,
  clickTrackButton,
}) => (
  <div className={styles.rtSidebar}>
    <Header timebar={timebar} sticky={sticky} />
    <Body
      tracks={tracks}
      toggleTrackOpen={toggleTrackOpen}
      clickTrackButton={clickTrackButton}
    />
  </div>
);

Sidebar.propTypes = {
  timebar: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
    }).isRequired,
  ).isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  toggleTrackOpen: PropTypes.func.isRequired,
  sticky: PropTypes.shape({}).isRequired,
  clickTrackButton: PropTypes.func.isRequired,
};

export default Sidebar;
