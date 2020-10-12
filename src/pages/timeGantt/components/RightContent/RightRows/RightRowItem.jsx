import React, { useMemo } from 'react';
import styles from './index.less';

const RightRowItem = ({ data, openIndex, opens }) => {
  const { title, children, id } = data;

  const hasChildren = useMemo(() => {
    return Array.isArray(children) && children.length > 0;
  }, [children]);

  return (
    <li className={styles.rightRowItem} key={id}>
      <div className={styles.firstRow}>aaaaaa</div>
      {hasChildren && opens[openIndex] ? (
        <ul>
          {children.map(item => {
            return (
              <div className={styles.secondRow} key={item.id}>
                {item.title}
              </div>
            );
          })}
        </ul>
      ) : null}
    </li>
  );
};

export default RightRowItem;
