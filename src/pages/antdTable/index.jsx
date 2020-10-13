import React from 'react';
import { Table } from 'antd';
import { useSize } from '@umijs/hooks';

const columns = (totalWidth, data) => {
  const removeNameWidth = totalWidth - 200;

  return [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 200,
      fixed: true,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '住院',
      dataIndex: 'time1',
      key: 'time1',
    },
  ];
};

const data = [
  {
    key: 1,
    name: '文书',
    age: 60,
    address: 'New York No. 1 Lake Park',
    time1: {
      startTime: '2020-01-10',
      endTime: '2020-01-11',
      id: 1,
    },
    children: [
      {
        key: 11,
        name: '入院记录单',
        age: 42,
        time1: {
          startTime: '2020-01-10',
          endTime: '2020-01-11',
          id: 2,
        },

        address: 'New York No. 2 Lake Park',
      },
      {
        key: 12,
        name: '入院评估单',
        age: 30,
        time1: {
          startTime: '2020-01-10',
          endTime: '2020-01-11',
          id: 3,
        },

        address: 'New York No. 3 Lake Park',
      },
      {
        key: 14,
        name: '入院评估单',
        age: 30,
        time1: {
          startTime: '2020-01-10',
          endTime: '2020-01-11',
          id: 4,
        },

        address: '疼痛评分',
      },
      {
        key: 15,
        name: '术前评估1',
        age: 30,
        time1: {
          startTime: '2020-01-10',
          endTime: '2020-01-11',
          id: 5,
        },

        address: '疼痛评分',
      },
    ],
  },
  {
    key: 13,
    name: '体征',
    age: 72,
    address: 'London No. 1 Lake Park',
    children: [
      {
        key: 131,
        name: '体温',
        age: 42,
        address: 'London No. 2 Lake Park',
      },
      {
        key: 132,
        name: '血压',
        age: 25,
        address: 'London No. 3 Lake Park',
      },
      {
        key: 133,
        name: '脉搏',
        age: 18,
        address: 'London No. 4 Lake Park',
      },
      {
        key: 134,
        name: '心率',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
      },
    ],
  },
];

function antdGantt() {
  const [state] = useSize(() => document.querySelector('.ant-table-thead'));
  const tableTotalWidth = state?.width;

  return (
    <div>
      <Table
        columns={columns(tableTotalWidth, data)}
        dataSource={data}
        scroll={{ x: 'max-content' }}
      />
    </div>
  );
}

export default antdGantt;
