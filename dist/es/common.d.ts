/**
 * 检查值是否为布尔类型。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是布尔类型则返回 true，否则返回 false。
 */
export declare function isBoolean(value: any): boolean;
/**
 * 检查值是否为数字类型。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是数字类型则返回 true，否则返回 false。
 */
export declare function isNumber(value: any): boolean;
/**
 * 检查值是否为字符串类型。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是字符串类型则返回 true，否则返回 false。
 */
export declare function isString(value: any): boolean;
/**
 * 检查值是否为 undefined。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是 undefined 则返回 true，否则返回 false。
 */
export declare function isUndefined(value: any): boolean;
/**
 * 检查值是否为 null。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是 null 则返回 true，否则返回 false。
 */
export declare function isNull(value: any): boolean;
/**
 * 检查值是否为 Symbol 类型。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是 Symbol 类型则返回 true，否则返回 false。
 */
export declare function isSymbol(value: any): boolean;
/**
 * 检查值是否为 NaN。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是 NaN 则返回 true，否则返回 false。
 */
export declare function isNaN(value: any): boolean;
/**
 * 检查值是否为整数。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是整数则返回 true，否则返回 false。
 */
export declare function isInt(value: any): boolean;
/**
 * 检查值是否为偶数。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是偶数则返回 true，否则返回 false。
 */
export declare function isEven(value: any): boolean;
/**
 * 检查值是否为奇数。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是奇数则返回 true，否则返回 false。
 */
export declare function isOdd(value: any): boolean;
/**
 * 检查值是否为正数。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是正数则返回 true，否则返回 false。
 */
export declare function isPositiveNumber(value: any): boolean;
/**
 * 检查值是否为负数。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是负数则返回 true，否则返回 false。
 */
export declare function isNegativeNumber(value: any): boolean;
/**
 * 检查值是否为基本数据类型。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是基本数据类型则返回 true，否则返回 false。
 */
export declare function isBaseType(value: any): boolean;
/**
 * 检查值是否为 Map 类型。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是 Map 类型则返回 true，否则返回 false。
 */
export declare function isMap(value: any): boolean;
/**
 * 检查值是否为 WeakMap 类型。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是 WeakMap 类型则返回 true，否则返回 false。
 */
export declare function isWeakMap(value: any): boolean;
/**
 * 检查值是否为 Set 类型。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是 Set 类型则返回 true，否则返回 false。
 */
export declare function isSet(value: any): boolean;
/**
 * 检查值是否为 WeakSet 类型。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是 WeakSet 类型则返回 true，否则返回 false。
 */
export declare function isWeakSet(value: any): boolean;
/**
 * 检查值是否为数组。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是数组则返回 true，否则返回 false。
 */
export declare function isArray(value: any): boolean;
/**
 * 检查数组是否为空。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是空数组则返回 true，否则返回 false。
 */
export declare function isEmptyArray(value: any): boolean;
/**
 * 检查值是否为普通对象。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是普通对象则返回 true，否则返回 false。
 */
export declare function isPlainObject(value: any): boolean;
/**
 * 检查对象是否为空。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是空对象则返回 true，否则返回 false。
 */
export declare function isEmptyObject(value: any): boolean;
/**
 * 检查值是否为对象（包括文件、日期、函数、正则等）。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是对象则返回 true，否则返回 false。
 */
export declare function isObject(value: any): boolean;
/**
 * 检查值是否为日期类型。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是日期类型则返回 true，否则返回 false。
 */
export declare function isDate(value: any): boolean;
/**
 * 检查值是否为函数。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是函数则返回 true，否则返回 false。
 */
export declare function isFunction(value: any): boolean;
/**
 * 检查值是否为有效日期。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是有效日期则返回 true，否则返回 false。
 */
export declare function isValidDate(value: any): boolean;
/**
 * 检查值是否为错误对象。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是错误对象则返回 true，否则返回 false。
 */
export declare function isError(value: any): boolean;
/**
 * 检查值是否为 HTML 元素。
 * @param {any} element - 要检查的值。
 * @returns {boolean} - 如果值是 HTML 元素则返回 true，否则返回 false。
 */
export declare function isHTMLElement(element: any): boolean;
/**
 * 检查当前环境是否为浏览器。
 * @returns {boolean} - 如果当前环境为浏览器则返回 true，否则返回 false。
 */
export declare function isBrowser(): boolean;
/**
 * 检查当前环境是否为 Node.js。
 * @returns {boolean} - 如果当前环境为 Node.js 则返回 true，否则返回 false。
 */
export declare function isNode(): boolean;
/**
 * 检查年份是否为闰年。
 * @param {number} year - 要检查的年份。
 * @returns {boolean} - 如果年份是闰年则返回 true，否则返回 false。
 */
export declare function isLeapYear(year: number): boolean;
/**
 * 当前环境信息映射。
 */
export declare const envMap: {
    isPC: boolean;
    isMobile: boolean;
    isAndroid: boolean;
    isIPhone: boolean;
    isIPad: boolean;
};
