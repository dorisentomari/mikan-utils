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

export { capitalize, trim, trimLeft, trimRight };
//# sourceMappingURL=string.js.map
