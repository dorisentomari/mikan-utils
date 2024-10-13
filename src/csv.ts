import { isPlainObject, isString } from './common';

/**
 * 转换 CSV 为 JSON
 *
 * @param data
 * @param delimiter
 */
export function CSVtoJSON(data = '', delimiter = ',') {
  if (isString(data)) {
    if (data.length === 0) {
      return {};
    }
    const firstLineIndex = data.indexOf('\n');
    const titles = data.slice(0, firstLineIndex).split(delimiter);
    const restData = data.slice(firstLineIndex + 1);

    return restData.split('\n').map((v) => {
      const values = v.split(delimiter);

      return titles.reduce((prev: Record<any, any>, curr, index) => {
        prev[curr] = values[index];
        return prev;
      }, {});
    });
  }

  return {};
}

/**
 * 转换 JSON 为 CSV
 *
 * @param arr
 * @param columns
 * @param delimiter
 */
export function JSONtoCSV(arr = [], columns = [], delimiter = ',') {
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (!isPlainObject(item)) {
      throw new TypeError('数组元素必须是对象');
    }
  }

  return [
    columns.join(delimiter),
    ...arr.map((obj) => {
      return columns.reduce((prev, curr) => {
        return `${prev}${prev.length ? delimiter : ''}${obj[curr]}`;
      }, '');
    }),
  ]
    .join('\n')
    .trim();
}
