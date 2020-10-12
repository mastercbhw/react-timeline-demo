import React from 'react';
import SidebarItems from './SidebarItems';

function Body(props) {
  const { data, opens, setOpens } = props;
  return (
    <div>
      <SidebarItems
        data={data}
        opens={opens}
        setOpens={setOpens}
        // tracks={tracks}
        // toggleOpen={toggleTrackOpen}
        // clickTrackButton={clickTrackButton}
      />
    </div>
  );
}

export default Body;
