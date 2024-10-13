import { isBrowser, isPlainObject } from './common';

/**
 * DOM 选择器
 *
 * @param {string} selector - 选择器字符串，支持 ID、类名和标签名。
 * @returns {HTMLElement | NodeList | null} 返回匹配的单个元素、NodeList 或 null。
 */
export function $selector(selector: string): HTMLElement | null | NodeListOf<Element> {
  if (!selector) {
    return null;
  }
  
  // 使用 querySelector 或 querySelectorAll
  // @ts-ignore
  return selector.startsWith('#')
    ? document.querySelector(selector) // 返回单一元素
    : document.querySelectorAll(selector); // 返回 NodeList
}

/**
 * 判断元素是否有某个 class
 *
 * @param {HTMLElement} elem - 要检查的元素。
 * @param {string} className - 要检查的类名。
 * @returns {boolean} 如果元素具有指定的类名，则返回 true；否则返回 false。
 * @throws {Error} 如果未找到元素，则抛出错误。
 */
export function hasClassName(elem: HTMLElement, className: string): boolean {
  if (!elem) throw new Error(`cannot find ${elem} element`);
  return elem.classList.contains(className);
}

/**
 * 给某个元素添加 class
 *
 * @param {HTMLElement} elem - 要添加类名的元素。
 * @param {string} name - 要添加的类名。
 */
export function addClassName(elem: HTMLElement, name: string): void {
  if (!hasClassName(elem, name)) {
    elem.classList.add(name);
  }
}

/**
 * 删除某个元素的 class
 *
 * @param {HTMLElement} elem - 要删除类名的元素。
 * @param {string} name - 要删除的类名。
 */
export function deleteClassName(elem: HTMLElement, name: string): void {
  if (hasClassName(elem, name)) {
    elem.classList.remove(name);
  }
}

/**
 * 替换某个元素的 class
 *
 * @param {HTMLElement} elem - 要操作的元素。
 * @param {string} newClassName - 要添加的新类名。
 * @param {string} oldClassName - 要删除的旧类名。
 */
export function replaceClassName(elem: HTMLElement, newClassName: string, oldClassName: string): void {
  deleteClassName(elem, oldClassName);
  addClassName(elem, newClassName);
}

/**
 * 判断是否有效 HTML Element
 *
 * @param {any} dom - 要检查的对象。
 * @returns {boolean} 如果是有效的 HTML Element，则返回 true；否则返回 false。
 */
export function isHTMLElement(dom: any): dom is HTMLElement {
  return dom instanceof HTMLElement;
}

/**
 * 判断是否是指定的 HTMLElement
 *
 * @param {any} element - 要检查的对象。
 * @param {string} tagName - 要匹配的标签名。
 * @returns {boolean} 如果元素是指定的 HTML Element，则返回 true；否则返回 false。
 */
export function isSpecificHTMLElement<T extends HTMLElement>(element: any, tagName: string): element is T {
  return isHTMLElement(element) && element.tagName.toLowerCase() === tagName.toLowerCase();
}

/**
 * 通用设置样式
 *
 * @param {string | HTMLElement} selector - 选择器字符串或 HTML 元素。
 * @param {Record<string, string>} [style={}] - 要设置的样式对象，格式为 { 'key': 'value' }。
 */
export function setStyle(selector: string | HTMLElement, style: Record<string, string> = {}): void {
  if (!selector) {
    return;
  }
  
  const dom = typeof selector === 'string' ? document.querySelector(selector) : isHTMLElement(selector) ? selector : null;
  
  // 如果没有找到有效的 HTML 元素，则返回
  if (!isHTMLElement(dom)) return;
  
  // 设置样式
  Object.entries(style).forEach(([key, value]) => {
    (dom.style as any)[key] = value; // 消除 TypeScript 类型警告
  });
}

/**
 * 通过 DOM 设置样式
 *
 * @param {string} selector - 选择器字符串，选择要设置样式的元素。
 * @param {string} cssText - 要应用的 CSS 样式文本。
 */
export function setStyleCssText(selector: string, cssText: string): void {
  const domList = $selector(selector);
  if (Array.isArray(domList)) {
    domList.forEach((domItem: HTMLElement) => {
      domItem.style.cssText = cssText;
    });
  }
}

/**
 * 通用设置属性
 *
 * @param {HTMLElement} dom - 要设置属性的元素。
 * @param {Record<string, any>} [attributes={}] - 属性对象，格式为 { 'key': 'value' }。
 */
export function setDomAttributes(dom: HTMLElement, attributes: Record<string, any> = {}): void {
  if (!dom) {
    return;
  }
  
  Object.entries(attributes).forEach(([key, value]) => {
    dom.setAttribute(key, value);
  });
}

/**
 * 删除 DOM
 *
 * @param {string} className - 选择器字符串，表示要删除的元素的类名。
 */
export function removeDom(className: string): void {
  try {
    const childDomList = document.querySelectorAll(className.trim());
    childDomList.forEach((childDom) => {
      if (childDom.parentNode) {
        childDom.parentNode.removeChild(childDom);
      }
    });
  } catch (e) {
    console.log('e', e);
  }
}

/**
 * 创建 DOM
 *
 * @param {string} elem - 要创建的元素的标签名。
 * @param {Record<string, any>} [attributes={}] - 要设置的属性对象，格式为 { 'key': 'value' }。
 * @param {Record<string, string>} [style={}] - 要设置的样式对象，格式为 { 'key': 'value' }。
 * @returns {HTMLElement | null} 返回创建的元素或 null。
 */
export function createElement(elem: string, attributes: Record<string, any> = {}, style: Record<string, string> = {}): HTMLElement | null {
  if (!elem) {
    return null;
  }
  
  const dom = document.createElement(elem);
  
  if (isPlainObject(attributes)) {
    setDomAttributes(dom, attributes);
  }
  
  if (isPlainObject(style)) {
    setStyle(dom, style);
  }
  
  return dom;
}

/**
 * 删除 localStorage 里以某个前缀开头的数据
 *
 * @param {string} prefix - 要删除的前缀。
 */
export function removeLocalStorageByPrefix(prefix: string): void {
  try {
    if (!isBrowser()) {
      Object.keys(localStorage)
        .filter((key) => key.startsWith(prefix))
        .forEach((key) => {
          safeRemoveLocalStorage(key);
        });
    }
  } catch (err) {
    console.error(err);
  }
}

/**
 * 安全的获取 localStorage
 *
 * @param {string} key - 要获取的键。
 * @returns {any} 返回解析后的值，如果解析失败则返回原始字符串。
 */
export function safeGetLocalStorage(key: string): any {
  const value = localStorage.getItem(key) || '';
  try {
    return JSON.parse(value);
  } catch (error) {
    console.error(error);
    return value; // 返回原始字符串
  }
}

/**
 * 安全的设置 localStorage
 *
 * @param {string} key - 要设置的键。
 * @param {any} value - 要设置的值，可以是对象或其他类型。
 * @param {string} [removePrefix=''] - 如果设置失败，删除的前缀。
 */
export function safeSetLocalStorage(key: string, value: any, removePrefix: string = ''): void {
  try {
    const finalValue = typeof value === 'object' ? JSON.stringify(value) : value;
    localStorage.setItem(key, finalValue);
  } catch (error) {
    console.error(error);
    if (removePrefix) {
      removeLocalStorageByPrefix(removePrefix);
      localStorage.setItem(key, value);
    }
  }
}

/**
 * 安全的删除 localStorage
 *
 * @param {string} key - 要删除的键。
 */
export function safeRemoveLocalStorage(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(error);
  }
}
