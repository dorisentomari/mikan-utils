/**
 * 生成随机颜色（16进制）
 *
 * @param {boolean} needUpper - 是否需要将字母转换为大写，默认为 true。
 * @returns {string} - 生成的随机颜色字符串，以 16 进制表示。
 *
 * @example
 * const color = randomColor();
 * console.log(color); // 输出: "#AABBCC"
 */
export function randomColor(needUpper: boolean = true): string {
  const str = '#' + Math.random().toString(16).slice(2, 8);
  return needUpper ? str.toUpperCase() : str.toLowerCase(); // 统一返回格式
}

/**
 * 生成随机数字
 *
 * @param {number} minNumber - 随机数的最小值，默认为 0。
 * @param {number} maxNumber - 随机数的最大值，默认为 10000。
 * @param {boolean} needInt - 是否需要返回整数，默认为 true。
 * @returns {number} - 生成的随机数。
 *
 * @example
 * const num = randomNumber(1, 100, true);
 * console.log(num); // 输出: 42
 */
export function randomNumber(
  minNumber: number = 0,
  maxNumber: number = 10000,
  needInt: boolean = true,
): number {
  if (minNumber > maxNumber) {
    throw new Error('最小值不能大于最大值'); // 增加对参数的校验
  }
  
  const res = Math.random() * (maxNumber - minNumber) + minNumber;
  return needInt ? Math.floor(res) : res; // 使用 Math.floor 生成整数
}

/**
 * 生成随机字符串
 *
 * @param {number} maxLength - 随机字符串的最大长度，默认为 16。
 * @returns {string} - 生成的随机字符串。
 *
 * @example
 * const str = randomString(10);
 * console.log(str); // 输出: "KJQXTPBQDE"
 */
export function randomString(maxLength: number = 16): string {
  let str = '';
  while (str.length < maxLength) { // 使用 < 而不是 <=
    str += Math.random().toString(32).substr(2).toUpperCase();
  }
  return str.slice(0, maxLength); // 确保返回字符串的长度不超过 maxLength
}
