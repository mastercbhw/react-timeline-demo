import React, { useEffect, useState } from 'react';
import {
  features,
  isLeafNode,
  BaseTable,
  useTablePipeline,
} from 'ali-react-table';
import cloneDeep from 'lodash/cloneDeep';
import { DatePicker } from 'antd';
import moment from 'moment';
import styles from './index.less';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

const firstColumn = [
  {
    width: 100,
    name: 'Name',
    code: 'name',
    lock: true,
  },
  {
    width: 100,
    name: 'elements',
    code: 'elements',
    render: (value, record, rowIndex) => {
      return (
        <div
          style={{
            position: 'absolute',
            left: 0,
            width: 1000,
            background: '#178eae',
            zIndex: 2,
            height: 20,
          }}
        />
      );
      // < span onClick = {() => { console.log(value, record) }}> bbb</ >
    },
  },
];

// 获取时间的列
const getTimeColumns = (start, end) => {
  console.log('getTimeColumns -> end', end);
  console.log('getTimeColumns -> start', start);
  const dateList = [];

  const startTemp = cloneDeep(start);

  // 开始时间和结束时间的时间戳

  while (end - start >= 0) {
    const startString = start.format('YYYY-MM-DD HH mm ss');
    const cellEnd = startTemp.add(1, 'd');
    dateList.push({
      start,
      end: cellEnd,
      name: startString,
      code: start.format('YYYY-MM-DD'),
      render: (value, record, rowIndex) => {
        return (
          <span
            onClick={() => {
              console.log(record);
            }}
          >
            {moment(cellEnd).format('YYYY-MM-DD')}
          </span>
        );
      },
    });
    start.add(1, 'd');
  }
  return [...firstColumn, ...dateList];
};

const columns4 = [
  {
    name: 'Name',
    code: 'name',
  },
  {
    name: 'Age',
    code: 'age',
  },
  {
    name: 'Address',
    code: 'address',
  },
];

const data = [
  {
    id: 1,
    name: '文书',
    age: 60,
    elements: [
      {
        id: 't-2-el-1',
        name: 'pernicious designer',
        start: '2020-06-29 16:00:00',
        end: '2020-06-31 16:00:00',
        style: {
          backgroundColor: '#0085B6',
          color: '#ffffff',
          borderRadius: '4px',
          boxShadow: '1px 1px 0px rgba(0, 0, 0, 0.25)',
          textTransform: 'capitalize',
        },
      },
      {
        id: 't-2-el-2',
        name: 'arcadian stylist',
        start: '2020-01-31 16:00:00',
        end: '2020-05-31 16:00:00',
        style: {
          backgroundColor: '#0BB4C1',
          color: '#000000',
          borderRadius: '4px',
          boxShadow: '1px 1px 0px rgba(0, 0, 0, 0.25)',
          textTransform: 'capitalize',
        },
      },
      {
        id: 't-2-el-3',
        name: 'sartorial stationary engineer',
        start: '2020-06-30 16:00:00',
        end: '2020-07-28 16:00:00',
        style: {
          backgroundColor: '#00D49D',
          color: '#000000',
          borderRadius: '4px',
          boxShadow: '1px 1px 0px rgba(0, 0, 0, 0.25)',
          textTransform: 'capitalize',
        },
      },
      {
        id: 't-2-el-4',
        name: 'querulous senor',
        start: '2020-05-31 16:00:00',
        end: '2020-10-01 00:00:00',
        style: {
          backgroundColor: '#FEDF03',
          color: '#000000',
          borderRadius: '4px',
          boxShadow: '1px 1px 0px rgba(0, 0, 0, 0.25)',
          textTransform: 'capitalize',
        },
      },
      {
        id: 't-2-el-5',
        name: 'sclerotic ukulele',
        start: '2020-01-01 00:00:00',
        end: '2020-02-28 16:00:00',
        style: {
          backgroundColor: '#233D4D',
          color: '#ffffff',
          borderRadius: '4px',
          boxShadow: '1px 1px 0px rgba(0, 0, 0, 0.25)',
          textTransform: 'capitalize',
        },
      },
    ],
    children: [
      {
        id: 11,
        name: '文书1啊啊啊啊啊啊',
        age: 42,
      },
      {
        id: 12,
        name: '文书2',
        age: 30,
      },
      {
        id: 13,
        name: '文书3',
        age: 72,
      },
    ],
  },
  {
    id: 2,
    name: '体征',
    children: [
      {
        id: 11,
        name: '体征1',
        age: 42,
      },
      {
        id: 12,
        name: '体征2',
        age: 30,
      },
      {
        id: 13,
        name: '体征3',
        age: 72,
      },
    ],
  },
];

function TimelineTable() {
  const [openKeys, onChangeOpenKeys] = useState(['4', '4-2']);
  const [start, setStart] = useState(moment('2020-01-01'));
  const [end, setEnd] = useState(moment('2020-12-31'));

  const [columns, setColumns] = useState(getTimeColumns(start, end));

  const pipeline = useTablePipeline()
    .input({ dataSource: data, columns })
    .primaryKey('id')
    .use(features.columnRangeHover())
    .use(
      features.treeMode({
        defaultOpenKeys: ['1'],
        clickArea: 'cell',
      }),
    );

  function onChange(date) {
    if (date) {
      setStart([date[0]]);
      setEnd([date[1]]);
      setColumns(getTimeColumns(date[0], date[1]));
      pipeline.mapColumns(() => {
        const newColumns = getTimeColumns(date[0], date[1]);
        return newColumns;
      });
    }
  }

  return (
    <div className={styles.timelineTable}>
      <div style={{ marginBottom: 20 }}>
        <RangePicker onChange={onChange} value={[start, end]} />
      </div>
      <BaseTable
        {...pipeline.getProps()}
        defaultColumnWidth={50}
        useVirtual={false}
      />
    </div>
  );
}

export default TimelineTable;
