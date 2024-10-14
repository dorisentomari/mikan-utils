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
export declare function capitalize(word: string): string;
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
export declare function trimLeft(val: string): string;
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
export declare function trimRight(val: string): string;
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
export declare function trim(val: string): string;
