/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

import BasicElement from '../../Elements/Basic';
import styles from './index.less';

const Element = props => {
  const {
    time,
    style,
    title,
    start,
    end,
    dataSet,
    tooltip,
    clickElement,
  } = props;

  const handleClick = () => {
    clickElement(props);
  };
  const elementStyle = {
    ...time.toStyleLeftAndWidth(start, end),
    ...(clickElement ? { cursor: 'pointer' } : {}),
  };

  return (
    <div
      className={styles.rtTrackElement}
      style={elementStyle}
      onClick={clickElement && handleClick && handleClick}
    >
      <BasicElement
        title={title}
        start={start}
        end={end}
        style={style}
        dataSet={dataSet}
        tooltip={tooltip}
      />
    </div>
  );
};

Element.defaultProps = {
  clickElement: () => {},
  dataSet: {},
  style: {},
  title: '',
  tooltip: '',
};

Element.propTypes = {
  time: PropTypes.shape({
    toStyleLeftAndWidth: PropTypes.func,
  }).isRequired,
  style: PropTypes.shape({}),
  dataSet: PropTypes.shape({}),
  title: PropTypes.string,
  start: PropTypes.instanceOf(Date).isRequired,
  end: PropTypes.instanceOf(Date).isRequired,
  tooltip: PropTypes.string,
  clickElement: PropTypes.func,
};

export default Element;
