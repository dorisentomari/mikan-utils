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
function isHTMLElement(element) {
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

export { envMap, isArray, isBaseType, isBoolean, isBrowser, isDate, isEmptyArray, isEmptyObject, isError, isEven, isFunction, isHTMLElement, isInt, isLeapYear, isMap, isNaN, isNegativeNumber, isNode, isNull, isNumber, isObject, isOdd, isPlainObject, isPositiveNumber, isSet, isString, isSymbol, isUndefined, isValidDate, isWeakMap, isWeakSet };
//# sourceMappingURL=common.js.map
