import React, { forwardRef } from 'react';
import styles from './index.less';
import RightHeader from './RightHeader';
import RightBody from './RightBody';

const RightContent = forwardRef((props, ref) => {
  const { data, opens, setOpens } = props;

  return (
    <div className={styles.rightContent} ref={ref}>
      <RightHeader />
      <RightBody data={data} opens={opens} setOpens={setOpens} />
    </div>
  );
});

export default RightContent;
