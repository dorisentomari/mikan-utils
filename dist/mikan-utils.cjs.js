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
function isBoolean(value) {
    return Object.prototype.toString.call(value) === '[object Boolean]';
}
function isNumber(value) {
    return Object.prototype.toString.call(value) === '[object Number]';
}
function isString(value) {
    return Object.prototype.toString.call(value) === '[object String]';
}
function isUndefined(value) {
    return Object.prototype.toString.call(value) === '[object Undefined]';
}
function isNull(value) {
    return Object.prototype.toString.call(value) === '[object Null]';
}
function isSymbol(value) {
    return Object.prototype.toString.call(value) === '[object Symbol]';
}
function isNaN(value) {
    return isNumber(value) && value !== +value;
}
function isInt(value) {
    return isNumber(value) && value % 1 === 0;
}
// 偶数
function isEven(value) {
    return isNumber(value) && value % 2 === 0;
}
// 奇数
function isOdd(value) {
    return isNumber(value) && value % 2 === 1;
}
function isPositiveNumber(value) {
    return isNumber(value) && value > 0;
}
function isNegativeNumber(value) {
    return isNumber(value) && value < 0;
}
function isBaseType(value) {
    var methods = [isNumber, isString, isBoolean, isUndefined, isNull, isSymbol];
    for (var i = 0; i < methods.length; i++) {
        var method = methods[i];
        if (method(value)) {
            return true;
        }
    }
    return false;
}
/* 其他数据类型 */
function isMap(value) {
    return Object.prototype.toString.call(value) === '[object Map]';
}
function isWeakMap(value) {
    return Object.prototype.toString.call(value) === '[object WeakMap]';
}
function isSet(value) {
    return Object.prototype.toString.call(value) === '[object Set]';
}
function isWeakSet(value) {
    return Object.prototype.toString.call(value) === '[object WeakSet]';
}
function isArray(value) {
    return Object.prototype.toString.call(value) === '[object Array]';
}
function isEmptyArray(value) {
    return isArray(value) && value.length === 0;
}
function isPlainObject(value) {
    return Object.prototype.toString.call(value) === '[object Object]';
}
function isEmptyObject(value) {
    return isPlainObject(value) && Object.keys(value).length === 0;
}
// 包含文件、日期、函数、正则等对象
function isObject(value) {
    return typeof value === 'object';
}
function isDate(value) {
    return Object.prototype.toString.call(value) === '[object Date]';
}
function isFunction(value) {
    return Object.prototype.toString.call(value) === '[object Function]';
}
function isValidDate(value) {
    try {
        return new Date(value).toString() !== 'Invalid Date';
    }
    catch (err) {
        return false;
    }
}
function isError(value) {
    return Object.prototype.toString.call(value) === '[object Error]';
}
function isHTMLElement(element) {
    var div = document.createElement('div');
    try {
        div.appendChild(element.cloneNode(true));
        return element.nodeType === 1;
    }
    catch (e) {
        return false;
    }
}
function isBrowser() {
    try {
        return typeof window === 'object' && typeof document === 'object' && document.nodeType === 9;
    }
    catch (err) {
        return false;
    }
}
function isNode() {
    return (Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) ===
        '[object process]');
}
function isLeapYear(year) {
    if (!isNumber(year)) {
        return false;
    }
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}
var ua = window.navigator.userAgent;
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
    isHTMLElement: isHTMLElement,
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
 * foreach 遍历。内部使用 for 遍历；
 *
 * @param obj
 * @param cb
 */
function foreach(obj, cb) {
    Object.keys(obj).forEach(function (item, index) {
        cb(item, obj[item], index, obj);
    });
}
/**
 * 合并两个数组；
 * @param arr1 - 数组1
 * @param arr2 - 数组2
 * @param removeRepetition - 是否移除重复元素
 */
function mergeTwoArray(arr1, arr2, removeRepetition) {
    if (removeRepetition === void 0) { removeRepetition = false; }
    if (removeRepetition) {
        return Array.from(new Set(__spreadArray(__spreadArray([], arr1, true), arr2, true)));
    }
    return __spreadArray(__spreadArray([], arr1, true), arr2, true);
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
    foreach: foreach,
    intersection: intersection,
    mergeTwoArray: mergeTwoArray,
    union: union
});

/**
 * dom 选择器
 *
 * @param selector
 */
function $selector(selector) {
    if (!selector) {
        return null;
    }
    var type = selector.substring(0, 1);
    if (type === '#') {
        if (document.querySelector) {
            return document.querySelector(selector);
        }
    }
    else if (type === '.') {
        if (document.querySelectorAll) {
            return document.querySelectorAll(selector);
        }
        return document.getElementsByClassName(selector.substring(1));
    }
    else {
        if (document.querySelectorAll) {
            return document.querySelectorAll(selector);
        }
        return document.getElementsByTagName(selector);
    }
}
/**
 * 判断元素是否有某个class
 *
 * @param elem
 * @param className
 */
function hasClassName(elem, className) {
    if (elem) {
        return elem.className.trim().indexOf(className) > -1;
    }
    throw new Error("cannot find ".concat(elem, " element"));
}
/**
 * 给某个元素添加class
 *
 * @param elem
 * @param name
 */
function addClassName(elem, name) {
    if (!hasClassName(elem, name)) {
        var className = elem.className.trim();
        if (className) {
            elem.className += " ".concat(name);
        }
        else {
            elem.className += name;
        }
    }
}
/**
 * 删除某个元素的class
 *
 * @param elem
 * @param name
 */
function deleteClassName(elem, name) {
    if (hasClassName(elem, name)) {
        var reg = new RegExp('(\\s|^)' + name + '(\\s|$)');
        elem.className = elem.className.replace(reg, ' ').trim();
    }
}
/**
 * 替换某个元素的class
 *
 * @param elem
 * @param newClassName
 * @param oldClassName
 */
function replaceClassName(elem, newClassName, oldClassName) {
    deleteClassName(elem, oldClassName);
    addClassName(elem, newClassName);
}
/**
 * @description 判断是否有效 dom
 * @param dom
 */
function isValidDom(dom) {
    if (!dom) {
        return false;
    }
    if (Array.isArray(dom)) {
        return dom;
    }
    if (typeof HTMLElement === 'object') {
        return dom instanceof HTMLElement;
    }
    return dom && typeof dom === 'object' && dom.nodeType === 1 && typeof dom.nodeName === 'string';
}
/**
 * @description 通用设置样式
 * @param selector {string | HTMLElement}
 * @param style {Object}
 */
function setDomStyle(selector, style) {
    if (style === void 0) { style = {}; }
    if (!selector) {
        return;
    }
    var dom = null;
    if (typeof selector === 'string') {
        dom = document.querySelector(selector);
    }
    else if (isValidDom(selector)) {
        dom = selector;
    }
    if (!isValidDom(dom)) {
        return;
    }
    Object.keys(style).forEach(function (key) {
        dom.style[key] = style[key];
    });
}
/**
 * 通过 dom 设置样式
 * @param selector
 * @param cssText
 */
function setDomListStyleCssText(selector, cssText) {
    var domList = $selector(selector);
    if (Array.isArray(domList)) {
        domList.forEach(function (domItem) {
            domItem.style.cssText = cssText;
        });
    }
}
/**
 * @description 通用设置属性
 * @param dom {HTMLElement}
 * @param attributes {Object}
 */
function setDomAttributes(dom, attributes) {
    if (attributes === void 0) { attributes = {}; }
    if (!dom) {
        return;
    }
    Object.keys(attributes).forEach(function (key) {
        dom[key] = attributes[key];
    });
}
/**
 * @description dom 添加类名
 * @param dom
 * @param className
 */
function domAddClassName(dom, className) {
    if (isValidDom(dom)) {
        dom.classList.add(className);
    }
}
/**
 * @description dom 删除类名
 * @param dom
 * @param className
 */
function domRemoveClassName(dom, className) {
    if (isValidDom(dom)) {
        dom.classList.remove(className);
    }
}
/**
 * @description 删除 dom
 * @param className
 */
function removeDom(className) {
    try {
        var childDomList = document.querySelectorAll(className.trim());
        for (var i = 0; i < childDomList.length; i++) {
            var childDom = childDomList[i];
            if (childDom.parentNode) {
                childDom.parentNode.removeChild(childDom);
            }
        }
    }
    catch (e) {
        console.log('e', e);
    }
}
/**
 * @description 检查 dom 包含哪个类名
 * @param dom
 * @param className
 */
function domIsContainsClassName(dom, className) {
    if (isValidDom(dom)) {
        return dom.classList.contains(className);
    }
    return false;
}
/**
 * @description 创建 dom
 * @param elem {string}
 * @param attributes {Object}
 * @param style {Object}
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
        setDomStyle(dom, style);
    }
    return dom;
}

var browser = /*#__PURE__*/Object.freeze({
    __proto__: null,
    $selector: $selector,
    addClassName: addClassName,
    createElement: createElement,
    deleteClassName: deleteClassName,
    domAddClassName: domAddClassName,
    domIsContainsClassName: domIsContainsClassName,
    domRemoveClassName: domRemoveClassName,
    hasClassName: hasClassName,
    isValidDom: isValidDom,
    removeDom: removeDom,
    replaceClassName: replaceClassName,
    setDomAttributes: setDomAttributes,
    setDomListStyleCssText: setDomListStyleCssText,
    setDomStyle: setDomStyle
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
    if (!isArray(keys) || keys.length === 0) {
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
