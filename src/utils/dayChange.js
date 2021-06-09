import Day from 'dayjs';
export const getDay = (time) => {
  return Day(time).format('YYYY-MM-DD');
};
