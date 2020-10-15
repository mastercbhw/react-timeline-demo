import moment from 'moment';

const buildTimeCells = (startTime, endTime) => {
  const dateList = [];

  // 开始时间和结束时间的时间戳
  const startTimeM = moment(startTime);
  const startTimeMTemp = moment(startTime);
  const endTimeM = moment(endTime);

  while (endTimeM - startTimeM >= 0) {
    const startString = startTimeM.format('YYYY-MM-DD HH:mm:ss');
    dateList.push({
      start: new Date(startString),
      end: new Date(startTimeMTemp.add(1, 'd').format('YYYY-MM-DD HH:mm:ss')),
      id: startString,
      title: startTimeM.format('YYYY-MM-DD'),
    });
    startTimeM.add(1, 'd');
  }
  return dateList;
};

export const buildTimebarCL = (startTime, endTime) => [
  {
    id: 'time',
    title: 'time',
    cells: buildTimeCells(startTime, endTime),
    style: {},
    useAsGrid: true,
  },
];
