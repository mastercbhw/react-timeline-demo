import React, { useEffect, useState, useRef } from 'react';
import { useScroll } from '@umijs/hooks';
import Sidebar from '../Sidebar';
import RightContent from '../RightContent';
import styles from './index.less';
import TimeRangeBar from '../TimeRangeBar';

function TimeGantt(props) {
  const siderbarData = props?.data?.[0]?.checkItems || [];

  const [opens, setOpens] = useState([]);

  useEffect(() => {
    setOpens(siderbarData.map(() => true));
  }, [siderbarData]);

  const [scroll, mainRef] = useScroll(); // 包裹left和right的ref，设置scrollLeft
  const rightWarpRef = useRef(); // right的外容器的宽度
  const rightScrollRef = useRef(); // right的内核心元素宽度

  const rightWarpWidth =
    rightWarpRef.current?.offsetWidth || rightWarpRef.current?.clientWidth;
  const rightScrollWidth =
    rightScrollRef.current?.offsetWidth || rightScrollRef.current?.clientWidth;

  return (
    <div className={styles.warp}>
      <div className={styles.timeGanttWarp}>
        <div className={styles.tagsHeader}>tags</div>
        <div className={styles.diagnosisBar}>诊断信息</div>
        <div className={styles.ganttMain} ref={mainRef}>
          <div className={styles.left} style={{ left: scroll.left || 0 }}>
            <Sidebar data={siderbarData} opens={opens} setOpens={setOpens} />
          </div>
          <div className={styles.right}>
            <div className={styles.rightScrollContainer} ref={rightWarpRef}>
              <RightContent
                ref={rightScrollRef}
                data={siderbarData}
                opens={opens}
                setOpens={setOpens}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.timeRangeBar}>
        <TimeRangeBar />
      </div>
    </div>
  );
}

export default TimeGantt;
