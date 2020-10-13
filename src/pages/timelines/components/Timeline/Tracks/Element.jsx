/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import React from 'react';
import BasicElement from '../../Elements/Basic';
import styles from '../../../less/index.less';

const Element = props => {
  const {
    time,
    style,
    title,
    start,
    end,
    classes,
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
      className={styles['rt-track__element']}
      style={elementStyle}
      onClick={clickElement && handleClick && handleClick}
    >
      <BasicElement
        title={title}
        start={start}
        end={end}
        style={style}
        classes={classes}
        dataSet={dataSet}
        tooltip={tooltip}
      />
    </div>
  );
};

export default Element;
