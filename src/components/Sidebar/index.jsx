import React from 'react';
import PropTypes from 'prop-types';
import SideBarBody from './SideBarBody';
import styles from './index.less';

function Sidebar(props) {
  const {
    tracks,
    toggleTrackOpen,
    clickTrackButton,
    sidebarWidth,
    ref,
  } = props;
  return (
    <div className={styles.rtSidebar} style={{ width: sidebarWidth }} ref={ref}>
      <SideBarBody
        tracks={tracks}
        toggleTrackOpen={toggleTrackOpen}
        clickTrackButton={clickTrackButton}
      />
    </div>
  );
}

Sidebar.propTypes = {
  // timebar: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.string.isRequired,
  //     title: PropTypes.string,
  //   }).isRequired
  // ).isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({})).isRequired, // 轨道
  toggleTrackOpen: PropTypes.func.isRequired, // 打开
  sticky: PropTypes.shape({}).isRequired,
  clickTrackButton: PropTypes.func.isRequired, // 点击按钮
};

export default Sidebar;
