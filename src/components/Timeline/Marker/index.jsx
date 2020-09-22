import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';
import styles from './index.less';

const Marker = ({ x, modifier, children, visible, highlighted }) => {
  return (
    <div
      className={cls(styles.rtMarker, styles[`rtMarker-${modifier}`], {
        [styles.rtIsVisible]: visible,
        [styles.rtIsHighlighted]: highlighted,
      })}
      style={{ left: x }}
    >
      <div className="rt-marker__label">
        <div className="rt-marker__content">{children}</div>
      </div>
    </div>
  );
};

Marker.propTypes = {
  x: PropTypes.number.isRequired,
  modifier: PropTypes.string.isRequired,
  visible: PropTypes.bool,
  highlighted: PropTypes.bool,
  children: PropTypes.node,
};

export default Marker;
