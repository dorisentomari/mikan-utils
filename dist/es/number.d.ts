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
export declare function divFloor(a: number, b: number): number;
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
export declare function divCeil(a: number, b: number): number;
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
export declare function power(baseValue: number, rate: number, times: number): number;
