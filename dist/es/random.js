// 随机颜色 16 进制
function randomColor(needUpper) {
    if (needUpper === void 0) { needUpper = true; }
    var str = '#' + Math.random().toString(16).slice(2, 8);
    if (needUpper) {
        return str.toUpperCase();
    }
    return str;
}
// 随机区间数字
function randomNumber(minNumber, maxNumber, needInt) {
    if (minNumber === void 0) { minNumber = 0; }
    if (maxNumber === void 0) { maxNumber = 10000; }
    if (needInt === void 0) { needInt = true; }
    var res = Math.random() * (maxNumber - minNumber + 1) + minNumber;
    return needInt ? parseInt(res.toString(), 10) : res;
}
// 随机字符串
function randomString(maxLength) {
    if (maxLength === void 0) { maxLength = 16; }
    var str = '';
    while (str.length <= maxLength) {
        str += Math.random().toString(32).substr(2).toUpperCase();
    }
    return str;
}

export { randomColor, randomNumber, randomString };
//# sourceMappingURL=random.js.map
