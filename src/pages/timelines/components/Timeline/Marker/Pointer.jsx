import React from 'react';
import moment from 'moment';
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
        <strong>{moment(date).format('YYYY-MM-DD HH:mm:ss')}</strong>
      </div>
    </div>
  </Marker>
);

export default PointerMarker;
