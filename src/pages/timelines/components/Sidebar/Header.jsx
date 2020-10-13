import React from 'react';
import cls from 'classnames';
import styles from '../../less/index.less';

const Header = ({
  timebar,
  sticky: { isSticky, sidebarWidth, headerHeight } = {},
}) => (
  <div style={isSticky ? { paddingTop: headerHeight } : {}}>
    <div
      className={cls(styles['rt-sidebar__header'], {
        [styles['rt-is-sticky']]: isSticky,
      })}
      style={isSticky ? { width: sidebarWidth } : {}}
    >
      {timebar.map(({ id, title }) => (
        <div key={id} className={styles['rt-timebar-key']}>
          {title}
        </div>
      ))}
    </div>
  </div>
);

export default Header;
