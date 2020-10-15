import React, { PureComponent } from 'react';
import moment from 'moment';
import Marker from './index';
import { getDayMonth } from '../../../utils/formatDate';

class NowMarker extends PureComponent {
  render() {
    const { now, time, visible } = this.props;
    return (
      <Marker modifier="now" x={time.toX(now)} visible={visible}>
        <div>
          <div>今天</div>
          <strong>{moment(now).format('YYYY-MM-DD HH:mm:ss')}</strong>
        </div>
      </Marker>
    );
  }
}

export default NowMarker;
