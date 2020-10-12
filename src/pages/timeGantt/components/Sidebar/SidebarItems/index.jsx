import React from 'react';
import SidebarItem from './SidebarItem';
import styles from './index.less';

function SidebarItems(props) {
  const { data, opens, setOpens } = props;
  return (
    <ul className={styles.sidebarItems}>
      {data.map((track, index) => (
        <SidebarItem
          key={track.id}
          data={track}
          openIndex={index}
          setOpens={setOpens}
          opens={opens}
          // toggleOpen={toggleOpen}
        />
      ))}
    </ul>
  );
}

export default SidebarItems;
