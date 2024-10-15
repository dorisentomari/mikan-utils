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

  describe('flattenArray 扁平化数组方法', () => {
    test('应该正确扁平化父子结构数组并添加 parent 和 level', () => {
      const input = [
        {
          id: 1,
          name: '父元素',
          children: [
            { id: 2, name: '子元素 1' },
            { id: 3, name: '子元素 2', children: [{ id: 4, name: '孙元素' }] },
          ],
        },
        { id: 5, name: '单独元素' },
      ];

      const expected = [
        { id: 1, name: '父元素', parent: null, level: 1 },
        {
          id: 2,
          name: '子元素 1',
          parent: { id: 1, name: '父元素', parent: null, level: 1 },
          level: 2,
        },
        {
          id: 3,
          name: '子元素 2',
          parent: { id: 1, name: '父元素', parent: null, level: 1 },
          level: 2,
        },
        {
          id: 4,
          name: '孙元素',
          parent: {
            id: 3,
            name: '子元素 2',
            parent: { id: 1, name: '父元素', parent: null, level: 1 },
            level: 2,
          },
          level: 3,
        },
        { id: 5, name: '单独元素', parent: null, level: 1 },
      ];

      const result = flattenArray(input);
      expect(result).toEqual(expected);
    });

    test('应该正确处理深度嵌套的数组结构', () => {
      const input = [
        {
          id: 1,
          name: 'A',
          children: [
            {
              id: 2,
              name: 'B',
              children: [{ id: 3, name: 'C' }],
            },
          ],
        },
      ];

      const expected = [
        { id: 1, name: 'A', parent: null, level: 1 },
        { id: 2, name: 'B', parent: { id: 1, name: 'A', parent: null, level: 1 }, level: 2 },
        {
          id: 3,
          name: 'C',
          parent: {
            id: 2,
            name: 'B',
            parent: { id: 1, name: 'A', parent: null, level: 1 },
            level: 2,
          },
          level: 3,
        },
      ];

      const result = flattenArray(input);
      expect(result).toEqual(expected);
    });

    test('应该处理包含基本类型元素的数组', () => {
      const input = [
        {
          id: 1,
          name: 'A',
          children: [2, { id: 3, name: 'B' }],
        },
        'stringElement',
      ];

      const expected = [
        { id: 1, name: 'A', parent: null, level: 1 },
        2,
        { id: 3, name: 'B', parent: { id: 1, name: 'A', parent: null, level: 1 }, level: 2 },
        'stringElement',
      ];

      const result = flattenArray(input);
      expect(result).toEqual(expected);
    });

    test('应该处理空数组', () => {
      const result = flattenArray([]);
      expect(result).toEqual([]);
    });

    test('应该处理无 children 属性的对象', () => {
      const input = [
        { id: 1, name: 'A' },
        { id: 2, name: 'B', children: [{ id: 3, name: 'C' }] },
      ];

      const expected = [
        { id: 1, name: 'A', parent: null, level: 1 },
        { id: 2, name: 'B', parent: null, level: 1 },
        { id: 3, name: 'C', parent: { id: 2, name: 'B', parent: null, level: 1 }, level: 2 },
      ];

      const result = flattenArray(input);
      expect(result).toEqual(expected);
    });

    test('应该处理非数组的输入并返回空数组', () => {
      const result = flattenArray(null as any);
      expect(result).toEqual([]);

      const result2 = flattenArray(undefined as any);
      expect(result2).toEqual([]);

      const result3 = flattenArray({ id: 1 } as any);
      expect(result3).toEqual([]);
    });

    test('应该处理重复数据并去重', () => {
      const input = [
        { id: 1, name: 'A', children: [{ id: 2, name: 'B' }] },
        { id: 1, name: 'A', children: [{ id: 2, name: 'B' }] },
      ];

      const expected = [
        { id: 1, name: 'A', parent: null, level: 1 },
        { id: 2, name: 'B', parent: { id: 1, name: 'A', parent: null, level: 1 }, level: 2 },
      ];

      const result = flattenArray(input);
      expect(result).toEqual(expected);
    });

    test('应该避免循环引用问题，parent 字段不应该出现深拷贝', () => {
      const input = [
        {
          id: 1,
          name: 'A',
          children: [{ id: 2, name: 'B' }],
        },
      ];

      const result = flattenArray(input);
      // @ts-ignore
      expect(result[1].parent).toBe(result[0]); // parent 指针应该是引用
    });

    test('应该正确处理数组中的嵌套数组元素', () => {
      const input = [
        {
          id: 1,
          name: 'A',
          children: [
            [
              { id: 2, name: 'B' },
              { id: 3, name: 'C' },
            ],
          ],
        },
      ];

      const expected = [
        { id: 1, name: 'A', parent: null, level: 1 },
        { id: 2, name: 'B', parent: { id: 1, name: 'A', parent: null, level: 1 }, level: 2 },
        { id: 3, name: 'C', parent: { id: 1, name: 'A', parent: null, level: 1 }, level: 2 },
      ];

      const result = flattenArray(input);
      expect(result).toEqual(expected);
    });
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
