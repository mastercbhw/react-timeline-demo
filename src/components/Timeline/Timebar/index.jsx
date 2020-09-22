import React from 'react';
import PropTypes from 'prop-types';

import Row from './Row';
import styles from './index.less';

const Timebar = ({ time, rows }) => (
  <div className={styles.rtTimebar}>
    {rows.map(({ id, title, cells, style }) => (
      <Row key={id} time={time} title={title} cells={cells} style={style} />
    ))}
  </div>
);

Timebar.propTypes = {
  time: PropTypes.shape({}).isRequired,
  rows: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Timebar;
