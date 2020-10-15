import React from 'react';
import Track from './Track';
import styles from '../../../less/index.less';

const Tracks = ({ time, tracks, clickElement }) => {
  return (
    <div className={styles['rt-tracks']}>
      {tracks.map(({ id, elements, isOpen, tracks: children }) => (
        <Track
          key={id}
          time={time}
          elements={elements}
          isOpen={isOpen}
          tracks={children}
          clickElement={clickElement}
        />
      ))}
    </div>
  );
};

export default Tracks;
