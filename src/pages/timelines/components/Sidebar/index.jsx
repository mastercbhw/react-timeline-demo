import React from 'react';
import Header from './Header';
import Body from './Body';
import styles from '../../less/index.less';

const Sidebar = ({
  timebar,
  tracks,
  toggleTrackOpen,
  sticky,
  clickTrackButton,
}) => (
  <div className={styles['rt-sidebar']}>
    <Header timebar={timebar} sticky={sticky} />
    <Body
      tracks={tracks}
      toggleTrackOpen={toggleTrackOpen}
      clickTrackButton={clickTrackButton}
    />
  </div>
);

export default Sidebar;
