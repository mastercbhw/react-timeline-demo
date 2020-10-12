import React, { useMemo } from 'react';
import { Icon } from 'antd';
import cls from 'classnames';
import styles from './index.less';

const SidebarItem = ({ data, setOpens, openIndex, opens }) => {
  const { title, children, id } = data;

  const hasChildren = useMemo(() => {
    return Array.isArray(children) && children.length > 0;
  }, [children]);

  // 点击进行折叠和展开
  const toggleOpen = () => {
    setOpens(opens.map((item, index) => (index === openIndex ? !item : item)));
  };

  return (
    <li className={styles.sidebarItem} key={id}>
      <div className={styles.firstTitle}>
        <div className={styles.titleWarp}>
          <span className={styles.title}>{title}</span>
        </div>
        <div className={styles.iconWarp}>
          {hasChildren ? (
            <Icon
              type={opens[openIndex] ? 'plus-square' : 'minus-square'}
              onClick={toggleOpen}
            />
          ) : null}
        </div>
      </div>
      {hasChildren && opens[openIndex] ? (
        <ul>
          {children.map(item => {
            return (
              <div className={styles.secondTitle} key={item.id}>
                {item.title}
              </div>
            );
          })}
        </ul>
      ) : null}
    </li>
  );
};

export default SidebarItem;
