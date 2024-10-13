// 随机颜色 16 进制
export function randomColor(needUpper: boolean = true): string {
  const str = '#' + Math.random().toString(16).slice(2, 8);
  if (needUpper) {
    return str.toUpperCase();
  }
  return str;
}

// 随机区间数字
export function randomNumber(
  minNumber: number = 0,
  maxNumber: number = 10000,
  needInt: boolean = true,
) {
  const res = Math.random() * (maxNumber - minNumber + 1) + minNumber;
  return needInt ? parseInt(res.toString(), 10) : res;
}

// 随机字符串
export function randomString(maxLength = 16): string {
  let str = '';
  while (str.length <= maxLength) {
    str += Math.random().toString(32).substr(2).toUpperCase();
  }
  return str;
}
