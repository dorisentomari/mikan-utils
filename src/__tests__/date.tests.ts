import { convertLocalToUTC, convertUTCToLocal } from '../date';

describe('测试 convertUTCToLocal', () => {
	test('测试有效的 UTC 时间字符串', () => {
		const utcTime = '2024-10-13T12:00:00Z';
		const localTime = convertUTCToLocal(utcTime);
		expect(localTime).toBeInstanceOf(Date); // 确保返回的是 Date 对象
		expect(localTime.toISOString()).toBe('2024-10-13T12:00:00.000Z'); // 根据本地时区检查
	});
	
	test('测试有效的 UTC 时间戳', () => {
		const utcTime = 1697198400000; // 对应 '2024-10-13T12:00:00Z'
		const localTime = convertUTCToLocal(utcTime);
		expect(localTime).toBeInstanceOf(Date);
		expect(localTime.toISOString()).toBe('2024-10-13T12:00:00.000Z'); // 根据本地时区检查
	});
	
	test('测试无效的 UTC 时间字符串', () => {
		const invalidUTC = 'invalid-date';
		expect(() => convertUTCToLocal(invalidUTC)).toThrow(Error); // 确保无效输入会抛出错误
	});
});

describe('测试 convertLocalToUTC', () => {
	test('测试有效的本地时间对象', () => {
		const localDate = new Date('2024-10-13T12:00:00'); // 本地时间
		// @ts-ignore
		const utcTime = convertLocalToUTC(localDate);
		expect(utcTime).toBeInstanceOf(Date); // 确保返回的是 Date 对象
		expect(utcTime.toISOString()).toBe('2024-10-13T12:00:00.000Z'); // 验证 UTC 时间
	});
	
	test('测试有效的本地时间戳', () => {
		const localTime = 1697198400000; // 对应 '2024-10-13T12:00:00'
		const utcTime = convertLocalToUTC(localTime);
		expect(utcTime).toBeInstanceOf(Date);
		expect(utcTime.toISOString()).toBe('2024-10-13T12:00:00.000Z'); // 验证 UTC 时间
	});
	
	test('测试无效的本地时间字符串', () => {
		const invalidLocal = 'invalid-date';
		expect(() => convertLocalToUTC(invalidLocal)).toThrow(Error); // 确保无效输入会抛出错误
	});
});
