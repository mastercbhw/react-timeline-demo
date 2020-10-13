import React from 'react';
import Toggle from './Toggle';
import ZoomIn from './ZoomIn';
import ZoomOut from './ZoomOut';
import styles from '../../less/index.less';

const Controls = ({
  isOpen = true,
  toggleOpen,
  zoomIn,
  zoomOut,
  zoom,
  zoomMin,
  zoomMax,
}) => (
  <div className={styles['rt-controls']}>
    <div className={styles['rt-controls__content']}>
      {toggleOpen && <Toggle isOpen={isOpen} toggleOpen={toggleOpen} />}
      {zoomIn && <ZoomIn zoomIn={zoomIn} zoomMax={zoomMax} zoom={zoom} />}
      {zoomOut && <ZoomOut zoomOut={zoomOut} zoomMin={zoomMin} zoom={zoom} />}
    </div>
  </div>
);

export default Controls;
