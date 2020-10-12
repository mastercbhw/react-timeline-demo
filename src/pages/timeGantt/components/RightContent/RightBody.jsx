import React from 'react';
import RightRows from './RightRows';

function RightBody(props) {
  const { data, opens } = props;
  return <RightRows data={data} opens={opens} />;
}

export default RightBody;
