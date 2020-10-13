import React from 'react';
import { getDayMonth } from '../../../utils/formatDate';
import Marker from './index';

const PointerMarker = ({ time, date, visible, highlighted }) => (
  <Marker
    modifier="pointer"
    x={time.toX(date)}
    visible={visible}
    highlighted={highlighted}
  >
    <div>
      <div>
        <strong>{getDayMonth(date)}</strong>
      </div>
    </div>
  </Marker>
);

export default PointerMarker;
