import { capitalize, trim, trimLeft, trimRight } from '../string';

describe('测试 ', () => {
  test('测试 capitalize', () => {
    expect(capitalize('')).toEqual('');
    expect(capitalize('hello')).toEqual('Hello');
  });

  test('测试 trim', () => {
    expect(trim('  jack  ')).toEqual('jack');
    expect(trimLeft('  jack')).toEqual('jack');
    expect(trimRight('jack  ')).toEqual('jack');
  });
});
