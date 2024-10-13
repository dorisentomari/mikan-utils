import { CSVtoJSON, JSONtoCSV } from '../csv'; // 请根据你的文件路径调整导入

describe('测试 CSVtoJSON', () => {
	test('测试空字符串', () => {
		const result = CSVtoJSON('');
		expect(result).toEqual([]);
	});
	
	test('测试无数据的 CSV', () => {
		const result = CSVtoJSON('name,age\n');
		expect(result).toEqual([]);
	});
	
	test('测试基本 CSV 转换', () => {
		const csvData = 'name,age\nAlice,30\nBob,25';
		const result = CSVtoJSON(csvData);
		expect(result).toEqual([{ name: 'Alice', age: '30' }, { name: 'Bob', age: '25' }]);
	});
	
	test('测试不同分隔符', () => {
		const csvData = 'name|age\nAlice|30\nBob|25';
		const result = CSVtoJSON(csvData, '|');
		expect(result).toEqual([{ name: 'Alice', age: '30' }, { name: 'Bob', age: '25' }]);
	});
});

describe('测试 JSONtoCSV', () => {
	test('测试空数组', () => {
		// @ts-ignore
		const result = JSONtoCSV([], ['name', 'age']);
		expect(result).toEqual('name,age\n');
	});
	
	test('测试基本 JSON 转换', () => {
		const jsonData = [{ name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }];
		// @ts-ignore
		const result = JSONtoCSV(jsonData, ['name', 'age']);
		expect(result).toEqual('name,age\nAlice,30\nBob,25');
	});
	
	test('测试缺少字段的 JSON', () => {
		const jsonData = [{ name: 'Alice' }, { name: 'Bob', age: 25 }];
		// @ts-ignore
		const result = JSONtoCSV(jsonData, ['name', 'age']);
		expect(result).toEqual('name,age\nAlice,\nBob,25');
	});
	
	test('测试数组元素不是对象', () => {
		// @ts-ignore
		expect(() => JSONtoCSV([1, 2, 3], ['name', 'age'])).toThrow(TypeError);
	});
});
