/**
 * 把 UTC 时间转换为本地时间
 *
 * @param {number | string} date - 要转换的 UTC 时间，可以是时间戳或日期字符串。
 * @returns {Date} - 转换后的本地时间 Date 对象。
 *
 * @example
 * const localTime = convertUTCToLocal('2024-10-13T12:00:00Z');
 * console.log(localTime); // 输出本地时间
 */
export function convertUTCToLocal(date: number | string): Date {
  const dateObj = new Date(date);
  const localTime = new Date(dateObj.getTime() - (dateObj.getTimezoneOffset() * 60 * 1000));
  return localTime;
}

/**
 * 把本地时间转换为 UTC 时间
 *
 * @param {number | string} date - 要转换的本地时间，可以是时间戳或日期字符串。
 * @returns {Date} - 转换后的 UTC 时间 Date 对象。
 *
 * @example
 * const utcTime = convertLocalToUTC(new Date());
 * console.log(utcTime.toISOString()); // 输出 UTC 时间
 */
export function convertLocalToUTC(date: number | string): Date {
  const dateObj = new Date(date);
  const utcTime = new Date(dateObj.getTime() + (dateObj.getTimezoneOffset() * 60 * 1000));
  return utcTime;
}
