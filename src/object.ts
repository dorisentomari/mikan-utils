import {deepGet} from '../dist/es/object';

describe('测试 deepGet', () => {
  test('测试有效的键路径', () => {
    const data = { a: { b: { c: 42 } } };
    const value = deepGet(data, 'a.b.c');
    expect(value).toBe(42); // 检查正确的值
  });
  
  test('测试无效的键路径', () => {
    const data = { a: { b: { c: 42 } } };
    const value = deepGet(data, 'a.b.x');
    expect(value).toBeNull(); // 检查无效路径返回 null
  });
  
  test('测试空对象', () => {
    const value = deepGet({}, 'a.b.c');
    expect(value).toBeNull(); // 检查空对象返回 null
  });
  
  test('测试空键路径', () => {
    const data = { a: { b: { c: 42 } } };
    const value = deepGet(data, '');
    expect(value).toBeNull(); // 检查空键路径返回 null
  });
  
  test('测试键路径为字符串', () => {
    const data = { '1': { '2': { '3': 100 } } };
    const value = deepGet(data, '1.2.3');
    expect(value).toBe(100); // 检查字符串键路径
  });
  
  test('测试键路径包含空格', () => {
    const data = { a: { b: { c: 50 } } };
    const value = deepGet(data, ' a . b . c '); // 包含空格的键路径
    expect(value).toBe(50); // 检查去除空格后返回的值
  });
});
