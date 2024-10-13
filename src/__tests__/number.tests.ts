import { divCeil, divFloor, power } from '../number';

describe('测试 divFloor', () => {
  test('测试正数向下整除', () => {
    expect(divFloor(5.7, 2)).toBe(2);
  });
  
  test('测试负数向下整除', () => {
    expect(divFloor(-5.7, 2)).toBe(-3);
  });
  
  test('测试零作为被除数', () => {
    expect(divFloor(0, 2)).toBe(0);
  });
  
  test('测试除数为零', () => {
    expect(() => divFloor(5, 0)).toThrow('除数不能为零');
  });
});

describe('测试 divCeil', () => {
  test('测试正数向上整除', () => {
    expect(divCeil(5.2, 2)).toBe(3);
  });
  
  test('测试负数向上整除', () => {
    expect(divCeil(-5.2, 2)).toBe(-2);
  });
  
  test('测试零作为被除数', () => {
    expect(divCeil(0, 2)).toBe(0);
  });
  
  test('测试除数为零', () => {
    expect(() => divCeil(5, 0)).toThrow('除数不能为零');
  });
});

describe('测试 power', () => {
  test('测试正本金和正利率', () => {
    expect(power(1000, 1.05, 5)).toBe(1276.28);
  });
  
  test('测试零本金', () => {
    expect(power(0, 1.05, 5)).toBe(0);
  });
  
  test('测试负本金', () => {
    expect(power(-1000, 1.05, 5)).toBe(-1276.28);
  });
  
  test('测试负利率', () => {
    expect(power(1000, 0.95, 5)).toBe(773.78);
  });
  
  test('测试负周期', () => {
    expect(power(1000, 1.05, -5)).toBe(0); // 假设负周期返回0
  });
});
