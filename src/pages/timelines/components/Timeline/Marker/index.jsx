import React from 'react';
import cls from 'classnames';
import styles from '../../../less/index.less';

const Marker = ({ x, modifier, children, visible, highlighted }) => (
  <div
    className={cls({
      [styles['rt-marker']]: true,
      [styles[`rt-marker--${modifier}`]]: true,
      [styles[`rt-is-visible`]]: visible,
      [styles[`rt-is-highlighted`]]: highlighted,
    })}
    style={{ left: `${x}px` }}
  >
    <div className={styles['rt-marker__label']}>
      <div className={styles['rt-marker__content']}>{children}</div>
    </div>
  </div>
);

export default Marker;
