import {
  isBoolean,
  isNumber,
  isString,
  isUndefined,
  isNull,
  isSymbol,
  isNaN,
  isInt,
  isEven,
  isOdd,
  isPositiveNumber,
  isNegativeNumber,
  isBaseType,
  isMap,
  isWeakMap,
  isSet,
  isWeakSet,
  isArray,
  isEmptyArray,
  isPlainObject,
  isEmptyObject,
  isObject,
  isDate,
  isFunction,
  isValidDate,
  isError,
  isHTMLElement,
  isBrowser,
  isNode,
  isLeapYear,
} from '../common';

describe('测试 isBoolean', () => {
  test('测试 isBoolean 返回 true 对于 true', () => {
    expect(isBoolean(true)).toBe(true);
  });

  test('测试 isBoolean 返回 false 对于 false', () => {
    expect(isBoolean(false)).toBe(true);
  });

  test('测试 isBoolean 返回 false 对于非布尔值', () => {
    expect(isBoolean(1)).toBe(false);
    expect(isBoolean('true')).toBe(false);
    expect(isBoolean(null)).toBe(false);
  });
});

describe('测试 isNumber', () => {
  test('测试 isNumber 返回 true 对于数字', () => {
    expect(isNumber(123)).toBe(true);
  });

  test('测试 isNumber 返回 false 对于非数字', () => {
    expect(isNumber('123')).toBe(false);
    expect(isNumber(true)).toBe(false);
    expect(isNumber(null)).toBe(false);
  });
});

describe('测试 isString', () => {
  test('测试 isString 返回 true 对于字符串', () => {
    expect(isString('hello')).toBe(true);
  });

  test('测试 isString 返回 false 对于非字符串', () => {
    expect(isString(123)).toBe(false);
    expect(isString(true)).toBe(false);
    expect(isString(null)).toBe(false);
  });
});

describe('测试 isUndefined', () => {
  test('测试 isUndefined 返回 true 对于 undefined', () => {
    expect(isUndefined(undefined)).toBe(true);
  });

  test('测试 isUndefined 返回 false 对于其他值', () => {
    expect(isUndefined(null)).toBe(false);
    expect(isUndefined(123)).toBe(false);
  });
});

describe('测试 isNull', () => {
  test('测试 isNull 返回 true 对于 null', () => {
    expect(isNull(null)).toBe(true);
  });

  test('测试 isNull 返回 false 对于其他值', () => {
    expect(isNull(undefined)).toBe(false);
    expect(isNull(123)).toBe(false);
  });
});

describe('测试 isHTMLElement', () => {
  test('传入 HTMLElement 返回 true', () => {
    const element = document.createElement('div');
    expect(isHTMLElement(element)).toBe(true);
  });
  
  test('传入非 HTMLElement 返回 false', () => {
    expect(isHTMLElement(null)).toBe(false);
  });
});


describe('测试 isSymbol', () => {
  test('测试 isSymbol 返回 true 对于符号', () => {
    expect(isSymbol(Symbol())).toBe(true);
  });

  test('测试 isSymbol 返回 false 对于非符号', () => {
    expect(isSymbol(123)).toBe(false);
    expect(isSymbol('symbol')).toBe(false);
  });
});

describe('测试 isNaN', () => {
  test('测试 isNaN 返回 true 对于 NaN', () => {
    expect(isNaN(NaN)).toBe(true);
  });

  test('测试 isNaN 返回 false 对于其他数字', () => {
    expect(isNaN(123)).toBe(false);
    expect(isNaN('123')).toBe(false);
  });
});

describe('测试 isInt', () => {
  test('测试 isInt 返回 true 对于整数', () => {
    expect(isInt(123)).toBe(true);
  });

  test('测试 isInt 返回 false 对于非整数', () => {
    expect(isInt(123.45)).toBe(false);
    expect(isInt('123')).toBe(false);
  });
});

describe('测试 isEven', () => {
  test('测试 isEven 返回 true 对于偶数', () => {
    expect(isEven(2)).toBe(true);
  });

  test('测试 isEven 返回 false 对于奇数', () => {
    expect(isEven(3)).toBe(false);
  });
});

describe('测试 isOdd', () => {
  test('测试 isOdd 返回 true 对于奇数', () => {
    expect(isOdd(3)).toBe(true);
  });

  test('测试 isOdd 返回 false 对于偶数', () => {
    expect(isOdd(2)).toBe(false);
  });
});

describe('测试 isPositiveNumber', () => {
  test('测试 isPositiveNumber 返回 true 对于正数', () => {
    expect(isPositiveNumber(1)).toBe(true);
  });

  test('测试 isPositiveNumber 返回 false 对于负数和零', () => {
    expect(isPositiveNumber(-1)).toBe(false);
    expect(isPositiveNumber(0)).toBe(false);
  });
});

describe('测试 isNegativeNumber', () => {
  test('测试 isNegativeNumber 返回 true 对于负数', () => {
    expect(isNegativeNumber(-1)).toBe(true);
  });

  test('测试 isNegativeNumber 返回 false 对于正数和零', () => {
    expect(isNegativeNumber(1)).toBe(false);
    expect(isNegativeNumber(0)).toBe(false);
  });
});

describe('测试 isBaseType', () => {
  test('测试 isBaseType 返回 true 对于基本类型', () => {
    expect(isBaseType(123)).toBe(true);
    expect(isBaseType('test')).toBe(true);
    expect(isBaseType(true)).toBe(true);
    expect(isBaseType(null)).toBe(true);
    expect(isBaseType(undefined)).toBe(true);
    expect(isBaseType(Symbol())).toBe(true);
  });

  test('测试 isBaseType 返回 false 对于非基本类型', () => {
    expect(isBaseType([])).toBe(false);
    expect(isBaseType({})).toBe(false);
    expect(isBaseType(() => {})).toBe(false);
  });
});

describe('测试 isMap', () => {
  test('测试 isMap 返回 true 对于 Map', () => {
    expect(isMap(new Map())).toBe(true);
  });

  test('测试 isMap 返回 false 对于非 Map', () => {
    expect(isMap({})).toBe(false);
    expect(isMap([])).toBe(false);
  });
});

describe('测试 isWeakMap', () => {
  test('测试 isWeakMap 返回 true 对于 WeakMap', () => {
    expect(isWeakMap(new WeakMap())).toBe(true);
  });

  test('测试 isWeakMap 返回 false 对于非 WeakMap', () => {
    expect(isWeakMap(new Map())).toBe(false);
    expect(isWeakMap([])).toBe(false);
  });
});

describe('测试 isSet', () => {
  test('测试 isSet 返回 true 对于 Set', () => {
    expect(isSet(new Set())).toBe(true);
  });

  test('测试 isSet 返回 false 对于非 Set', () => {
    expect(isSet({})).toBe(false);
    expect(isSet([])).toBe(false);
  });
});

describe('测试 isWeakSet', () => {
  test('测试 isWeakSet 返回 true 对于 WeakSet', () => {
    expect(isWeakSet(new WeakSet())).toBe(true);
  });

  test('测试 isWeakSet 返回 false 对于非 WeakSet', () => {
    expect(isWeakSet(new Set())).toBe(false);
    expect(isWeakSet([])).toBe(false);
  });
});

describe('测试 isArray', () => {
  test('测试 isArray 返回 true 对于数组', () => {
    expect(isArray([])).toBe(true);
  });

  test('测试 isArray 返回 false 对于非数组', () => {
    expect(isArray({})).toBe(false);
    expect(isArray(123)).toBe(false);
  });
});

describe('测试 isEmptyArray', () => {
  test('测试 isEmptyArray 返回 true 对于空数组', () => {
    expect(isEmptyArray([])).toBe(true);
  });

  test('测试 isEmptyArray 返回 false 对于非空数组', () => {
    expect(isEmptyArray([1, 2, 3])).toBe(false);
    expect(isEmptyArray({})).toBe(false);
  });
});

describe('测试 isPlainObject', () => {
  test('测试 isPlainObject 返回 true 对于普通对象', () => {
    expect(isPlainObject({})).toBe(true);
  });

  test('测试 isPlainObject 返回 false 对于非普通对象', () => {
    expect(isPlainObject(new Map())).toBe(false);
    expect(isPlainObject([])).toBe(false);
  });
});

describe('测试 isEmptyObject', () => {
  test('测试 isEmptyObject 返回 true 对于空对象', () => {
    expect(isEmptyObject({})).toBe(true);
  });

  test('测试 isEmptyObject 返回 false 对于非空对象', () => {
    expect(isEmptyObject({ key: 'value' })).toBe(false);
    expect(isEmptyObject([])).toBe(false);
  });
});

describe('测试 isObject', () => {
  test('测试 isObject 返回 true 对于对象', () => {
    expect(isObject({})).toBe(true);
    expect(isObject(new Date())).toBe(true);
  });

  test('测试 isObject 返回 false 对于非对象', () => {
    expect(isObject(123)).toBe(false);
    expect(isObject(null)).toBe(false);
  });
});

describe('测试 isDate', () => {
  test('测试 isDate 返回 true 对于日期对象', () => {
    expect(isDate(new Date())).toBe(true);
  });

  test('测试 isDate 返回 false 对于非日期对象', () => {
    expect(isDate({})).toBe(false);
    expect(isDate('2021-01-01')).toBe(false);
  });
});

describe('测试 isFunction', () => {
  test('测试 isFunction 返回 true 对于函数', () => {
    expect(isFunction(() => {})).toBe(true);
  });

  test('测试 isFunction 返回 false 对于非函数', () => {
    expect(isFunction(123)).toBe(false);
    expect(isFunction({})).toBe(false);
  });
});

describe('测试 isValidDate', () => {
  test('测试 isValidDate 返回 true 对于有效日期', () => {
    expect(isValidDate('2021-01-01')).toBe(true);
  });

  test('测试 isValidDate 返回 false 对于无效日期', () => {
    expect(isValidDate('invalid date')).toBe(false);
  });
});

describe('测试 isError', () => {
  test('测试 isError 返回 true 对于错误对象', () => {
    expect(isError(new Error())).toBe(true);
  });

  test('测试 isError 返回 false 对于非错误对象', () => {
    expect(isError({})).toBe(false);
    expect(isError(123)).toBe(false);
  });
});

describe('测试 isHTMLElement', () => {
  test('测试 isHTMLElement 返回 true 对于 HTML 元素', () => {
    const div = document.createElement('div');
    expect(isHTMLElement(div)).toBe(true);
  });

  test('测试 isHTMLElement 返回 false 对于非 HTML 元素', () => {
    expect(isHTMLElement({})).toBe(false);
    expect(isHTMLElement(null)).toBe(false);
  });
});

describe('测试 isBrowser', () => {
  test('测试 isBrowser 返回 true 如果在浏览器环境中', () => {
    expect(isBrowser()).toBe(typeof window === 'object' && typeof document === 'object');
  });
});

describe('测试 isNode', () => {
  test('测试 isNode 返回 true 如果在 Node.js 环境中', () => {
    expect(isNode()).toBe(
      typeof process !== 'undefined' && process.versions != null && process.versions.node != null,
    );
  });
});

describe('测试 isLeapYear', () => {
  test('测试 isLeapYear 返回 true 对于闰年', () => {
    expect(isLeapYear(2020)).toBe(true);
  });

  test('测试 isLeapYear 返回 false 对于非闰年', () => {
    expect(isLeapYear(2021)).toBe(false);
  });

  test('测试 isLeapYear 返回 false 对于非数字', () => {
    // @ts-ignore
    expect(isLeapYear('2020')).toBe(false);
    // @ts-ignore
    expect(isLeapYear(null)).toBe(false);
  });
});
