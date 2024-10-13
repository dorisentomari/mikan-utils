/**
 * DOM 选择器
 *
 * @param {string} selector - 选择器字符串，支持 ID、类名和标签名。
 * @returns {HTMLElement | NodeList | null} 返回匹配的单个元素、NodeList 或 null。
 */
export declare function $selector(selector: string): HTMLElement | null | NodeListOf<Element>;
/**
 * 判断元素是否有某个 class
 *
 * @param {HTMLElement} elem - 要检查的元素。
 * @param {string} className - 要检查的类名。
 * @returns {boolean} 如果元素具有指定的类名，则返回 true；否则返回 false。
 * @throws {Error} 如果未找到元素，则抛出错误。
 */
export declare function hasClassName(elem: HTMLElement, className: string): boolean;
/**
 * 给某个元素添加 class
 *
 * @param {HTMLElement} elem - 要添加类名的元素。
 * @param {string} name - 要添加的类名。
 */
export declare function addClassName(elem: HTMLElement, name: string): void;
/**
 * 删除某个元素的 class
 *
 * @param {HTMLElement} elem - 要删除类名的元素。
 * @param {string} name - 要删除的类名。
 */
export declare function deleteClassName(elem: HTMLElement, name: string): void;
/**
 * 替换某个元素的 class
 *
 * @param {HTMLElement} elem - 要操作的元素。
 * @param {string} newClassName - 要添加的新类名。
 * @param {string} oldClassName - 要删除的旧类名。
 */
export declare function replaceClassName(elem: HTMLElement, newClassName: string, oldClassName: string): void;
/**
 * 判断是否有效 HTML Element
 *
 * @param {any} dom - 要检查的对象。
 * @returns {boolean} 如果是有效的 HTML Element，则返回 true；否则返回 false。
 */
export declare function isHTMLElement(dom: any): dom is HTMLElement;
/**
 * 判断是否是指定的 HTMLElement
 *
 * @param {any} element - 要检查的对象。
 * @param {string} tagName - 要匹配的标签名。
 * @returns {boolean} 如果元素是指定的 HTML Element，则返回 true；否则返回 false。
 */
export declare function isSpecificHTMLElement<T extends HTMLElement>(element: any, tagName: string): element is T;
/**
 * 通用设置样式
 *
 * @param {string | HTMLElement} selector - 选择器字符串或 HTML 元素。
 * @param {Record<string, string>} [style={}] - 要设置的样式对象，格式为 { 'key': 'value' }。
 */
export declare function setStyle(selector: string | HTMLElement, style?: Record<string, string>): void;
/**
 * 通过 DOM 设置样式
 *
 * @param {string} selector - 选择器字符串，选择要设置样式的元素。
 * @param {string} cssText - 要应用的 CSS 样式文本。
 */
export declare function setStyleCssText(selector: string, cssText: string): void;
/**
 * 通用设置属性
 *
 * @param {HTMLElement} dom - 要设置属性的元素。
 * @param {Record<string, any>} [attributes={}] - 属性对象，格式为 { 'key': 'value' }。
 */
export declare function setDomAttributes(dom: HTMLElement, attributes?: Record<string, any>): void;
/**
 * 删除 DOM
 *
 * @param {string} className - 选择器字符串，表示要删除的元素的类名。
 */
export declare function removeDom(className: string): void;
/**
 * 创建 DOM
 *
 * @param {string} elem - 要创建的元素的标签名。
 * @param {Record<string, any>} [attributes={}] - 要设置的属性对象，格式为 { 'key': 'value' }。
 * @param {Record<string, string>} [style={}] - 要设置的样式对象，格式为 { 'key': 'value' }。
 * @returns {HTMLElement | null} 返回创建的元素或 null。
 */
export declare function createElement(elem: string, attributes?: Record<string, any>, style?: Record<string, string>): HTMLElement | null;
/**
 * 删除 localStorage 里以某个前缀开头的数据
 *
 * @param {string} prefix - 要删除的前缀。
 */
export declare function removeLocalStorageByPrefix(prefix: string): void;
/**
 * 安全的获取 localStorage
 *
 * @param {string} key - 要获取的键。
 * @returns {any} 返回解析后的值，如果解析失败则返回原始字符串。
 */
export declare function safeGetLocalStorage(key: string): any;
/**
 * 安全的设置 localStorage
 *
 * @param {string} key - 要设置的键。
 * @param {any} value - 要设置的值，可以是对象或其他类型。
 * @param {string} [removePrefix=''] - 如果设置失败，删除的前缀。
 */
export declare function safeSetLocalStorage(key: string, value: any, removePrefix?: string): void;
/**
 * 安全的删除 localStorage
 *
 * @param {string} key - 要删除的键。
 */
export declare function safeRemoveLocalStorage(key: string): void;
