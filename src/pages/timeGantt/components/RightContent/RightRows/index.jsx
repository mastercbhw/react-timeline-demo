import React from 'react';
import RightRowItem from './RightRowItem';
import styles from './index.less';

function RightRows(props) {
  const { data, opens } = props;
  return (
    <ul className={styles.rightRows}>
      {data.map((track, index) => (
        <RightRowItem
          key={track.id}
          data={track}
          openIndex={index}
          opens={opens}
        />
      ))}
    </ul>
  );
}

export default RightRows;
