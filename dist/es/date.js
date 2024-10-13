/**
 * 把UTC时间转换为本地时间
 * @param date
 */
function convertUTCToLocal(date) {
    var dateObj = new Date(date);
    var newDate = new Date(dateObj.getTime() + dateObj.getTimezoneOffset() * 60 * 1000);
    var offset = dateObj.getTimezoneOffset() / 60;
    var hours = dateObj.getHours();
    newDate.setHours(hours - offset);
    return newDate;
}
/**
 * 把本地时间转换为UTC时间
 * @param date
 */
function convertLocalToUTC(date) {
    var dateObj = new Date(date);
    var newDate = new Date(dateObj.getTime() - dateObj.getTimezoneOffset() * 60 * 1000);
    var offset = dateObj.getTimezoneOffset() / 60;
    var hours = dateObj.getHours();
    newDate.setHours(hours + offset);
    return newDate;
}

export { convertLocalToUTC, convertUTCToLocal };
//# sourceMappingURL=date.js.map
