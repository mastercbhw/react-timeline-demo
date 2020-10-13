import React from 'react';
import styles from '../../../less/index.less';

const Grid = ({ time, grid }) => (
  <div className={styles['rt-grid']}>
    {grid.map(({ id, start, end }) => (
      <div
        key={id}
        className={styles['rt-grid__cell']}
        style={time.toStyleLeftAndWidth(start, end)}
      />
    ))}
  </div>
);

export default Grid;
