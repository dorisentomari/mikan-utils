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

export { capitalize, trim, trimLeft, trimRight };
//# sourceMappingURL=string.js.map
