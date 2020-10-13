import React from 'react';
import Row from './Row';
import styles from '../../../less/index.less';

const Timebar = ({ time, rows }) => (
  <div className={styles['rt-timebar']}>
    {rows.map(({ id, title, cells, style }) => (
      <Row key={id} time={time} title={title} cells={cells} style={style} />
    ))}
  </div>
);

export default Timebar;
