import { __spreadArray, __assign } from './node_modules/tslib/tslib.es6.js';
import { isArray, isNumber, isPlainObject } from './common.js';

/**
 * 数组化, if value is array, return `value`. if value is not array, return `[value]`;
 *
 * ```typescript
 * // eg. 1
 * let value = 1;
 * value = arrayify(value);
 * // now value is `[1]`;
 *
 * // eg. 2
 * let value = [1];
 * value = arrayify(value);
 * // now value is `[1]`;
 * ```
 *
 * @param {Array|any} value
 * @returns  {Array}
 * */
function arrayify(value) {
    if (isArray(value)) {
        return value;
    }
    return [value];
}
/**
 * 计算数组元素的平均值;
 *
 * @remark arr element must be number type, not allow string number like '3';
 *
 *
 * ```typescript
 * // eg. 1
 * let average = calculateArrayAverage([]);
 * // now average is `0`;
 *
 * // eg. 2
 * let average = calculateArrayAverage([1, 2, 3, 4, 5]);
 * // now average is `3`;
 *
 * // eg. 3
 * let average = calculateArrayAverage([1, 2, 3, 4, 5, '6', null, undefined, 'a', [], {}]);
 * // now average is `3`;
 * ```
 *
 * @param {Array<number>} arr
 * @param {string} field
 * @returns {number}
 * */
function calculateArrayAverage(arr, field) {
    var len = arr.length;
    if (len === 0) {
        return 0;
    }
    var sum = arr.reduce(function (prev, curr) {
        if (isNumber(curr)) {
            prev += curr;
        }
        else if (isPlainObject(curr) && field) {
            var value = curr[field];
            if (isNumber(value)) {
                prev += value;
            }
        }
        return prev;
    }, 0);
    return sum / len;
}
/**
 * 计算数组元素里的最大值；
 *
 * @remark use JavaScript's `Math.max` method; if one element is string number like `'44'`, it regard `'44'` as number 44 and work; But if one element is `'a'` or `undefined` or `object`, you will get `NaN`;
 *
 *
 * ```typescript
 * // eg. 1
 * let maxValue = calculateArrayMaxValue([]);
 * // now maxValue is `0`;
 *
 * // eg. 2
 * let maxValue = calculateArrayMaxValue([1, 2, 3, 4, 5]);
 * // now maxValue is `5`;
 *
 * // eg. 3
 * let maxValue = calculateArrayMaxValue([1, 2, 3, 4, 5, '8', 10]);
 * // now maxValue is `10`;
 *
 * // eg. 4
 * let maxValue = calculateArrayMaxValue([1, 2, 3, 4, 5, 'a', 10]);
 * // now maxValue is `NaN`;
 * ```
 *
 * @param {Array<number>} arr
 * @returns {number}
 * */
function calculateArrayMaxValue(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return Math.max.apply(Math, arr);
}
/**
 * 计算数组元素里的最小值；
 *
 * @remark use JavaScript's `Math.min` method; it's like method `calculateArrayMaxValue` @{link};
 *
 *
 * ```typescript
 * // eg. 1
 * let minValue = calculateArrayMinValue([]);
 * // now minValue is `0`;
 *
 * // eg. 2
 * let minValue = calculateArrayMinValue([1, 2, 3, 4, 5]);
 * // now minValue is `1`;
 *
 * // eg. 3
 * let minValue = calculateArrayMinValue([1, 2, 3, 4, 5, '8', 10]);
 * // now minValue is `1`;
 *
 * // eg. 4
 * let minValue = calculateArrayMinValue([1, 2, 3, 4, 5, 'a', 10]);
 * // now minValue is `NaN`;
 * ```
 *
 * @param {Array<number>} arr
 * @returns {number}
 * */
function calculateArrayMinValue(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return Math.min.apply(Math, arr);
}
/**
 * 计算数组元素的和；如果是有对象数组，可以传入 field 参数，用 filed 的值来计算；
 *
 * @param arr
 * @param field
 */
function calculateArraySum(arr, field) {
    if (isArray(arr)) {
        return arr.reduce(function (prev, curr) {
            if (isNumber(curr)) {
                prev += curr;
            }
            else if (isPlainObject(curr) && field) {
                var value = curr[field];
                if (isNumber(value)) {
                    prev += value;
                }
            }
            return prev;
        }, 0);
    }
    return 0;
}
/**
 * 比较两个数组是否相等；只支持比较基本元素，不支持引用对象元素。
 *
 * @param arr1
 * @param arr2
 */
function compareArray(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return false;
    }
    var len1 = arr1.length;
    var len2 = arr2.length;
    if (len1 === len2 && len1 === 0) {
        return true;
    }
    if (len1 !== len2) {
        return false;
    }
    for (var i = 0; i < len1; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}
/**
 * 计算两个数组的差集
 *
 * @param arr1
 * @param arr2
 */
function differenceSet(arr1, arr2) {
    var set2 = new Set(arr2);
    var diff = new Set(arr1.filter(function (k) { return !set2.has(k); }));
    return Array.from(diff);
}
/**
 * 计算两个数组的交集
 *
 * @param arr1
 * @param arr2
 */
function intersection(arr1, arr2) {
    var set2 = new Set(arr2);
    var result = arr1.filter(function (k) { return set2.has(k); });
    return Array.from(result);
}
/**
 * 计算两个数组的并集
 *
 * @param arr1
 * @param arr2
 */
function union(arr1, arr2) {
    return Array.from(new Set(__spreadArray(__spreadArray([], arr1, true), arr2, true)));
}
/**
 * 计算数组元素里的重复元素；
 *
 * @param arr
 */
function findDuplicateElements(arr) {
    var result = [];
    if (!Array.isArray(arr)) {
        return [];
    }
    if (arr.length === 0) {
        return result;
    }
    var map = {};
    var repeatSet = new Set();
    for (var i = 0; i < arr.length; i++) {
        var item = String(arr[i]);
        if (map[item]) {
            repeatSet.add(arr[i]);
        }
        else {
            map[item] = true;
        }
    }
    return Array.from(repeatSet);
}
/**
 * 合并两个数组；
 * @param arr1 - 数组1
 * @param arr2 - 数组2
 * @param removeRepetition - 是否移除重复元素
 */
function mergeTwoArray(arr1, arr2, removeRepetition) {
    if (removeRepetition === void 0) { removeRepetition = false; }
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return [];
    }
    if (removeRepetition) {
        return Array.from(new Set(__spreadArray(__spreadArray([], arr1, true), arr2, true)));
    }
    return __spreadArray(__spreadArray([], arr1, true), arr2, true);
}
/**
 * 数组扁平化
 * @param arr
 * @param childrenKey
 */
function flattenArray(arr, childrenKey) {
    if (childrenKey === void 0) { childrenKey = 'children'; }
    var result = [];
    if (!Array.isArray(arr)) {
        return result;
    }
    arr.forEach(function (item) {
        if (typeof item === 'object' && item !== null && !Array.isArray(item)) {
            // 对象类型元素，取出 children 并递归处理，之后去掉 childrenKey 并加入结果
            var children = item[childrenKey];
            var newItem = __assign({}, item);
            delete newItem[childrenKey];
            result.push(newItem);
            if (Array.isArray(children)) {
                result = result.concat(flattenArray(children, childrenKey));
            }
        }
        else if (Array.isArray(item)) {
            // 如果元素是数组，递归处理
            result = result.concat(flattenArray(item, childrenKey));
        }
        else {
            // 直接是基本类型的元素
            result.push(item);
        }
    });
    // 去重逻辑，使用 Set 来存储基本类型和 JSON 序列化后的对象来避免重复
    return unique(result);
}
/**
 * 数组去重
 * @param arr
 */
function unique(arr) {
    if (!Array.isArray(arr)) {
        return [];
    }
    var seen = new Set();
    return arr.filter(function (item) {
        var serialized = typeof item === 'object' ? JSON.stringify(item) : item;
        if (seen.has(serialized)) {
            return false;
        }
        seen.add(serialized);
        return true;
    });
}
/**
 * 把数组通过某一个字段转换成 map
 * @param list
 * @param field
 */
function transformListToMap(list, field) {
    if (Array.isArray(list) && field) {
        return list.reduce(function (prev, curr) {
            var value = curr[field];
            if (value) {
                prev[value] = curr;
            }
            return prev;
        }, {});
    }
    return {};
}

export { arrayify, calculateArrayAverage, calculateArrayMaxValue, calculateArrayMinValue, calculateArraySum, compareArray, differenceSet, findDuplicateElements, flattenArray, intersection, mergeTwoArray, transformListToMap, union, unique };
//# sourceMappingURL=array.js.map
