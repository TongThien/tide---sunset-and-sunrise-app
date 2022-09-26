import moment from 'moment';

export const convertMinsToHrsMins = (minutes: number): string => {
  const day = minutes % 24;
  const decimal = day % 1;
  const hour = Math.floor(day);
  const minute = Math.floor(decimal * 60);
  if (hour >= 10) {
    return moment(`${hour}${minute}`, 'HHmm').format('hh:mm a');
  }
  return moment(`0${hour}${minute}`, 'HHmm').format('hh:mm a');
};
