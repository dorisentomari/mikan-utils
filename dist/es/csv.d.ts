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
export declare function CSVtoJSON(data?: string, delimiter?: string): Record<any, any>[];
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
export declare function JSONtoCSV(arr?: never[], columns?: never[], delimiter?: string): string;
