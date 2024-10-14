import { __assign } from './node_modules/tslib/tslib.es6.js';
import * as array from './array.js';
import * as browser from './browser.js';
import * as common from './common.js';
import * as csv from './csv.js';
import * as date from './date.js';
import * as number from './number.js';
import * as object from './object.js';
import * as random from './random.js';
import * as regexp from './regexp.js';
import * as string from './string.js';

var index = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, array), browser), common), csv), date), number), object), random), regexp), string);
window.onload = function () {
    undefined('div', 'color: red;');
    undefined('#name', 'color: blue;');
};

export { index as default };
//# sourceMappingURL=index.js.map
