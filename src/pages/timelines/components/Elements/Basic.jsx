import React from 'react';
import { getDayMonth } from '../../utils/formatDate';
import createClasses from '../../utils/classes';
import styles from '../../less/index.less';

const buildDataAttributes = (attributes = {}) => {
  const value = {};
  Object.keys(attributes).forEach(name => {
    value[`data-${name}`] = attributes[name];
  });
  return value;
};

const Basic = ({ title, start, end, style, classes, dataSet, tooltip }) => (
  <div
    className={createClasses('rt-element', classes)}
    style={style}
    {...buildDataAttributes(dataSet)}
  >
    <div className={styles['rt-element__content']} aria-hidden="true">
      <span className={styles['rt-element__title']}>{title}</span>
    </div>
    <div className={styles['rt-element__tooltip']}>
      {tooltip ? (
        // eslint-disable-next-line react/no-danger
        <div
          dangerouslySetInnerHTML={{ __html: tooltip.split('\n').join('<br>') }}
        />
      ) : (
        <div>
          <div>{title}</div>
          <div>
            <strong>Start</strong> {getDayMonth(start)}
          </div>
          <div>
            <strong>End</strong> {getDayMonth(end)}
          </div>
        </div>
      )}
    </div>
  </div>
);

export default Basic;
