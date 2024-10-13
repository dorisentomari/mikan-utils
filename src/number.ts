/**
 * 向下整除两个数字
 * @param a
 * @param b
 */
export function divFloor(a: number, b: number): number {
  return Math.floor(a / b);
}

/**
 * 向上整除两个数字
 * @param a
 * @param b
 */
export function divCeil(a: number, b: number): number {
  return Math.ceil(a / b);
}

/**
 * 计算复利 compound interest
 * @params {baseValue} 本金
 * @params {rate} 利率
 * @params {times} 周期单位，年、月、日等
 * */
export function power(baseValue: number, rate: number, times: number) {
  times = parseInt(String(times), 10);
  for (let i = 0; i < times; i++) {
    baseValue *= rate;
  }
  return parseFloat(baseValue.toFixed(2));
}
