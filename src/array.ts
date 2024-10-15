import { isNumber, isPlainObject, isArray } from './common';

/**
 * 数组化, if value is array, return `value`. if value is not array, return `[value]`;
 *
 * ```typescript
 * // eg. 1
 * let value = 1;
 * value = arrayify(value);
 * // now value is `[1]`;
 *
 * // eg. 2
 * let value = [1];
 * value = arrayify(value);
 * // now value is `[1]`;
 * ```
 *
 * @param {Array|any} value
 * @returns  {Array}
 * */

export function arrayify(value: Array<any> | any): Array<any> {
  if (isArray(value)) {
    return value;
  }
  return [value];
}

/**
 * 计算数组元素的平均值;
 *
 *
 * ```typescript
 * // eg. 1
 * let average = calculateArrayAverage([]);
 * // now average is `0`;
 *
 * // eg. 2
 * let average = calculateArrayAverage([1, 2, 3, 4, 5]);
 * // now average is `3`;
 *
 * // eg. 3
 * let average = calculateArrayAverage([1, 2, 3, 4, 5, '6', null, undefined, 'a', [], {}]);
 * // now average is `3`;
 * ```
 *
 * @param {Array<number>} arr
 * @param {string} field
 * @returns {number}
 * */
export function calculateArrayAverage(arr: Array<number> | Array<any>, field?: string): number {
  const len = arr.length;
  if (len === 0) {
    return 0;
  }

  const sum = arr.reduce((prev, curr) => {
    if (isNumber(curr)) {
      prev += curr;
    }
    if (isPlainObject(curr) && field) {
      const value = curr[field];
      if (isNumber(value)) {
        prev += value;
      }
    }
    return prev;
  }, 0);
  return sum / len;
}

/**
 * 计算数组元素里的最大值；
 *
 *
 * ```typescript
 * // eg. 1
 * let maxValue = calculateArrayMaxValue([]);
 * // now maxValue is `0`;
 *
 * // eg. 2
 * let maxValue = calculateArrayMaxValue([1, 2, 3, 4, 5]);
 * // now maxValue is `5`;
 *
 * // eg. 3
 * let maxValue = calculateArrayMaxValue([1, 2, 3, 4, 5, '8', 10]);
 * // now maxValue is `10`;
 *
 * // eg. 4
 * let maxValue = calculateArrayMaxValue([1, 2, 3, 4, 5, 'a', 10]);
 * // now maxValue is `NaN`;
 * ```
 *
 * @param {Array<number>} arr
 * @returns {number}
 * */

export function calculateArrayMaxValue(arr: Array<any>): number {
  if (arr.length === 0) {
    return 0;
  }
  return Math.max(...arr);
}

/**
 * 计算数组元素里的最小值；
 *
 *
 * ```typescript
 * // eg. 1
 * let minValue = calculateArrayMinValue([]);
 * // now minValue is `0`;
 *
 * // eg. 2
 * let minValue = calculateArrayMinValue([1, 2, 3, 4, 5]);
 * // now minValue is `1`;
 *
 * // eg. 3
 * let minValue = calculateArrayMinValue([1, 2, 3, 4, 5, '8', 10]);
 * // now minValue is `1`;
 *
 * // eg. 4
 * let minValue = calculateArrayMinValue([1, 2, 3, 4, 5, 'a', 10]);
 * // now minValue is `NaN`;
 * ```
 *
 * @param {Array<number>} arr
 * @returns {number}
 * */
export function calculateArrayMinValue(arr: Array<any>): number {
  if (arr.length === 0) {
    return 0;
  }
  return Math.min(...arr);
}

/**
 * 计算数组元素的和；如果是有对象数组，可以传入 field 参数，用 filed 的值来计算；
 *
 * @param arr
 * @param field
 */
export function calculateArraySum(arr: Array<number> | Array<any>, field?: string) {
  if (isArray(arr)) {
    return arr.reduce((prev, curr) => {
      if (isNumber(curr)) {
        prev += curr;
      }
      if (isPlainObject(curr) && field) {
        const value = curr[field];
        if (isNumber(value)) {
          prev += value;
        }
      }
      return prev;
    }, 0);
  }
  return 0;
}

/**
 * 比较两个数组是否相等；只支持比较基本元素，不支持引用对象元素。
 *
 * @param arr1
 * @param arr2
 */
export function compareArray(arr1: Array<any>, arr2: Array<any>) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  }
  
  const len1 = arr1.length;
  const len2 = arr2.length;
  if (len1 === len2 && len1 === 0) {
    return true;
  }

  if (len1 !== len2) {
    return false;
  }

  for (let i = 0; i < len1; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

/**
 * 计算两个数组的差集
 *
 * @param arr1
 * @param arr2
 */
export function differenceSet<T>(arr1: Array<T>, arr2: Array<T>): Array<T> {
  const set2 = new Set(arr2);
  const diff = new Set(arr1.filter((k) => !set2.has(k)));
  return Array.from(diff);
}

/**
 * 计算两个数组的交集
 *
 * @param arr1
 * @param arr2
 */
export function intersection<T>(arr1: Array<T>, arr2: Array<T>): Array<T> {
  const set2 = new Set(arr2);
  const result = arr1.filter((k) => set2.has(k));
  return Array.from(result);
}

/**
 * 计算两个数组的并集
 *
 * @param arr1
 * @param arr2
 */
export function union<T>(arr1: Array<T>, arr2: Array<T>): Array<T> {
  return Array.from(new Set([...arr1, ...arr2]));
}

/**
 * 计算数组元素里的重复元素；
 *
 * @param arr
 */
export function findDuplicateElements<T>(arr: Array<T>): Array<T> {
  const result: Array<T> = [];
  
  if (!Array.isArray(arr)) {
    return [];
  }
  
  if (arr.length === 0) {
    return result;
  }

  const map: Record<any, any> = {};

  const repeatSet = new Set<T>();

  for (let i = 0; i < arr.length; i++) {
    const item = String(arr[i]);
    if (map[item]) {
      repeatSet.add(arr[i]);
    } else {
      map[item] = true;
    }
  }

  return Array.from(repeatSet);
}

/**
 * 合并两个数组；
 * @param arr1 - 数组1
 * @param arr2 - 数组2
 * @param removeRepetition - 是否移除重复元素
 */
export function mergeTwoArray<T>(
  arr1: Array<T>,
  arr2: Array<T>,
  removeRepetition: boolean = false,
): Array<T> {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return [];
  }
  
  if (removeRepetition) {
    return Array.from(new Set([...arr1, ...arr2]));
  }
  return [...arr1, ...arr2];
}

/**
 * 数组扁平化，增加 parent 和 level
 * @param arr - 被扁平化的数组
 * @param childrenKey - 子元素的 key
 * @param parent - 父元素
 * @param level - 层级
 */
export function flattenArray<T = any>(arr: Array<T>, childrenKey: string = 'children', parent: T | null = null, level: number = 1): Array<T> {
  let result: Array<T> = [];
  
  if (!Array.isArray(arr)) {
    return result;
  }
  
  arr.forEach((item: any) => {
    if (typeof item === 'object' && item !== null && !Array.isArray(item)) {
      // 处理对象类型元素
      const children = item[childrenKey];
      const newItem = { ...item, parent, level };
      delete newItem[childrenKey];
      result.push(newItem);
      
      if (Array.isArray(children)) {
        result = result.concat(flattenArray(children, childrenKey, newItem, level + 1));
      }
    } else if (Array.isArray(item)) {
      // 处理数组类型元素
      result = result.concat(flattenArray(item, childrenKey, parent, level));
    } else {
      // 处理基本类型的元素
      result.push(item);
    }
  });
  
  // 返回去重后的结果
  return unique(result);
}


/**
 * 数组去重
 * @param arr
 */
export function unique(arr: any[]): any[] {
  if(!Array.isArray(arr)) {
    return [];
  }
  const seen = new Set();
  return arr.filter(item => {
    const serialized = typeof item === 'object' ? JSON.stringify(item) : item;
    if (seen.has(serialized)) {
      return false;
    }
    seen.add(serialized);
    return true;
  });
}


/**
 * 把数组通过某一个字段转换成 map
 * @param list
 * @param field
 */
export function transformListToMap<T>(list: Array<T>, field: string) {
  if (Array.isArray(list) && field) {
    return list.reduce((prev: Record<any, any>, curr) => {
      const value = (curr as any)[field];
      if (value) {
        prev[value] = curr;
      }
      return prev;
    }, {});
  }
  return {};
}
