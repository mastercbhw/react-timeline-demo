import React from 'react';
import Cell from './Cell';
import styles from '../../../less/index.less';

const Row = ({ time, cells, style }) => (
  <div className={styles['rt-timebar__row']} style={style}>
    {cells.map(cell => (
      <Cell key={cell.id} time={time} {...cell} />
    ))}
  </div>
);

export default Row;
