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

export { envMap, isArray, isBaseType, isBoolean, isBrowser, isDate, isEmptyArray, isEmptyObject, isError, isEven, isFunction, isHTMLElement, isInt, isLeapYear, isMap, isNaN, isNegativeNumber, isNode, isNull, isNumber, isObject, isOdd, isPlainObject, isPositiveNumber, isSet, isString, isSymbol, isUndefined, isValidDate, isWeakMap, isWeakSet };
//# sourceMappingURL=common.js.map
