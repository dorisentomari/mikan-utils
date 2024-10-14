/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/* 基础数据类型 */
/**
 * 检查值是否为布尔类型。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是布尔类型则返回 true，否则返回 false。
 */
function isBoolean(value) {
    return typeof value === 'boolean';
}
/**
 * 检查值是否为数字类型。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是数字类型则返回 true，否则返回 false。
 */
function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}
/**
 * 检查值是否为字符串类型。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是字符串类型则返回 true，否则返回 false。
 */
function isString(value) {
    return typeof value === 'string';
}
/**
 * 检查值是否为 undefined。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是 undefined 则返回 true，否则返回 false。
 */
function isUndefined(value) {
    return typeof value === 'undefined';
}
/**
 * 检查值是否为 null。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是 null 则返回 true，否则返回 false。
 */
function isNull(value) {
    return value === null;
}
/**
 * 检查值是否为 Symbol 类型。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是 Symbol 类型则返回 true，否则返回 false。
 */
function isSymbol(value) {
    return typeof value === 'symbol';
}
/**
 * 检查值是否为 NaN。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是 NaN 则返回 true，否则返回 false。
 */
function isNaN(value) {
    return Number.isNaN(value);
}
/**
 * 检查值是否为整数。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是整数则返回 true，否则返回 false。
 */
function isInt(value) {
    return isNumber(value) && Number.isInteger(value);
}
/**
 * 检查值是否为偶数。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是偶数则返回 true，否则返回 false。
 */
function isEven(value) {
    return isNumber(value) && value % 2 === 0;
}
/**
 * 检查值是否为奇数。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是奇数则返回 true，否则返回 false。
 */
function isOdd(value) {
    return isNumber(value) && value % 2 === 1;
}
/**
 * 检查值是否为正数。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是正数则返回 true，否则返回 false。
 */
function isPositiveNumber(value) {
    return isNumber(value) && value > 0;
}
/**
 * 检查值是否为负数。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是负数则返回 true，否则返回 false。
 */
function isNegativeNumber(value) {
    return isNumber(value) && value < 0;
}
/**
 * 检查值是否为基本数据类型。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是基本数据类型则返回 true，否则返回 false。
 */
function isBaseType(value) {
    var methods = [isNumber, isString, isBoolean, isUndefined, isNull, isSymbol];
    return methods.some(function (method) { return method(value); });
}
/* 其他数据类型 */
/**
 * 检查值是否为 Map 类型。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是 Map 类型则返回 true，否则返回 false。
 */
function isMap(value) {
    return Object.prototype.toString.call(value) === '[object Map]';
}
/**
 * 检查值是否为 WeakMap 类型。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是 WeakMap 类型则返回 true，否则返回 false。
 */
function isWeakMap(value) {
    return Object.prototype.toString.call(value) === '[object WeakMap]';
}
/**
 * 检查值是否为 Set 类型。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是 Set 类型则返回 true，否则返回 false。
 */
function isSet(value) {
    return Object.prototype.toString.call(value) === '[object Set]';
}
/**
 * 检查值是否为 WeakSet 类型。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是 WeakSet 类型则返回 true，否则返回 false。
 */
function isWeakSet(value) {
    return Object.prototype.toString.call(value) === '[object WeakSet]';
}
/**
 * 检查值是否为数组。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是数组则返回 true，否则返回 false。
 */
function isArray(value) {
    return Array.isArray(value);
}
/**
 * 检查数组是否为空。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是空数组则返回 true，否则返回 false。
 */
function isEmptyArray(value) {
    return isArray(value) && value.length === 0;
}
/**
 * 检查值是否为普通对象。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是普通对象则返回 true，否则返回 false。
 */
function isPlainObject(value) {
    return Object.prototype.toString.call(value) === '[object Object]' && value !== null;
}
/**
 * 检查对象是否为空。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是空对象则返回 true，否则返回 false。
 */
function isEmptyObject(value) {
    return isPlainObject(value) && Object.keys(value).length === 0;
}
/**
 * 检查值是否为对象（包括文件、日期、函数、正则等）。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是对象则返回 true，否则返回 false。
 */
function isObject(value) {
    return value !== null && typeof value === 'object';
}
/**
 * 检查值是否为日期类型。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是日期类型则返回 true，否则返回 false。
 */
function isDate(value) {
    return Object.prototype.toString.call(value) === '[object Date]';
}
/**
 * 检查值是否为函数。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是函数则返回 true，否则返回 false。
 */
function isFunction(value) {
    return typeof value === 'function';
}
/**
 * 检查值是否为有效日期。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是有效日期则返回 true，否则返回 false。
 */
function isValidDate(value) {
    return !isNaN(Date.parse(value));
}
/**
 * 检查值是否为错误对象。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是错误对象则返回 true，否则返回 false。
 */
function isError(value) {
    return Object.prototype.toString.call(value) === '[object Error]';
}
/**
 * 检查值是否为 HTML 元素。
 * @param {any} element - 要检查的值。
 * @returns {boolean} - 如果值是 HTML 元素则返回 true，否则返回 false。
 */
function isHTMLElement$1(element) {
    return element instanceof HTMLElement;
}
/**
 * 检查当前环境是否为浏览器。
 * @returns {boolean} - 如果当前环境为浏览器则返回 true，否则返回 false。
 */
function isBrowser() {
    return typeof window === 'object' && typeof document === 'object' && document.nodeType === 9;
}
/**
 * 检查当前环境是否为 Node.js。
 * @returns {boolean} - 如果当前环境为 Node.js 则返回 true，否则返回 false。
 */
function isNode() {
    return typeof process === 'object' && Object.prototype.toString.call(process) === '[object process]';
}
/**
 * 检查年份是否为闰年。
 * @param {number} year - 要检查的年份。
 * @returns {boolean} - 如果年份是闰年则返回 true，否则返回 false。
 */
function isLeapYear(year) {
    if (!isNumber(year)) {
        return false;
    }
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}
var ua = window.navigator.userAgent;
/**
 * 当前环境信息映射。
 */
var envMap = {
    isPC: !ua.includes('Android') && !ua.includes('iPhone'),
    isMobile: ua.includes('Android') || ua.includes('iPhone'),
    isAndroid: ua.includes('Android'),
    isIPhone: ua.includes('iPhone'),
    isIPad: ua.includes('iPad'),
};

var common = /*#__PURE__*/Object.freeze({
    __proto__: null,
    envMap: envMap,
    isArray: isArray,
    isBaseType: isBaseType,
    isBoolean: isBoolean,
    isBrowser: isBrowser,
    isDate: isDate,
    isEmptyArray: isEmptyArray,
    isEmptyObject: isEmptyObject,
    isError: isError,
    isEven: isEven,
    isFunction: isFunction,
    isHTMLElement: isHTMLElement$1,
    isInt: isInt,
    isLeapYear: isLeapYear,
    isMap: isMap,
    isNaN: isNaN,
    isNegativeNumber: isNegativeNumber,
    isNode: isNode,
    isNull: isNull,
    isNumber: isNumber,
    isObject: isObject,
    isOdd: isOdd,
    isPlainObject: isPlainObject,
    isPositiveNumber: isPositiveNumber,
    isSet: isSet,
    isString: isString,
    isSymbol: isSymbol,
    isUndefined: isUndefined,
    isValidDate: isValidDate,
    isWeakMap: isWeakMap,
    isWeakSet: isWeakSet
});

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
        if (isPlainObject(curr) && field) {
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
            if (isPlainObject(curr) && field) {
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

var array = /*#__PURE__*/Object.freeze({
    __proto__: null,
    arrayify: arrayify,
    calculateArrayAverage: calculateArrayAverage,
    calculateArrayMaxValue: calculateArrayMaxValue,
    calculateArrayMinValue: calculateArrayMinValue,
    calculateArraySum: calculateArraySum,
    compareArray: compareArray,
    differenceSet: differenceSet,
    findDuplicateElements: findDuplicateElements,
    flattenArray: flattenArray,
    intersection: intersection,
    mergeTwoArray: mergeTwoArray,
    transformListToMap: transformListToMap,
    union: union,
    unique: unique
});

/**
 * DOM 选择器
 *
 * @param {string | HTMLElement} selector - 选择器字符串，支持 ID、类名、标签名，或直接传入 HTMLElement。
 * @returns {HTMLElement | NodeList | null} 返回匹配的单个元素、NodeList 或 null。
 *
 * @example
 * ```typescript
 * const element = $selector('#app');
 * const listItems = $selector('.list-item');
 * ```
 */
function $selector(selector) {
    if (!selector) {
        return null;
    }
    if (isHTMLElement(selector)) {
        return selector;
    }
    if (selector.startsWith('#')) {
        // @ts-ignore
        return document.querySelector(selector);
    }
    else {
        return document.querySelectorAll(selector);
    }
}
/**
 * 判断元素是否有某个 class
 *
 * @param {HTMLElement} elem - 要检查的 HTML 元素。
 * @param {string} className - 要检查的类名。
 * @returns {boolean} 如果元素具有指定的类名，则返回 true；否则返回 false。
 * @throws {Error} 如果未找到元素，则抛出错误。
 *
 * @example
 * ```typescript
 * const hasClass = hasClassName(element, 'active');
 * ```
 */
function hasClassName(elem, className) {
    if (!elem) {
        throw new Error("Cannot find ".concat(elem, " element"));
    }
    return elem.classList.contains(className);
}
/**
 * 给某个元素添加 class
 *
 * @param {HTMLElement} elem - 要添加类名的 HTML 元素。
 * @param {string} name - 要添加的类名。
 *
 * @example
 * ```typescript
 * addClassName(element, 'active');
 * ```
 */
function addClassName(elem, name) {
    if (!hasClassName(elem, name)) {
        elem.classList.add(name);
    }
}
/**
 * 删除某个元素的 class
 *
 * @param {HTMLElement} elem - 要删除类名的 HTML 元素。
 * @param {string} name - 要删除的类名。
 *
 * @example
 * ```typescript
 * deleteClassName(element, 'active');
 * ```
 */
function deleteClassName(elem, name) {
    if (hasClassName(elem, name)) {
        elem.classList.remove(name);
    }
}
/**
 * 替换某个元素的 class
 *
 * @param {HTMLElement} elem - 要操作的 HTML 元素。
 * @param {string} newClassName - 要添加的新类名。
 * @param {string} oldClassName - 要删除的旧类名。
 *
 * @example
 * ```typescript
 * replaceClassName(element, 'new-class', 'old-class');
 * ```
 */
function replaceClassName(elem, newClassName, oldClassName) {
    deleteClassName(elem, oldClassName);
    addClassName(elem, newClassName);
}
/**
 * 判断是否为有效的 HTML 元素
 *
 * @param {any} dom - 要检查的对象。
 * @returns {boolean} 如果是有效的 HTML 元素，则返回 true；否则返回 false。
 *
 * @example
 * ```typescript
 * const isElem = isHTMLElement(someVar);
 * ```
 */
function isHTMLElement(dom) {
    return dom instanceof HTMLElement;
}
/**
 * 判断是否为指定的 HTMLElement 标签
 *
 * @template T - 元素类型。
 * @param {any} element - 要检查的对象。
 * @param {string} tagName - 要匹配的标签名。
 * @returns {boolean} 如果元素是指定的 HTML 标签，则返回 true；否则返回 false。
 *
 * @example
 * ```typescript
 * const isDiv = isSpecificHTMLElement<HTMLDivElement>(element, 'div');
 * ```
 */
function isSpecificHTMLElement(element, tagName) {
    return isHTMLElement(element) && element.tagName.toLowerCase() === tagName.toLowerCase();
}
/**
 * 设置元素样式
 *
 * @param {string | HTMLElement} selector - 选择器字符串或 HTML 元素。
 * @param {Record<string, string>} [style={}] - 样式对象，格式为 { 'key': 'value' }。
 *
 * @example
 * ```typescript
 * setStyle('#app', { color: 'red', fontSize: '16px' });
 * ```
 */
function setStyle(selector, style) {
    if (style === void 0) { style = {}; }
    var dom = $selector(selector);
    if (!isHTMLElement(dom)) {
        return;
    }
    Object.entries(style).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        dom.style[key] = value; // 使用 as any 消除类型警告
    });
}
/**
 * 设置元素属性
 *
 * @param {string | HTMLElement} selector - 选择器字符串或 HTML 元素。
 * @param {Record<string, any>} [attributes={}] - 属性对象，格式为 { 'key': 'value' }。
 *
 * @example
 * ```typescript
 * setDomAttributes('#app', { id: 'newId', 'data-custom': 'value' });
 * ```
 */
function setDomAttributes(selector, attributes) {
    if (attributes === void 0) { attributes = {}; }
    var dom = $selector(selector);
    if (!isHTMLElement(dom)) {
        return;
    }
    Object.entries(attributes).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        dom.setAttribute(key, value);
    });
}
/**
 * 删除 DOM 元素
 *
 * @param {string | HTMLElement} selector - 选择器字符串或 HTML 元素，表示要删除的元素。
 *
 * @example
 * ```typescript
 * removeDom('#app');
 * ```
 */
function removeDom(selector) {
    var dom = $selector(selector);
    if (!dom) {
        return; // 如果没有找到元素，直接返回
    }
    // 处理 NodeList 或者单个元素
    var elements = dom instanceof NodeList ? Array.from(dom) : [dom];
    elements.forEach(function (item) {
        if (item.parentNode) {
            item.parentNode.removeChild(item);
        }
    });
}
/**
 * 创建 DOM 元素
 *
 * @param {string} elem - 要创建的元素标签名。
 * @param {Record<string, any>} [attributes={}] - 要设置的属性对象，格式为 { 'key': 'value' }。
 * @param {Record<string, string>} [style={}] - 要设置的样式对象，格式为 { 'key': 'value' }。
 * @returns {HTMLElement | null} 返回创建的元素，或 null。
 *
 * @example
 * ```typescript
 * const newElem = createElement('div', { id: 'newDiv' }, { color: 'red' });
 * ```
 */
function createElement(elem, attributes, style) {
    if (attributes === void 0) { attributes = {}; }
    if (style === void 0) { style = {}; }
    if (!elem) {
        throw new Error('Element name is required');
    }
    var dom = document.createElement(elem);
    if (isPlainObject(attributes)) {
        setDomAttributes(dom, attributes);
    }
    if (isPlainObject(style)) {
        setStyle(dom, style);
    }
    return dom;
}
/**
 * 安全获取 localStorage 中的值
 *
 * @param {string} key - 要获取的键。
 * @returns {any} 返回解析后的值，如果解析失败，则返回原始字符串。
 *
 * @example
 * ```typescript
 * const data = safeGetLocalStorage('key');
 * ```
 */
function safeGetLocalStorage(key) {
    var value = localStorage.getItem(key);
    try {
        if (typeof value === 'string') {
            // 先检查字符串是否符合 JSON 格式
            return value.startsWith('{') || value.startsWith('[') ? JSON.parse(value) : value;
        }
        return value;
    }
    catch (error) {
        return value; // 返回原始字符串
    }
}
/**
 * 安全设置 localStorage 的值
 *
 * @param {string} key - 要设置的键。
 * @param {any} value - 要设置的值，可以是对象、数组或原始类型。
 *
 * @example
 * ```typescript
 * safeSetLocalStorage('key', { a: 1 });
 * ```
 */
function safeSetLocalStorage(key, value) {
    var finalValue = (Array.isArray(value) || isPlainObject(value)) ? JSON.stringify(value) : value;
    localStorage.setItem(key, finalValue);
}
/**
 * 安全删除 localStorage 中的键
 *
 * @param {string} key - 要删除的键。
 *
 * @example
 * ```typescript
 * safeRemoveLocalStorage('key');
 * ```
 */
function safeRemoveLocalStorage(key) {
    localStorage.removeItem(key);
}

var browser = /*#__PURE__*/Object.freeze({
    __proto__: null,
    $selector: $selector,
    addClassName: addClassName,
    createElement: createElement,
    deleteClassName: deleteClassName,
    hasClassName: hasClassName,
    isHTMLElement: isHTMLElement,
    isSpecificHTMLElement: isSpecificHTMLElement,
    removeDom: removeDom,
    replaceClassName: replaceClassName,
    safeGetLocalStorage: safeGetLocalStorage,
    safeRemoveLocalStorage: safeRemoveLocalStorage,
    safeSetLocalStorage: safeSetLocalStorage,
    setDomAttributes: setDomAttributes,
    setStyle: setStyle
});

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

var csv = /*#__PURE__*/Object.freeze({
    __proto__: null,
    CSVtoJSON: CSVtoJSON,
    JSONtoCSV: JSONtoCSV
});

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
function convertUTCToLocal(date) {
    var dateObj = new Date(date);
    var localTime = new Date(dateObj.getTime() - (dateObj.getTimezoneOffset() * 60 * 1000));
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
function convertLocalToUTC(date) {
    var dateObj = new Date(date);
    var utcTime = new Date(dateObj.getTime() + (dateObj.getTimezoneOffset() * 60 * 1000));
    return utcTime;
}

var date = /*#__PURE__*/Object.freeze({
    __proto__: null,
    convertLocalToUTC: convertLocalToUTC,
    convertUTCToLocal: convertUTCToLocal
});

/**
 * 向下整除两个数字
 *
 * @param {number} a - 被除数。
 * @param {number} b - 除数。
 * @returns {number} - a 除以 b 的向下整除结果。
 *
 * @example
 * const result = divFloor(5.7, 2);
 * console.log(result); // 输出: 2
 */
function divFloor(a, b) {
    if (b === 0) {
        throw new Error('除数不能为零'); // 增加对除数为零的处理
    }
    return Math.floor(a / b);
}
/**
 * 向上整除两个数字
 *
 * @param {number} a - 被除数。
 * @param {number} b - 除数。
 * @returns {number} - a 除以 b 的向上整除结果。
 *
 * @example
 * const result = divCeil(5.2, 2);
 * console.log(result); // 输出: 3
 */
function divCeil(a, b) {
    if (b === 0) {
        throw new Error('除数不能为零'); // 增加对除数为零的处理
    }
    return Math.ceil(a / b);
}
/**
 * 计算复利
 *
 * @param {number} baseValue - 本金。
 * @param {number} rate - 利率（如 1.05 表示 5%）。
 * @param {number} times - 计算的周期数。
 * @returns {number} - 计算后的复利结果，保留两位小数。
 *
 * @example
 * const result = power(1000, 1.05, 5);
 * console.log(result); // 输出: 1276.28
 */
function power(baseValue, rate, times) {
    times = Math.max(0, parseInt(String(times), 10)); // 确保周期数非负
    for (var i = 0; i < times; i++) {
        baseValue *= rate;
    }
    return parseFloat(baseValue.toFixed(2));
}

var number = /*#__PURE__*/Object.freeze({
    __proto__: null,
    divCeil: divCeil,
    divFloor: divFloor,
    power: power
});

/**
 * 深度获取对象的值
 * @param obj
 * @param keys
 */
function deepGet(obj, keys) {
    if (obj === void 0) { obj = {}; }
    if (!isPlainObject(obj)) {
        return null;
    }
    keys = String(keys);
    if (keys.length === 0) {
        return null;
    }
    var fields = keys.split('.');
    return fields.reduce(function (prev, curr) {
        if (prev && prev[curr]) {
            return prev[curr];
        }
        return null;
    }, obj);
}

var object = /*#__PURE__*/Object.freeze({
    __proto__: null,
    deepGet: deepGet
});

/**
 * 生成随机颜色（16进制）
 *
 * @param {boolean} needUpper - 是否需要将字母转换为大写，默认为 true。
 * @returns {string} - 生成的随机颜色字符串，以 16 进制表示。
 *
 * @example
 * const color = randomColor();
 * console.log(color); // 输出: "#AABBCC"
 */
function randomColor(needUpper) {
    if (needUpper === void 0) { needUpper = true; }
    var str = '#' + Math.random().toString(16).slice(2, 8);
    return needUpper ? str.toUpperCase() : str.toLowerCase(); // 统一返回格式
}
/**
 * 生成随机数字
 *
 * @param {number} minNumber - 随机数的最小值，默认为 0。
 * @param {number} maxNumber - 随机数的最大值，默认为 10000。
 * @param {boolean} needInt - 是否需要返回整数，默认为 true。
 * @returns {number} - 生成的随机数。
 *
 * @example
 * const num = randomNumber(1, 100, true);
 * console.log(num); // 输出: 42
 */
function randomNumber(minNumber, maxNumber, needInt) {
    if (minNumber === void 0) { minNumber = 0; }
    if (maxNumber === void 0) { maxNumber = 10000; }
    if (needInt === void 0) { needInt = true; }
    if (minNumber > maxNumber) {
        throw new Error('最小值不能大于最大值'); // 增加对参数的校验
    }
    var res = Math.random() * (maxNumber - minNumber) + minNumber;
    return needInt ? Math.floor(res) : res; // 使用 Math.floor 生成整数
}
/**
 * 生成随机字符串
 *
 * @param {number} maxLength - 随机字符串的最大长度，默认为 16。
 * @returns {string} - 生成的随机字符串。
 *
 * @example
 * const str = randomString(10);
 * console.log(str); // 输出: "KJQXTPBQDE"
 */
function randomString(maxLength) {
    if (maxLength === void 0) { maxLength = 16; }
    var str = '';
    while (str.length < maxLength) { // 使用 < 而不是 <=
        str += Math.random().toString(32).substr(2).toUpperCase();
    }
    return str.slice(0, maxLength); // 确保返回字符串的长度不超过 maxLength
}

var random = /*#__PURE__*/Object.freeze({
    __proto__: null,
    randomColor: randomColor,
    randomNumber: randomNumber,
    randomString: randomString
});

/**
 * 手机号正则表达式
 */
var phoneRegexp = /^1\d{10}$/;
/**
 * 校验输入的字符串是否为有效的手机号
 *
 * @param {any} phone - 待校验的手机号
 * @returns {boolean} - 如果是有效的手机号返回 true，否则返回 false
 *
 * @example
 * const valid = isPhone('13812345678');
 * console.log(valid); // 输出: true
 */
function isPhone(phone) {
    return phoneRegexp.test(String(phone)); // 将输入转换为字符串
}
/**
 * 邮箱正则表达式
 */
var emailRegexp = /^[0-9a-zA-Z]+@[0-9a-zA-Z\-]+\.[0-9a-zA-Z]+$/;
/**
 * 校验输入的字符串是否为有效的邮箱地址
 *
 * @param {string} email - 待校验的邮箱地址
 * @returns {boolean} - 如果是有效的邮箱地址返回 true，否则返回 false
 *
 * @example
 * const valid = isEmail('test@example.com');
 * console.log(valid); // 输出: true
 */
function isEmail(email) {
    return emailRegexp.test(email);
}
/**
 * 字符串是否为数字的正则表达式
 */
var stringNumberRegexp = /^\d+$/;
/**
 * 校验输入的字符串是否为有效的数字字符串
 *
 * @param {string} str - 待校验的字符串
 * @returns {boolean} - 如果是有效的数字字符串返回 true，否则返回 false
 *
 * @example
 * const valid = stringNumberRegexp.test('12345');
 * console.log(valid); // 输出: true
 */
function isStringNumber(str) {
    return stringNumberRegexp.test(String(str));
}

var regexp = /*#__PURE__*/Object.freeze({
    __proto__: null,
    emailRegexp: emailRegexp,
    isEmail: isEmail,
    isPhone: isPhone,
    isStringNumber: isStringNumber,
    phoneRegexp: phoneRegexp,
    stringNumberRegexp: stringNumberRegexp
});

/**
 * 首字母大写
 *
 * @param {string} word - 待处理的字符串
 * @returns {string} - 首字母大写后的字符串
 *
 * @example
 * const result = capitalize('hello');
 * console.log(result); // 输出: Hello
 */
function capitalize(word) {
    if (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return word;
}
/**
 * 裁剪字符串左侧空格
 *
 * @param {string} val - 待处理的字符串
 * @returns {string} - 左侧空格裁剪后的字符串
 *
 * @example
 * const result = trimLeft('   hello');
 * console.log(result); // 输出: 'hello'
 */
function trimLeft(val) {
    return val.replace(/^\s+/g, ''); // 使用 \s+ 来匹配一个或多个空格
}
/**
 * 裁剪字符串右侧空格
 *
 * @param {string} val - 待处理的字符串
 * @returns {string} - 右侧空格裁剪后的字符串
 *
 * @example
 * const result = trimRight('hello   ');
 * console.log(result); // 输出: 'hello'
 */
function trimRight(val) {
    return val.replace(/\s+$/g, ''); // 使用 \s+ 来匹配一个或多个空格
}
/**
 * 裁剪字符串两侧空格
 *
 * @param {string} val - 待处理的字符串
 * @returns {string} - 两侧空格裁剪后的字符串
 *
 * @example
 * const result = trim('   hello   ');
 * console.log(result); // 输出: 'hello'
 */
function trim(val) {
    return trimLeft(trimRight(val)); // 先裁剪右侧再裁剪左侧
}

var string = /*#__PURE__*/Object.freeze({
    __proto__: null,
    capitalize: capitalize,
    trim: trim,
    trimLeft: trimLeft,
    trimRight: trimRight
});

var index = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, array), browser), common), csv), date), number), object), random), regexp), string);
window.onload = function () {
    undefined('div', 'color: red;');
    undefined('#name', 'color: blue;');
};

export { index as default };
//# sourceMappingURL=mikan-utils.esm.js.map
