import React from 'react';
import Tracks from './index';
import Element from './Element';
import styles from '../../../less/index.less';

const Track = ({ time, elements, isOpen, tracks, clickElement }) => (
  <div className={styles['tr-track']}>
    <div className={styles['rt-track__elements']}>
      {/* {elements
        .filter(({ start, end }) => end > start)
        .map(element => (
          <Element
            key={element.id}
            time={time}
            clickElement={clickElement}
            {...element}
          />
        ))} */}
    </div>
    {isOpen && tracks && tracks.length > 0 ? (
      <Tracks time={time} tracks={tracks} clickElement={clickElement} />
    ) : null}
  </div>
);

export default Track;
