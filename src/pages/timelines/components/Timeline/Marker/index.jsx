import React from 'react';
import cls from 'classnames';
import styles from '../../../less/index.less';

const Marker = ({ x, modifier, children, visible, highlighted }) => {
  return (
    <div
      className={cls({
        [styles['rt-marker']]: true,
        [styles['rt-marker--pointer']]: modifier === 'pointer',
        [styles['rt-marker--now']]: modifier === 'now',
        [styles['rt-is-visible']]: visible,
        [styles['rt-is-highlighted']]: highlighted,
      })}
      style={{ left: x }}
    >
      <div className={styles['rt-marker__label']}>
        <div className={styles['rt-marker__content']}>{children}</div>
      </div>
    </div>
  );
};

export default Marker;
