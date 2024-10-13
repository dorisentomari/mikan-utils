import { capitalize, trim, trimLeft, trimRight } from '../string';

describe('测试 capitalize', () => {
  test('测试首字母大写', () => {
    expect(capitalize('hello')).toBe('Hello'); // 测试正常输入
  });
  
  test('测试空字符串', () => {
    expect(capitalize('')).toBe(''); // 测试空字符串
  });
  
  test('测试首字母大写时输入为大写', () => {
    expect(capitalize('Hello')).toBe('Hello'); // 测试首字母已经是大写
  });
  
  test('测试非字符串输入', () => {
    // @ts-ignore
    expect(capitalize(null)).toBe(null); // 测试 null 输入
    // @ts-ignore
    expect(capitalize(undefined)).toBe(undefined); // 测试 undefined 输入
  });
});

describe('测试 trimLeft', () => {
  test('测试裁剪左侧空格', () => {
    expect(trimLeft('   hello')).toBe('hello'); // 测试正常输入
  });
  
  test('测试左侧无空格', () => {
    expect(trimLeft('hello   ')).toBe('hello   '); // 测试左侧没有空格
  });
  
  test('测试空字符串', () => {
    expect(trimLeft('')).toBe(''); // 测试空字符串
  });
});

describe('测试 trimRight', () => {
  test('测试裁剪右侧空格', () => {
    expect(trimRight('hello   ')).toBe('hello'); // 测试正常输入
  });
  
  test('测试右侧无空格', () => {
    expect(trimRight('   hello')).toBe('   hello'); // 测试右侧没有空格
  });
  
  test('测试空字符串', () => {
    expect(trimRight('')).toBe(''); // 测试空字符串
  });
});

describe('测试 trim', () => {
  test('测试裁剪两侧空格', () => {
    expect(trim('   hello   ')).toBe('hello'); // 测试正常输入
  });
  
  test('测试两侧无空格', () => {
    expect(trim('hello')).toBe('hello'); // 测试没有空格的字符串
  });
  
  test('测试空字符串', () => {
    expect(trim('')).toBe(''); // 测试空字符串
  });
});
