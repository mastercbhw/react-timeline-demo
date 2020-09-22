import React from 'react';
import PropTypes from 'prop-types';
import { getDayMonth } from '@/utils/formatDate';
import createClasses from '@/utils/classes';
import cls from 'classnames';
import styles from './index.less';

const buildDataAttributes = (attributes = {}) => {
  const value = {};
  Object.keys(attributes).forEach(name => {
    value[`data-${name}`] = attributes[name];
  });
  return value;
};

const Basic = ({ title, start, end, style, classes, dataSet, tooltip }) => (
  <div
    className={cls(styles.rtElement, classes)}
    style={style}
    {...buildDataAttributes(dataSet)}
  >
    <div className={styles.rtElementContent} aria-hidden="true">
      <span className={styles.rtElementTitle}>{title}</span>
    </div>
    <div className={styles.rtElementTooltip}>
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

Basic.defaultProps = {
  tooltip: '',
  dataSet: {},
};

Basic.propTypes = {
  title: PropTypes.string.isRequired,
  start: PropTypes.instanceOf(Date).isRequired,
  end: PropTypes.instanceOf(Date).isRequired,
  style: PropTypes.shape({}).isRequired,
  dataSet: PropTypes.shape({}),
  tooltip: PropTypes.string,
};

export default Basic;
