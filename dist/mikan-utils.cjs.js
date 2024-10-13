'use strict';

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
    return isNumber(value) && value !== +value;
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
 * @param {string} selector - 选择器字符串，支持 ID、类名和标签名。
 * @returns {HTMLElement | NodeList | null} 返回匹配的单个元素、NodeList 或 null。
 */
function $selector(selector) {
    if (!selector) {
        return null;
    }
    // 使用 querySelector 或 querySelectorAll
    // @ts-ignore
    return selector.startsWith('#')
        ? document.querySelector(selector) // 返回单一元素
        : document.querySelectorAll(selector); // 返回 NodeList
}
/**
 * 判断元素是否有某个 class
 *
 * @param {HTMLElement} elem - 要检查的元素。
 * @param {string} className - 要检查的类名。
 * @returns {boolean} 如果元素具有指定的类名，则返回 true；否则返回 false。
 * @throws {Error} 如果未找到元素，则抛出错误。
 */
function hasClassName(elem, className) {
    if (!elem)
        throw new Error("cannot find ".concat(elem, " element"));
    return elem.classList.contains(className);
}
/**
 * 给某个元素添加 class
 *
 * @param {HTMLElement} elem - 要添加类名的元素。
 * @param {string} name - 要添加的类名。
 */
function addClassName(elem, name) {
    if (!hasClassName(elem, name)) {
        elem.classList.add(name);
    }
}
/**
 * 删除某个元素的 class
 *
 * @param {HTMLElement} elem - 要删除类名的元素。
 * @param {string} name - 要删除的类名。
 */
function deleteClassName(elem, name) {
    if (hasClassName(elem, name)) {
        elem.classList.remove(name);
    }
}
/**
 * 替换某个元素的 class
 *
 * @param {HTMLElement} elem - 要操作的元素。
 * @param {string} newClassName - 要添加的新类名。
 * @param {string} oldClassName - 要删除的旧类名。
 */
function replaceClassName(elem, newClassName, oldClassName) {
    deleteClassName(elem, oldClassName);
    addClassName(elem, newClassName);
}
/**
 * 判断是否有效 HTML Element
 *
 * @param {any} dom - 要检查的对象。
 * @returns {boolean} 如果是有效的 HTML Element，则返回 true；否则返回 false。
 */
function isHTMLElement(dom) {
    return dom instanceof HTMLElement;
}
/**
 * 判断是否是指定的 HTMLElement
 *
 * @param {any} element - 要检查的对象。
 * @param {string} tagName - 要匹配的标签名。
 * @returns {boolean} 如果元素是指定的 HTML Element，则返回 true；否则返回 false。
 */
function isSpecificHTMLElement(element, tagName) {
    return isHTMLElement(element) && element.tagName.toLowerCase() === tagName.toLowerCase();
}
/**
 * 通用设置样式
 *
 * @param {string | HTMLElement} selector - 选择器字符串或 HTML 元素。
 * @param {Record<string, string>} [style={}] - 要设置的样式对象，格式为 { 'key': 'value' }。
 */
function setStyle(selector, style) {
    if (style === void 0) { style = {}; }
    if (!selector) {
        return;
    }
    var dom = typeof selector === 'string' ? document.querySelector(selector) : isHTMLElement(selector) ? selector : null;
    // 如果没有找到有效的 HTML 元素，则返回
    if (!isHTMLElement(dom))
        return;
    // 设置样式
    Object.entries(style).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        dom.style[key] = value; // 消除 TypeScript 类型警告
    });
}
/**
 * 通过 DOM 设置样式
 *
 * @param {string} selector - 选择器字符串，选择要设置样式的元素。
 * @param {string} cssText - 要应用的 CSS 样式文本。
 */
function setStyleCssText(selector, cssText) {
    var domList = $selector(selector);
    if (Array.isArray(domList)) {
        domList.forEach(function (domItem) {
            domItem.style.cssText = cssText;
        });
    }
}
/**
 * 通用设置属性
 *
 * @param {HTMLElement} dom - 要设置属性的元素。
 * @param {Record<string, any>} [attributes={}] - 属性对象，格式为 { 'key': 'value' }。
 */
function setDomAttributes(dom, attributes) {
    if (attributes === void 0) { attributes = {}; }
    if (!dom) {
        return;
    }
    Object.entries(attributes).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        dom.setAttribute(key, value);
    });
}
/**
 * 删除 DOM
 *
 * @param {string} className - 选择器字符串，表示要删除的元素的类名。
 */
function removeDom(className) {
    try {
        var childDomList = document.querySelectorAll(className.trim());
        childDomList.forEach(function (childDom) {
            if (childDom.parentNode) {
                childDom.parentNode.removeChild(childDom);
            }
        });
    }
    catch (e) {
        console.log('e', e);
    }
}
/**
 * 创建 DOM
 *
 * @param {string} elem - 要创建的元素的标签名。
 * @param {Record<string, any>} [attributes={}] - 要设置的属性对象，格式为 { 'key': 'value' }。
 * @param {Record<string, string>} [style={}] - 要设置的样式对象，格式为 { 'key': 'value' }。
 * @returns {HTMLElement | null} 返回创建的元素或 null。
 */
function createElement(elem, attributes, style) {
    if (attributes === void 0) { attributes = {}; }
    if (style === void 0) { style = {}; }
    if (!elem) {
        return null;
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
 * 删除 localStorage 里以某个前缀开头的数据
 *
 * @param {string} prefix - 要删除的前缀。
 */
function removeLocalStorageByPrefix(prefix) {
    try {
        if (!isBrowser()) {
            Object.keys(localStorage)
                .filter(function (key) { return key.startsWith(prefix); })
                .forEach(function (key) {
                safeRemoveLocalStorage(key);
            });
        }
    }
    catch (err) {
        console.error(err);
    }
}
/**
 * 安全的获取 localStorage
 *
 * @param {string} key - 要获取的键。
 * @returns {any} 返回解析后的值，如果解析失败则返回原始字符串。
 */
function safeGetLocalStorage(key) {
    var value = localStorage.getItem(key) || '';
    try {
        return JSON.parse(value);
    }
    catch (error) {
        console.error(error);
        return value; // 返回原始字符串
    }
}
/**
 * 安全的设置 localStorage
 *
 * @param {string} key - 要设置的键。
 * @param {any} value - 要设置的值，可以是对象或其他类型。
 * @param {string} [removePrefix=''] - 如果设置失败，删除的前缀。
 */
function safeSetLocalStorage(key, value, removePrefix) {
    if (removePrefix === void 0) { removePrefix = ''; }
    try {
        var finalValue = typeof value === 'object' ? JSON.stringify(value) : value;
        localStorage.setItem(key, finalValue);
    }
    catch (error) {
        console.error(error);
        if (removePrefix) {
            removeLocalStorageByPrefix(removePrefix);
            localStorage.setItem(key, value);
        }
    }
}
/**
 * 安全的删除 localStorage
 *
 * @param {string} key - 要删除的键。
 */
function safeRemoveLocalStorage(key) {
    try {
        localStorage.removeItem(key);
    }
    catch (error) {
        console.error(error);
    }
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
    removeLocalStorageByPrefix: removeLocalStorageByPrefix,
    replaceClassName: replaceClassName,
    safeGetLocalStorage: safeGetLocalStorage,
    safeRemoveLocalStorage: safeRemoveLocalStorage,
    safeSetLocalStorage: safeSetLocalStorage,
    setDomAttributes: setDomAttributes,
    setStyle: setStyle,
    setStyleCssText: setStyleCssText
});

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

var csv = /*#__PURE__*/Object.freeze({
    __proto__: null,
    CSVtoJSON: CSVtoJSON,
    JSONtoCSV: JSONtoCSV
});

/**
 * 把UTC时间转换为本地时间
 * @param date
 */
function convertUTCToLocal(date) {
    var dateObj = new Date(date);
    var newDate = new Date(dateObj.getTime() + dateObj.getTimezoneOffset() * 60 * 1000);
    var offset = dateObj.getTimezoneOffset() / 60;
    var hours = dateObj.getHours();
    newDate.setHours(hours - offset);
    return newDate;
}
/**
 * 把本地时间转换为UTC时间
 * @param date
 */
function convertLocalToUTC(date) {
    var dateObj = new Date(date);
    var newDate = new Date(dateObj.getTime() - dateObj.getTimezoneOffset() * 60 * 1000);
    var offset = dateObj.getTimezoneOffset() / 60;
    var hours = dateObj.getHours();
    newDate.setHours(hours + offset);
    return newDate;
}

var date = /*#__PURE__*/Object.freeze({
    __proto__: null,
    convertLocalToUTC: convertLocalToUTC,
    convertUTCToLocal: convertUTCToLocal
});

/**
 * 向下整除两个数字
 * @param a
 * @param b
 */
function divFloor(a, b) {
    return Math.floor(a / b);
}
/**
 * 向上整除两个数字
 * @param a
 * @param b
 */
function divCeil(a, b) {
    return Math.ceil(a / b);
}
/**
 * 计算复利 compound interest
 * @params {baseValue} 本金
 * @params {rate} 利率
 * @params {times} 周期单位，年、月、日等
 * */
function power(baseValue, rate, times) {
    times = parseInt(String(times), 10);
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
    if (isEmptyObject(obj)) {
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

// 随机颜色 16 进制
function randomColor(needUpper) {
    if (needUpper === void 0) { needUpper = true; }
    var str = '#' + Math.random().toString(16).slice(2, 8);
    if (needUpper) {
        return str.toUpperCase();
    }
    return str;
}
// 随机区间数字
function randomNumber(minNumber, maxNumber, needInt) {
    if (minNumber === void 0) { minNumber = 0; }
    if (maxNumber === void 0) { maxNumber = 10000; }
    if (needInt === void 0) { needInt = true; }
    var res = Math.random() * (maxNumber - minNumber + 1) + minNumber;
    return needInt ? parseInt(res.toString(), 10) : res;
}
// 随机字符串
function randomString(maxLength) {
    if (maxLength === void 0) { maxLength = 16; }
    var str = '';
    while (str.length <= maxLength) {
        str += Math.random().toString(32).substr(2).toUpperCase();
    }
    return str;
}

var random = /*#__PURE__*/Object.freeze({
    __proto__: null,
    randomColor: randomColor,
    randomNumber: randomNumber,
    randomString: randomString
});

var phoneRegexp = /^1\d{10}$/g;
function isPhone(phone) {
    return phoneRegexp.test(phone);
}
var emailRegexp = /^[0-9a-zA-Z]+@[0-9a-zA-Z\-]+\.[0-9a-zA-Z]+/;
function isEmail(email) {
    return emailRegexp.test(email);
}
var stringNumberRegexp = /^\d+$/;

var regexp = /*#__PURE__*/Object.freeze({
    __proto__: null,
    emailRegexp: emailRegexp,
    isEmail: isEmail,
    isPhone: isPhone,
    phoneRegexp: phoneRegexp,
    stringNumberRegexp: stringNumberRegexp
});

/**
 * 首字母大写
 *
 * @param word
 */
function capitalize(word) {
    if (word) {
        return word.charAt(0).toUpperCase() + word.substr(1);
    }
    return word;
}
/**
 * 裁剪字符串左侧空格
 * @param val
 */
function trimLeft(val) {
    return val.replace(/^\s*/gi, '');
}
/**
 * 裁剪字符串右侧空格
 * @param val
 */
function trimRight(val) {
    return val.replace(/(\s*$)/gi, '');
}
/**
 * 裁剪字符串两侧空格
 * @param val
 */
function trim(val) {
    val = trimLeft(val);
    val = trimRight(val);
    return val;
}

var string = /*#__PURE__*/Object.freeze({
    __proto__: null,
    capitalize: capitalize,
    trim: trim,
    trimLeft: trimLeft,
    trimRight: trimRight
});

var index = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, array), browser), common), csv), date), number), object), random), regexp), string);

module.exports = index;
//# sourceMappingURL=mikan-utils.cjs.js.map
