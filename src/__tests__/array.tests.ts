import {
  arrayify,
  calculateArrayAverage,
  calculateArrayMaxValue,
  calculateArrayMinValue,
  calculateArraySum,
  compareArray,
  differenceSet,
  intersection,
  union,
  findDuplicateElements,
  mergeTwoArray,
  flattenArray,
  unique,
  transformListToMap,
} from '../array';

describe('测试 array', () => {
  test('测试 arrayify', () => {
    expect(arrayify('a')).toEqual(['a']);
    expect(arrayify(['a'])).toEqual(['a']);
  });

  test('测试 calculateArrayAverage', () => {
    expect(calculateArrayAverage([])).toEqual(0);
    expect(calculateArrayAverage([1, 2, 3])).toEqual(2);
    expect(
      calculateArrayAverage(
        [
          { id: 1, age: 18 },
          { id: 2, age: 22 },
          { id: 3, age: 20 },
        ],
        'age',
      ),
    ).toEqual(20);
  });

  test('测试 calculateArrayMaxValue', () => {
    expect(calculateArrayMaxValue([])).toEqual(0);
    expect(calculateArrayMaxValue([1, 2, 3])).toEqual(3);
  });

  test('测试 calculateArrayMaxValue', () => {
    expect(calculateArrayMinValue([])).toEqual(0);
    expect(calculateArrayMinValue([1, 2, 3])).toEqual(1);
  });

  test('测试 calculateArraySum', () => {
    // @ts-ignore
    expect(calculateArraySum()).toEqual(0);
    expect(calculateArraySum([])).toEqual(0);
    expect(calculateArraySum([1, 2, 3])).toEqual(6);
    expect(calculateArraySum([{ n: 1 }, { n: 2 }, { n: 3 }])).toEqual(0);
    expect(calculateArraySum([{ n: 1 }, { n: 2 }, { n: 3 }], 'n')).toEqual(6);
  });

  test('测试 compareArray', () => {
    // @ts-ignore
    expect(compareArray()).toEqual(false);
    expect(compareArray([], [])).toEqual(true);
    expect(compareArray([1], [])).toEqual(false);
    expect(compareArray([1, 2], [1, 2])).toEqual(true);
    expect(compareArray([1, 2], [2, 1])).toEqual(false);
  });

  test('测试 differenceSet', () => {
    expect(differenceSet([], [])).toEqual([]);
    expect(differenceSet([1, 2, 3], [3, 4, 5])).toEqual([1, 2]);
  });

  test('测试 intersection', () => {
    expect(intersection([], [])).toEqual([]);
    expect(intersection([1, 2, 3], [4, 5, 6])).toEqual([]);
    expect(intersection([1, 2, 3], [3, 4, 5])).toEqual([3]);
  });

  test('测试 union', () => {
    expect(union([], [])).toEqual([]);
    expect(union([1, 2, 3], [3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('测试 findDuplicateElements', () => {
    // @ts-ignore
    expect(findDuplicateElements()).toEqual([]);
    expect(findDuplicateElements([])).toEqual([]);
    expect(findDuplicateElements([1, 2, 3, 4, 5])).toEqual([]);
    expect(findDuplicateElements([null, null, null])).toEqual([null]);
    expect(findDuplicateElements([1, 2, 3, 3, 4, 5, 9, 4, 3])).toEqual([3, 4]);
  });

  test('测试 mergeTwoArray', () => {
    // @ts-ignore
    expect(mergeTwoArray()).toEqual([]);
    expect(mergeTwoArray([], [])).toEqual([]);
    expect(mergeTwoArray([1, 2, 3], [3, 4, 5])).toEqual([1, 2, 3, 3, 4, 5]);
    expect(mergeTwoArray([1, 2, 3], [3, 4, 5], true)).toEqual([1, 2, 3, 4, 5]);
  });

  test('测试 flattenArray', () => {
    // @ts-ignore
    expect(flattenArray()).toEqual([]);
    expect(flattenArray([1, 2, 3])).toEqual([1, 2, 3]);
    expect(flattenArray([1, 2, 3, [4, 5, [6, 7]]])).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(
      flattenArray([
        { id: 1 },
        { id: 2, children: [] },
        { id: 3, children: [{ id: 31 }, { id: 32, children: [{ id: 321 }, { id: 322 }] }] },
      ]),
    ).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 31 }, { id: 32 }, { id: 321 }, { id: 322 }]);
  });

  test('测试 unique', () => {
    // @ts-ignore
    expect(unique()).toEqual([]);
    expect(unique([])).toEqual([]);
    expect(
      unique([
        1,
        { name: 'item1' },
        { name: 'item1' }, // 与上一个对象内容相同
        2,
        1, // 重复项
        [3, 4],
        [3, 4], // 重复项
      ]),
    ).toEqual([1, { name: 'item1' }, 2, [3, 4]]);
  });

  test('测试 transformListToMap', () => {
    // @ts-ignore
    expect(transformListToMap()).toEqual({});
    expect(transformListToMap([{ id: 1 }, { id: 2 }], 'id')).toEqual({
      1: { id: 1 },
      2: { id: 2 },
    });
  });
});
