import React, { useRef } from 'react';
import Sidebar from '@/components/Sidebar';
import styles from './index.less';

function Timeline(props) {
  const {
    tracks,
    toggleTrackOpen,
    sidebarWidth = 200,
    clickTrackButton,
  } = props;

  const layoutRef = useRef();

  return (
    <div className={styles.timelineWarp} ref={layoutRef}>
      <div className={styles.left}>
        <Sidebar
          tracks={tracks}
          toggleTrackOpen={toggleTrackOpen}
          sticky={{ isSticky: false, sidebarWidth: 200 }}
          sidebarWidth={sidebarWidth}
          clickTrackButton={clickTrackButton}
        />
      </div>

      <div className={styles.right}>aaa</div>
    </div>
  );
}

export default Timeline;
