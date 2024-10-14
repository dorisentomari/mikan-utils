import { isPhone, isEmail, isStringNumber } from '../regexp'; // 请根据你的文件路径调整导入

describe('测试 isPhone', () => {
  test('测试有效手机号', () => {
    expect(isPhone('13812345678')).toBe(true); // 测试有效手机号
  });

  test('测试非字符串类型输入', () => {
    expect(isPhone(13812345678)).toBe(true); // 测试数字输入
    expect(isPhone(null)).toBe(false); // 测试 null 输入
    expect(isPhone('')).toBe(false); // 测试空字符串输入
  });
});

describe('测试 isEmail', () => {
  test('测试有效邮箱', () => {
    expect(isEmail('test@example.com')).toBe(true); // 测试有效邮箱
  });

  test('测试无效邮箱', () => {
    expect(isEmail('invalid-email')).toBe(false); // 测试无效邮箱格式
    expect(isEmail('test@.com')).toBe(false); // 测试缺少域名
  });

  test('测试非字符串类型输入', () => {
    // @ts-ignore
    expect(isEmail(123456)).toBe(false); // 测试数字输入
    // @ts-ignore
    expect(isEmail(null)).toBe(false); // 测试 null 输入
    expect(isEmail('')).toBe(false); // 测试空字符串输入
  });
});

describe('测试 isStringNumber', () => {
  test('测试有效数字字符串', () => {
    expect(isStringNumber('12345')).toBe(true); // 测试有效数字字符串
    expect(isStringNumber('0')).toBe(true); // 测试边界数字
  });

  test('测试无效数字字符串', () => {
    expect(isStringNumber('123.45')).toBe(false); // 测试浮点数
    expect(isStringNumber('abc')).toBe(false); // 测试字母
  });

  test('测试非字符串类型输入', () => {
    // @ts-ignore
    expect(isStringNumber(null)).toBe(false); // 测试 null 输入
    expect(isStringNumber('')).toBe(false); // 测试空字符串输入
  });
});
