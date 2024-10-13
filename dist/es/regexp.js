var phoneRegexp = /^1\d{10}$/g;
function isPhone(phone) {
    return phoneRegexp.test(phone);
}
var emailRegexp = /^[0-9a-zA-Z]+@[0-9a-zA-Z\-]+\.[0-9a-zA-Z]+/;
function isEmail(email) {
    return emailRegexp.test(email);
}
var stringNumberRegexp = /^\d+$/;

export { emailRegexp, isEmail, isPhone, phoneRegexp, stringNumberRegexp };
//# sourceMappingURL=regexp.js.map
