import React, { PureComponent } from 'react';
import Marker from './index';
import { getDayMonth } from '../../../utils/formatDate';

class NowMarker extends PureComponent {
  render() {
    const { now, time, visible } = this.props;
    return (
      <Marker modifier="now" x={time.toX(now)} visible={visible}>
        <div>
          <div>Today</div>
          <strong>{getDayMonth(now)}</strong>
        </div>
      </Marker>
    );
  }
}

export default NowMarker;
