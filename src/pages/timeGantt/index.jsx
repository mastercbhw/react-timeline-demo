import React, { useEffect, useState } from 'react';
import uuid from 'uuid';
import styles from './index.less';
import TimeGanttCharts from './components/TimeGantt';

function TimeGantt() {
  const startTime = '2020-07';
  const endTime = '2020-10';

  const data2 = [
    {
      title: '文书',
      sTime: '2020-08-01 13:00:01',
      eTime: '2020-08-01 13:00:01',
    },
  ];

  const data = [
    {
      id: 1,
      diagnosis: '高血压',
      type: '门诊',
      sTime: '2020-08-01 12:00:01',
      eTime: '2020-08-01 18:00:00',
      checkItems: [
        {
          sTime: '2020-08-01 13:00:01',
          eTime: '2020-08-01 13:00:01',
          type: 'wenshu',
          id: uuid(),
          title: '文书',
          checkItems: [
            {
              sTime: '2020-08-01 13:00:01',
              eTime: '2020-08-01 13:10:01',
              type: 'xcg',
              id: uuid(),
            },
            {
              sTime: '2020-08-01 13:20:01',
              eTime: '2020-08-01 13:30:01',
              type: 'xcg',
              id: uuid(),
            },
            {
              sTime: '2020-08-01 13:40:01',
              eTime: '2020-08-01 13:50:01',
              type: 'xcg',
              id: uuid(),
            },
            {
              sTime: '2020-08-01 14:00:01',
              eTime: '2020-08-01 14:05:01',
              type: 'xcg',
              id: uuid(),
            },
            {
              sTime: '2020-08-01 14:20:01',
              eTime: '2020-08-01 14:30:01',
              type: 'xcg',
              id: uuid(),
            },
            {
              sTime: '2020-08-01 14:40:01',
              eTime: '2020-08-01 14:00:42',
              type: 'xcg',
              id: uuid(),
            },
          ],
          children: [
            {
              title: '入院记录单',
              type: 'ruyuanjiludan',
              id: uuid(),
              checkItems: [
                {
                  sTime: '2020-08-01 13:00:01',
                  eTime: '2020-08-01 13:10:01',
                  type: 'xcg',
                  id: uuid(),
                },
                {
                  sTime: '2020-08-01 13:20:01',
                  eTime: '2020-08-01 13:30:01',
                  type: 'xcg',
                  id: uuid(),
                },
              ],
            },
            {
              title: '入院评估单',
              type: 'ruyuanpinggudan',
              id: uuid(),
              checkItems: [
                {
                  sTime: '2020-08-01 13:40:01',
                  eTime: '2020-08-01 13:50:01',
                  type: 'xcg',
                  id: uuid(),
                },
                {
                  sTime: '2020-08-01 14:00:01',
                  eTime: '2020-08-01 14:05:01',
                  type: 'xcg',
                  id: uuid(),
                },
              ],
            },
            {
              title: '疼痛评分',
              type: 'tengtongpingfenn',
              id: uuid(),
              checkItems: [
                {
                  sTime: '2020-08-01 14:20:01',
                  eTime: '2020-08-01 14:30:01',
                  type: 'xcg',
                  id: uuid(),
                },
                {
                  sTime: '2020-08-01 14:40:01',
                  eTime: '2020-08-01 14:00:42',
                  type: 'xcg',
                  id: uuid(),
                },
              ],
            },
          ],
        },
        {
          sTime: '2020-08-01 13:00:01',
          eTime: '2020-08-01 13:00:01',
          type: 'wenshu',
          id: uuid(),
          title: '文书',
          checkItems: [
            {
              sTime: '2020-08-01 13:00:01',
              eTime: '2020-08-01 13:10:01',
              type: 'xcg',
              id: uuid(),
            },
            {
              sTime: '2020-08-01 13:20:01',
              eTime: '2020-08-01 13:30:01',
              type: 'xcg',
              id: uuid(),
            },
            {
              sTime: '2020-08-01 13:40:01',
              eTime: '2020-08-01 13:50:01',
              type: 'xcg',
              id: uuid(),
            },
            {
              sTime: '2020-08-01 14:00:01',
              eTime: '2020-08-01 14:05:01',
              type: 'xcg',
              id: uuid(),
            },
            {
              sTime: '2020-08-01 14:20:01',
              eTime: '2020-08-01 14:30:01',
              type: 'xcg',
              id: uuid(),
            },
            {
              sTime: '2020-08-01 14:40:01',
              eTime: '2020-08-01 14:00:42',
              type: 'xcg',
              id: uuid(),
            },
          ],
          children: [
            {
              title: '入院记录单',
              type: 'ruyuanjiludan',
              id: uuid(),
              checkItems: [
                {
                  sTime: '2020-08-01 13:00:01',
                  eTime: '2020-08-01 13:10:01',
                  type: 'xcg',
                  id: uuid(),
                },
                {
                  sTime: '2020-08-01 13:20:01',
                  eTime: '2020-08-01 13:30:01',
                  type: 'xcg',
                  id: uuid(),
                },
              ],
            },
            {
              title: '入院评估单',
              type: 'ruyuanpinggudan',
              id: uuid(),
              checkItems: [
                {
                  sTime: '2020-08-01 13:40:01',
                  eTime: '2020-08-01 13:50:01',
                  type: 'xcg',
                  id: uuid(),
                },
                {
                  sTime: '2020-08-01 14:00:01',
                  eTime: '2020-08-01 14:05:01',
                  type: 'xcg',
                  id: uuid(),
                },
              ],
            },
            {
              title: '疼痛评分',
              type: 'tengtongpingfenn',
              id: uuid(),
              checkItems: [
                {
                  sTime: '2020-08-01 14:20:01',
                  eTime: '2020-08-01 14:30:01',
                  type: 'xcg',
                  id: uuid(),
                },
                {
                  sTime: '2020-08-01 14:40:01',
                  eTime: '2020-08-01 14:00:42',
                  type: 'xcg',
                  id: uuid(),
                },
              ],
            },
          ],
        },
        {
          sTime: '2020-08-01 13:00:01',
          eTime: '2020-08-01 13:00:01',
          type: 'wenshu',
          id: uuid(),
          title: '文书',
          checkItems: [
            {
              sTime: '2020-08-01 13:00:01',
              eTime: '2020-08-01 13:10:01',
              type: 'xcg',
              id: uuid(),
            },
            {
              sTime: '2020-08-01 13:20:01',
              eTime: '2020-08-01 13:30:01',
              type: 'xcg',
              id: uuid(),
            },
            {
              sTime: '2020-08-01 13:40:01',
              eTime: '2020-08-01 13:50:01',
              type: 'xcg',
              id: uuid(),
            },
            {
              sTime: '2020-08-01 14:00:01',
              eTime: '2020-08-01 14:05:01',
              type: 'xcg',
              id: uuid(),
            },
            {
              sTime: '2020-08-01 14:20:01',
              eTime: '2020-08-01 14:30:01',
              type: 'xcg',
              id: uuid(),
            },
            {
              sTime: '2020-08-01 14:40:01',
              eTime: '2020-08-01 14:00:42',
              type: 'xcg',
              id: uuid(),
            },
          ],
          children: [
            {
              title: '入院记录单',
              type: 'ruyuanjiludan',
              id: uuid(),
              checkItems: [
                {
                  sTime: '2020-08-01 13:00:01',
                  eTime: '2020-08-01 13:10:01',
                  type: 'xcg',
                  id: uuid(),
                },
                {
                  sTime: '2020-08-01 13:20:01',
                  eTime: '2020-08-01 13:30:01',
                  type: 'xcg',
                  id: uuid(),
                },
              ],
            },
            {
              title: '入院评估单',
              type: 'ruyuanpinggudan',
              id: uuid(),
              checkItems: [
                {
                  sTime: '2020-08-01 13:40:01',
                  eTime: '2020-08-01 13:50:01',
                  type: 'xcg',
                  id: uuid(),
                },
                {
                  sTime: '2020-08-01 14:00:01',
                  eTime: '2020-08-01 14:05:01',
                  type: 'xcg',
                  id: uuid(),
                },
              ],
            },
            {
              title: '疼痛评分',
              type: 'tengtongpingfenn',
              id: uuid(),
              checkItems: [
                {
                  sTime: '2020-08-01 14:20:01',
                  eTime: '2020-08-01 14:30:01',
                  type: 'xcg',
                  id: uuid(),
                },
                {
                  sTime: '2020-08-01 14:40:01',
                  eTime: '2020-08-01 14:00:42',
                  type: 'xcg',
                  id: uuid(),
                },
              ],
            },
          ],
        },
        {
          sTime: '2020-08-01 13:00:01',
          eTime: '2020-08-01 13:00:01',
          type: 'wenshu',
          id: uuid(),
          title: '文书',
          checkItems: [
            {
              sTime: '2020-08-01 13:00:01',
              eTime: '2020-08-01 13:10:01',
              type: 'xcg',
              id: uuid(),
            },
            {
              sTime: '2020-08-01 13:20:01',
              eTime: '2020-08-01 13:30:01',
              type: 'xcg',
              id: uuid(),
            },
            {
              sTime: '2020-08-01 13:40:01',
              eTime: '2020-08-01 13:50:01',
              type: 'xcg',
              id: uuid(),
            },
            {
              sTime: '2020-08-01 14:00:01',
              eTime: '2020-08-01 14:05:01',
              type: 'xcg',
              id: uuid(),
            },
            {
              sTime: '2020-08-01 14:20:01',
              eTime: '2020-08-01 14:30:01',
              type: 'xcg',
              id: uuid(),
            },
            {
              sTime: '2020-08-01 14:40:01',
              eTime: '2020-08-01 14:00:42',
              type: 'xcg',
              id: uuid(),
            },
          ],
          children: [
            {
              title: '入院记录单',
              type: 'ruyuanjiludan',
              id: uuid(),
              checkItems: [
                {
                  sTime: '2020-08-01 13:00:01',
                  eTime: '2020-08-01 13:10:01',
                  type: 'xcg',
                  id: uuid(),
                },
                {
                  sTime: '2020-08-01 13:20:01',
                  eTime: '2020-08-01 13:30:01',
                  type: 'xcg',
                  id: uuid(),
                },
              ],
            },
            {
              title: '入院评估单',
              type: 'ruyuanpinggudan',
              id: uuid(),
              checkItems: [
                {
                  sTime: '2020-08-01 13:40:01',
                  eTime: '2020-08-01 13:50:01',
                  type: 'xcg',
                  id: uuid(),
                },
                {
                  sTime: '2020-08-01 14:00:01',
                  eTime: '2020-08-01 14:05:01',
                  type: 'xcg',
                  id: uuid(),
                },
              ],
            },
            {
              title: '疼痛评分',
              type: 'tengtongpingfenn',
              id: uuid(),
              checkItems: [
                {
                  sTime: '2020-08-01 14:20:01',
                  eTime: '2020-08-01 14:30:01',
                  type: 'xcg',
                  id: uuid(),
                },
                {
                  sTime: '2020-08-01 14:40:01',
                  eTime: '2020-08-01 14:00:42',
                  type: 'xcg',
                  id: uuid(),
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className={styles.timeGantt}>
      <TimeGanttCharts startTime={startTime} endTime={endTime} data={data} />
    </div>
  );
}

export default TimeGantt;
