import { deepGet } from '../object';

describe('测试 object', () => {
  test('测试 deepGet', () => {
    const obj = { a: { b: { c: { d: 'dx' } } } };
    expect(deepGet(obj, 'a.b.c')).toEqual({ d: 'dx' });
    expect(deepGet(obj, 'a.b.c.d')).toEqual('dx');
    expect(deepGet(obj, 'c')).toEqual(null);
    expect(deepGet(obj, '')).toEqual(null);
  });
});
