import { isPlainObject } from './common';

/**
 * 深度获取对象的值
 * @param obj
 * @param keys
 */
export function deepGet(obj = {}, keys: string) {
  if (!isPlainObject(obj)) {
    return null;
  }

  keys = String(keys);

  if (keys.length === 0) {
    return null;
  }

  const fields = keys.split('.');
  return fields.reduce((prev: Record<any, any>, curr) => {
    if (prev && prev[curr]) {
      return prev[curr];
    }
    return null;
  }, obj);
}
