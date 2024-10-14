import { randomColor, randomNumber, randomString } from '../random'; // 请根据你的文件路径调整导入

describe('测试 randomColor', () => {
  test('测试生成随机颜色', () => {
    const color = randomColor();
    expect(color).toMatch(/^#[0-9A-F]{6}$/); // 检查生成的颜色格式
  });

  test('测试生成随机颜色（小写）', () => {
    const color = randomColor(false);
    expect(color).toMatch(/^#[0-9a-f]{6}$/); // 检查生成的颜色格式
  });
});

describe('测试 randomNumber', () => {
  test('测试生成随机整数', () => {
    const num = randomNumber(1, 100, true);
    expect(num).toBeGreaterThanOrEqual(1); // 检查下界
    expect(num).toBeLessThanOrEqual(100); // 检查上界
  });

  test('测试生成随机浮点数', () => {
    const num = randomNumber(1, 100, false);
    expect(num).toBeGreaterThanOrEqual(1); // 检查下界
    expect(num).toBeLessThanOrEqual(100); // 检查上界
    expect(num).toBeGreaterThan(1); // 检查生成的数大于 1
  });

  test('测试最小值大于最大值时抛出错误', () => {
    expect(() => randomNumber(100, 1)).toThrow('最小值不能大于最大值'); // 检查抛出错误
  });
});

describe('测试 randomString', () => {
  test('测试生成随机字符串', () => {
    const str = randomString(10);
    expect(str).toHaveLength(10); // 检查字符串长度
  });

  test('测试生成默认长度的随机字符串', () => {
    const str = randomString();
    expect(str).toHaveLength(16); // 检查默认长度
  });

  test('测试生成的随机字符串是否为大写', () => {
    const str = randomString(5);
    expect(str).toMatch(/^[A-Z0-9]+$/); // 检查字符串是否为大写
  });
});
