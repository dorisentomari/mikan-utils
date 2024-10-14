import { isPlainObject } from './common.js';

/**
 * DOM 选择器
 *
 * @param {string | HTMLElement} selector - 选择器字符串，支持 ID、类名、标签名，或直接传入 HTMLElement。
 * @returns {HTMLElement | NodeList | null} 返回匹配的单个元素、NodeList 或 null。
 *
 * @example
 * ```typescript
 * const element = $selector('#app');
 * const listItems = $selector('.list-item');
 * ```
 */
function $selector(selector) {
    if (!selector) {
        return null;
    }
    if (isHTMLElement(selector)) {
        return selector;
    }
    if (selector.startsWith('#')) {
        // @ts-ignore
        return document.querySelector(selector);
    }
    else {
        return document.querySelectorAll(selector);
    }
}
/**
 * 判断元素是否有某个 class
 *
 * @param {HTMLElement} elem - 要检查的 HTML 元素。
 * @param {string} className - 要检查的类名。
 * @returns {boolean} 如果元素具有指定的类名，则返回 true；否则返回 false。
 * @throws {Error} 如果未找到元素，则抛出错误。
 *
 * @example
 * ```typescript
 * const hasClass = hasClassName(element, 'active');
 * ```
 */
function hasClassName(elem, className) {
    if (!elem) {
        throw new Error("Cannot find ".concat(elem, " element"));
    }
    return elem.classList.contains(className);
}
/**
 * 给某个元素添加 class
 *
 * @param {HTMLElement} elem - 要添加类名的 HTML 元素。
 * @param {string} name - 要添加的类名。
 *
 * @example
 * ```typescript
 * addClassName(element, 'active');
 * ```
 */
function addClassName(elem, name) {
    if (!hasClassName(elem, name)) {
        elem.classList.add(name);
    }
}
/**
 * 删除某个元素的 class
 *
 * @param {HTMLElement} elem - 要删除类名的 HTML 元素。
 * @param {string} name - 要删除的类名。
 *
 * @example
 * ```typescript
 * deleteClassName(element, 'active');
 * ```
 */
function deleteClassName(elem, name) {
    if (hasClassName(elem, name)) {
        elem.classList.remove(name);
    }
}
/**
 * 替换某个元素的 class
 *
 * @param {HTMLElement} elem - 要操作的 HTML 元素。
 * @param {string} newClassName - 要添加的新类名。
 * @param {string} oldClassName - 要删除的旧类名。
 *
 * @example
 * ```typescript
 * replaceClassName(element, 'new-class', 'old-class');
 * ```
 */
function replaceClassName(elem, newClassName, oldClassName) {
    deleteClassName(elem, oldClassName);
    addClassName(elem, newClassName);
}
/**
 * 判断是否为有效的 HTML 元素
 *
 * @param {any} dom - 要检查的对象。
 * @returns {boolean} 如果是有效的 HTML 元素，则返回 true；否则返回 false。
 *
 * @example
 * ```typescript
 * const isElem = isHTMLElement(someVar);
 * ```
 */
function isHTMLElement(dom) {
    return dom instanceof HTMLElement;
}
/**
 * 判断是否为指定的 HTMLElement 标签
 *
 * @template T - 元素类型。
 * @param {any} element - 要检查的对象。
 * @param {string} tagName - 要匹配的标签名。
 * @returns {boolean} 如果元素是指定的 HTML 标签，则返回 true；否则返回 false。
 *
 * @example
 * ```typescript
 * const isDiv = isSpecificHTMLElement<HTMLDivElement>(element, 'div');
 * ```
 */
function isSpecificHTMLElement(element, tagName) {
    return isHTMLElement(element) && element.tagName.toLowerCase() === tagName.toLowerCase();
}
/**
 * 设置元素样式
 *
 * @param {string | HTMLElement} selector - 选择器字符串或 HTML 元素。
 * @param {Record<string, string>} [style={}] - 样式对象，格式为 { 'key': 'value' }。
 *
 * @example
 * ```typescript
 * setStyle('#app', { color: 'red', fontSize: '16px' });
 * ```
 */
function setStyle(selector, style) {
    if (style === void 0) { style = {}; }
    var dom = $selector(selector);
    if (!isHTMLElement(dom)) {
        return;
    }
    Object.entries(style).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        dom.style[key] = value; // 使用 as any 消除类型警告
    });
}
/**
 * 设置元素属性
 *
 * @param {string | HTMLElement} selector - 选择器字符串或 HTML 元素。
 * @param {Record<string, any>} [attributes={}] - 属性对象，格式为 { 'key': 'value' }。
 *
 * @example
 * ```typescript
 * setDomAttributes('#app', { id: 'newId', 'data-custom': 'value' });
 * ```
 */
function setDomAttributes(selector, attributes) {
    if (attributes === void 0) { attributes = {}; }
    var dom = $selector(selector);
    if (!isHTMLElement(dom)) {
        return;
    }
    Object.entries(attributes).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        dom.setAttribute(key, value);
    });
}
/**
 * 删除 DOM 元素
 *
 * @param {string | HTMLElement} selector - 选择器字符串或 HTML 元素，表示要删除的元素。
 *
 * @example
 * ```typescript
 * removeDom('#app');
 * ```
 */
function removeDom(selector) {
    var dom = $selector(selector);
    if (!dom) {
        return; // 如果没有找到元素，直接返回
    }
    // 处理 NodeList 或者单个元素
    var elements = dom instanceof NodeList ? Array.from(dom) : [dom];
    elements.forEach(function (item) {
        if (item.parentNode) {
            item.parentNode.removeChild(item);
        }
    });
}
/**
 * 创建 DOM 元素
 *
 * @param {string} elem - 要创建的元素标签名。
 * @param {Record<string, any>} [attributes={}] - 要设置的属性对象，格式为 { 'key': 'value' }。
 * @param {Record<string, string>} [style={}] - 要设置的样式对象，格式为 { 'key': 'value' }。
 * @returns {HTMLElement | null} 返回创建的元素，或 null。
 *
 * @example
 * ```typescript
 * const newElem = createElement('div', { id: 'newDiv' }, { color: 'red' });
 * ```
 */
function createElement(elem, attributes, style) {
    if (attributes === void 0) { attributes = {}; }
    if (style === void 0) { style = {}; }
    if (!elem) {
        throw new Error('Element name is required');
    }
    var dom = document.createElement(elem);
    if (isPlainObject(attributes)) {
        setDomAttributes(dom, attributes);
    }
    if (isPlainObject(style)) {
        setStyle(dom, style);
    }
    return dom;
}
/**
 * 安全获取 localStorage 中的值
 *
 * @param {string} key - 要获取的键。
 * @returns {any} 返回解析后的值，如果解析失败，则返回原始字符串。
 *
 * @example
 * ```typescript
 * const data = safeGetLocalStorage('key');
 * ```
 */
function safeGetLocalStorage(key) {
    var value = localStorage.getItem(key);
    try {
        if (typeof value === 'string') {
            // 先检查字符串是否符合 JSON 格式
            return value.startsWith('{') || value.startsWith('[') ? JSON.parse(value) : value;
        }
        return value;
    }
    catch (error) {
        return value; // 返回原始字符串
    }
}
/**
 * 安全设置 localStorage 的值
 *
 * @param {string} key - 要设置的键。
 * @param {any} value - 要设置的值，可以是对象、数组或原始类型。
 *
 * @example
 * ```typescript
 * safeSetLocalStorage('key', { a: 1 });
 * ```
 */
function safeSetLocalStorage(key, value) {
    var finalValue = (Array.isArray(value) || isPlainObject(value)) ? JSON.stringify(value) : value;
    localStorage.setItem(key, finalValue);
}
/**
 * 安全删除 localStorage 中的键
 *
 * @param {string} key - 要删除的键。
 *
 * @example
 * ```typescript
 * safeRemoveLocalStorage('key');
 * ```
 */
function safeRemoveLocalStorage(key) {
    localStorage.removeItem(key);
}

export { $selector, addClassName, createElement, deleteClassName, hasClassName, isHTMLElement, isSpecificHTMLElement, removeDom, replaceClassName, safeGetLocalStorage, safeRemoveLocalStorage, safeSetLocalStorage, setDomAttributes, setStyle };
//# sourceMappingURL=browser.js.map
