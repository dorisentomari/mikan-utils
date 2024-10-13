/**
 * 向下整除两个数字
 * @param a
 * @param b
 */
function divFloor(a, b) {
    return Math.floor(a / b);
}
/**
 * 向上整除两个数字
 * @param a
 * @param b
 */
function divCeil(a, b) {
    return Math.ceil(a / b);
}
/**
 * 计算复利 compound interest
 * @params {baseValue} 本金
 * @params {rate} 利率
 * @params {times} 周期单位，年、月、日等
 * */
function power(baseValue, rate, times) {
    times = parseInt(String(times), 10);
    for (var i = 0; i < times; i++) {
        baseValue *= rate;
    }
    return parseFloat(baseValue.toFixed(2));
}

export { divCeil, divFloor, power };
//# sourceMappingURL=number.js.map
