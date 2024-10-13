import { isPlainObject, isString } from './common';

/**
 * 将 CSV 数据转换为 JSON 格式。
 *
 * @param {string} data - 要转换的 CSV 数据。
 * @param {string} [delimiter=','] - CSV 数据中使用的分隔符。
 * @returns {Array<Object>} - 表示 JSON 数据的对象数组。
 *
 * @example
 * const jsonData = CSVtoJSON('name,age\nAlice,30\nBob,25');
 * // 输出: [{ name: 'Alice', age: '30' }, { name: 'Bob', age: '25' }]
 */
export function CSVtoJSON(data = '', delimiter = ',') {
  if (isString(data) && data.length > 0) {
    const [titlesLine, ...restData] = data.split('\n');
    const titles = titlesLine.split(delimiter);
    
    return restData.map((row) => {
      const values = row.split(delimiter);
      return titles.reduce((obj:Record<any, any>, title, index) => {
        obj[title] = values[index];
        return obj;
      }, {});
    });
  }
  return [];
}

/**
 * 将对象数组转换为 CSV 格式。
 *
 * @param {Array<Object>} arr - 要转换为 CSV 的对象数组。
 * @param {Array<string>} columns - 要包含在 CSV 中的列。
 * @param {string} [delimiter=','] - 在 CSV 输出中使用的分隔符。
 * @returns {string} - 生成的 CSV 字符串。
 *
 * @throws {TypeError} - 如果数组中的任何元素不是对象，则抛出错误。
 *
 * @example
 * const csvData = JSONtoCSV([{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }], ['name', 'age']);
 * // 输出: 'name,age\nAlice,30\nBob,25'
 */
export function JSONtoCSV(arr = [], columns = [], delimiter = ',') {
  if (arr.some(item => !isPlainObject(item))) {
    throw new TypeError('数组元素必须是对象');
  }
  
  const header = columns.join(delimiter);
  const rows = arr.map((obj) =>
    columns.map((column) => obj[column] ?? '').join(delimiter)
  );
  
  return [header, ...rows].join('\n').trim();
}
