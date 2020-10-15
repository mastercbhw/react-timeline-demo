import React from 'react';
import moment from 'moment';
import styles from '../../../less/index.less';

const Cell = ({ time, title, start, end }) => (
  <div
    className={styles['rt-timebar__cell']}
    style={time.toStyleLeftAndWidth(start, end)}
  >
    {title}
  </div>
);

export default Cell;
