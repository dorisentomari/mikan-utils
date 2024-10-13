/**
 * 把UTC时间转换为本地时间
 * @param date
 */
export function convertUTCToLocal(date: number | string) {
  const dateObj = new Date(date);
  const newDate = new Date(dateObj.getTime() + dateObj.getTimezoneOffset() * 60 * 1000);
  const offset = dateObj.getTimezoneOffset() / 60;
  const hours = dateObj.getHours();
  newDate.setHours(hours - offset);
  return newDate;
}

/**
 * 把本地时间转换为UTC时间
 * @param date
 */
export function convertLocalToUTC(date: number | string) {
  const dateObj = new Date(date);
  const newDate = new Date(dateObj.getTime() - dateObj.getTimezoneOffset() * 60 * 1000);
  const offset = dateObj.getTimezoneOffset() / 60;
  const hours = dateObj.getHours();
  newDate.setHours(hours + offset);
  return newDate;
}
