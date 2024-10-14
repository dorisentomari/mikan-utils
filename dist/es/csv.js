import { __spreadArray } from './node_modules/tslib/tslib.es6.js';
import { isString, isPlainObject } from './common.js';

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
function CSVtoJSON(data, delimiter) {
    if (data === void 0) { data = ''; }
    if (delimiter === void 0) { delimiter = ','; }
    if (isString(data) && data.length > 0) {
        var _a = data.split('\n'), titlesLine = _a[0], restData = _a.slice(1);
        var titles_1 = titlesLine.split(delimiter);
        return restData.map(function (row) {
            var values = row.split(delimiter);
            return titles_1.reduce(function (obj, title, index) {
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
function JSONtoCSV(arr, columns, delimiter) {
    if (arr === void 0) { arr = []; }
    if (columns === void 0) { columns = []; }
    if (delimiter === void 0) { delimiter = ','; }
    if (arr.some(function (item) { return !isPlainObject(item); })) {
        throw new TypeError('数组元素必须是对象');
    }
    var header = columns.join(delimiter);
    var rows = arr.map(function (obj) {
        return columns.map(function (column) { var _a; return (_a = obj[column]) !== null && _a !== void 0 ? _a : ''; }).join(delimiter);
    });
    return __spreadArray([header], rows, true).join('\n').trim();
}

export { CSVtoJSON, JSONtoCSV };
//# sourceMappingURL=csv.js.map
