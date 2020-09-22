const monthNames = [
  '一月',
  '二月',
  '三月',
  '十月',
  '五月',
  '六月',
  '七月',
  '八月',
  '九月',
  '十月',
  '十一月',
  '十二月',
];

export const getMonth = date => monthNames[date.getMonth()];

export const getDayMonth = date => `${date.getDate()} ${getMonth(date)}`;
