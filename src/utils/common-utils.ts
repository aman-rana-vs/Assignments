import TimeAgo from 'javascript-time-ago';
// English.
import en from 'javascript-time-ago/locale/en';

TimeAgo.addDefaultLocale(en);

export function getTime(time: Date | number): string {
  const timeAgo = new TimeAgo('en-US');
  let timeStr = timeAgo.format(time);
  return timeStr;
}
