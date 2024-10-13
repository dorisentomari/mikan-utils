import { __spreadArray } from './node_modules/tslib/tslib.es6.js';
import { isString, isPlainObject } from './common.js';

/**
 * 转换 CSV 为 JSON
 *
 * @param data
 * @param delimiter
 */
function CSVtoJSON(data, delimiter) {
    if (data === void 0) { data = ''; }
    if (delimiter === void 0) { delimiter = ','; }
    if (isString(data)) {
        if (data.length === 0) {
            return {};
        }
        var firstLineIndex = data.indexOf('\n');
        var titles_1 = data.slice(0, firstLineIndex).split(delimiter);
        var restData = data.slice(firstLineIndex + 1);
        return restData.split('\n').map(function (v) {
            var values = v.split(delimiter);
            return titles_1.reduce(function (prev, curr, index) {
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
function JSONtoCSV(arr, columns, delimiter) {
    if (arr === void 0) { arr = []; }
    if (columns === void 0) { columns = []; }
    if (delimiter === void 0) { delimiter = ','; }
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        if (!isPlainObject(item)) {
            throw new TypeError('数组元素必须是对象');
        }
    }
    return __spreadArray([
        columns.join(delimiter)
    ], arr.map(function (obj) {
        return columns.reduce(function (prev, curr) {
            return "".concat(prev).concat(prev.length ? delimiter : '').concat(obj[curr]);
        }, '');
    }), true).join('\n')
        .trim();
}

export { CSVtoJSON, JSONtoCSV };
//# sourceMappingURL=csv.js.map
