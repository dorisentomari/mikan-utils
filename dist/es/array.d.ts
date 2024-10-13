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
export declare function arrayify(value: Array<any> | any): Array<any>;
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
export declare function calculateArrayAverage(arr: Array<number> | Array<any>, field?: string): number;
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
export declare function calculateArrayMaxValue(arr: Array<any>): number;
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
export declare function calculateArrayMinValue(arr: Array<any>): number;
/**
 * 计算数组元素的和；如果是有对象数组，可以传入 field 参数，用 filed 的值来计算；
 *
 * @param arr
 * @param field
 */
export declare function calculateArraySum(arr: Array<number> | Array<any>, field?: string): any;
/**
 * 比较两个数组是否相等；只支持比较基本元素，不支持引用对象元素。
 *
 * @param arr1
 * @param arr2
 */
export declare function compareArray(arr1: Array<any>, arr2: Array<any>): boolean;
/**
 * 计算两个数组的差集
 *
 * @param arr1
 * @param arr2
 */
export declare function differenceSet<T>(arr1: Array<T>, arr2: Array<T>): Array<T>;
/**
 * 计算两个数组的交集
 *
 * @param arr1
 * @param arr2
 */
export declare function intersection<T>(arr1: Array<T>, arr2: Array<T>): Array<T>;
/**
 * 计算两个数组的并集
 *
 * @param arr1
 * @param arr2
 */
export declare function union<T>(arr1: Array<T>, arr2: Array<T>): Array<T>;
/**
 * 计算数组元素里的重复元素；
 *
 * @param arr
 */
export declare function findDuplicateElements<T>(arr: Array<T>): Array<T>;
/**
 * 合并两个数组；
 * @param arr1 - 数组1
 * @param arr2 - 数组2
 * @param removeRepetition - 是否移除重复元素
 */
export declare function mergeTwoArray<T>(arr1: Array<T>, arr2: Array<T>, removeRepetition?: boolean): Array<T>;
/**
 * 数组扁平化
 * @param arr
 * @param childrenKey
 */
export declare function flattenArray<T = any>(arr: Array<T>, childrenKey?: string): Array<T>;
/**
 * 数组去重
 * @param arr
 */
export declare function unique(arr: any[]): any[];
/**
 * 把数组通过某一个字段转换成 map
 * @param list
 * @param field
 */
export declare function transformListToMap<T>(list: Array<T>, field: string): Record<any, any>;
