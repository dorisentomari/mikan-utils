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
export declare function randomColor(needUpper?: boolean): string;
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
export declare function randomNumber(minNumber?: number, maxNumber?: number, needInt?: boolean): number;
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
export declare function randomString(maxLength?: number): string;
