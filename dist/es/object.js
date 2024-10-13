import { isEmptyObject, isArray } from './common.js';

/**
 * 深度获取对象的值
 * @param obj
 * @param keys
 */
function deepGet(obj, keys) {
    if (obj === void 0) { obj = {}; }
    if (isEmptyObject(obj)) {
        return null;
    }
    if (!isArray(keys) || keys.length === 0) {
        return null;
    }
    var fields = keys.split('.');
    return fields.reduce(function (prev, curr) {
        if (prev && prev[curr]) {
            return prev[curr];
        }
        return null;
    }, obj);
}

export { deepGet };
//# sourceMappingURL=object.js.map
