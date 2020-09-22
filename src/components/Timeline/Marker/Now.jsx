import React from 'react';
import PropTypes from 'prop-types';

import { getDayMonth } from '@/utils/formatDate';
import Marker from './index';

function NowMarker(props) {
  const { now, time, visible } = props;
  console.log('NowMarker -> time', time);

  return (
    <Marker
      modifier="now"
      x={time.toX(now)}
      visible={visible}
      highlighted={false}
    >
      <div>
        <div>今天</div>
        <strong>{getDayMonth(now)}</strong>
      </div>
    </Marker>
  );
}

NowMarker.propTypes = {
  time: PropTypes.shape({
    toX: PropTypes.func.isRequired,
  }).isRequired,
  visible: PropTypes.bool.isRequired,
  now: PropTypes.instanceOf(Date).isRequired,
};

export default NowMarker;
