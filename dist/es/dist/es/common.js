/* 基础数据类型 */
/**
 * 检查值是否为布尔类型。
 * @param {any} value - 要检查的值。
 * @returns {boolean} - 如果值是布尔类型则返回 true，否则返回 false。
 */
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
var ua = window.navigator.userAgent;
/**
 * 当前环境信息映射。
 */
({
    isPC: !ua.includes('Android') && !ua.includes('iPhone'),
    isMobile: ua.includes('Android') || ua.includes('iPhone'),
    isAndroid: ua.includes('Android'),
    isIPhone: ua.includes('iPhone'),
    isIPad: ua.includes('iPad'),
});

export { isEmptyObject, isPlainObject };
//# sourceMappingURL=common.js.map
