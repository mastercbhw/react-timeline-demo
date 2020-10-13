import React from 'react';
import Tracks from './Tracks';
import Grid from './Grid';
import styles from '../../less/index.less';

const Body = ({ time, grid, tracks, clickElement }) => (
  <div className={styles['rt-timeline__body']}>
    {grid && <Grid time={time} grid={grid} />}
    <Tracks time={time} tracks={tracks} clickElement={clickElement} />
  </div>
);

export default Body;
