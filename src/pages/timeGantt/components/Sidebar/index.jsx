import React from 'react';
import Header from './Header';
import Body from './Body';
import styles from './index.less';

function Siderbar(props) {
  const { data, setOpens, opens } = props;
  return (
    <div className={styles.sidebar}>
      <Header />
      <Body data={data} opens={opens} setOpens={setOpens} />
    </div>
  );
}

export default Siderbar;
