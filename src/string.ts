/**
 * 首字母大写
 *
 * @param word
 */
export function capitalize(word: string) {
  if (word) {
    return word.charAt(0).toUpperCase() + word.substr(1);
  }
  return word;
}

/**
 * 裁剪字符串左侧空格
 * @param val
 */
export function trimLeft(val: string): string {
  return val.replace(/^\s*/gi, '');
}

/**
 * 裁剪字符串右侧空格
 * @param val
 */
export function trimRight(val: string): string {
  return val.replace(/(\s*$)/gi, '');
}

/**
 * 裁剪字符串两侧空格
 * @param val
 */
export function trim(val: string): string {
  val = trimLeft(val);
  val = trimRight(val);
  return val;
}
