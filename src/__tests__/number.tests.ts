import { divCeil, divFloor, power } from '../number';

describe('测试 number', () => {
  test('测试 divCeil', () => {
    expect(divCeil(5, 2)).toEqual(3);
    expect(divCeil(10, 2)).toEqual(5);
  });

  test('测试 divFloor', () => {
    expect(divFloor(5, 2)).toEqual(2);
    expect(divFloor(10, 2)).toEqual(5);
  });

  test('测试 power', () => {
    expect(power(100, 1.1, 1)).toEqual(110);
    expect(power(100, 1.1, 2)).toEqual(121);
  });
});
