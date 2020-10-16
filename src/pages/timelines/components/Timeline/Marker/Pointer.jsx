import React from 'react';
import moment from 'moment';
import Marker from './index';

const PointerMarker = ({ time, date, visible, highlighted }) => {
  return (
    <Marker
      modifier="pointer"
      x={time.toX(date)}
      visible={visible}
      highlighted={highlighted}
    >
      <div>
        <strong>{moment(date).format('YYYY-MM-DD HH:mm:ss')}</strong>
      </div>
    </Marker>
  );
};

export default PointerMarker;
