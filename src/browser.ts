import { isPlainObject } from './common';

/**
 * dom 选择器
 *
 * @param selector
 */
export function $selector(selector: string) {
  if (!selector) {
    return null;
  }

  const type = selector.substring(0, 1);
  if (type === '#') {
    if (document.querySelector) {
      return document.querySelector(selector);
    }
  } else if (type === '.') {
    if (document.querySelectorAll) {
      return document.querySelectorAll(selector);
    }
    return document.getElementsByClassName(selector.substring(1));
  } else {
    if (document.querySelectorAll) {
      return document.querySelectorAll(selector);
    }
    return document.getElementsByTagName(selector);
  }
}

/**
 * 判断元素是否有某个class
 *
 * @param elem
 * @param className
 */
export function hasClassName(elem: HTMLElement, className: string) {
  if (elem) {
    return elem.className.trim().indexOf(className) > -1;
  }
  throw new Error(`cannot find ${elem} element`);
}

/**
 * 给某个元素添加class
 *
 * @param elem
 * @param name
 */
export function addClassName(elem: HTMLElement, name: string) {
  if (!hasClassName(elem, name)) {
    const className = elem.className.trim();
    if (className) {
      elem.className += ` ${name}`;
    } else {
      elem.className += name;
    }
  }
}

/**
 * 删除某个元素的class
 *
 * @param elem
 * @param name
 */
export function deleteClassName(elem: HTMLElement, name: string) {
  if (hasClassName(elem, name)) {
    const reg = new RegExp('(\\s|^)' + name + '(\\s|$)');
    elem.className = elem.className.replace(reg, ' ').trim();
  }
}

/**
 * 替换某个元素的class
 *
 * @param elem
 * @param newClassName
 * @param oldClassName
 */
export function replaceClassName(elem: HTMLElement, newClassName: string, oldClassName: string) {
  deleteClassName(elem, oldClassName);
  addClassName(elem, newClassName);
}

/**
 * @description 判断是否有效 dom
 * @param dom
 */
export function isValidDom(dom: any) {
  if (!dom) {
    return false;
  }

  if (Array.isArray(dom)) {
    return dom;
  }

  if (typeof HTMLElement === 'object') {
    return dom instanceof HTMLElement;
  }
  return dom && typeof dom === 'object' && dom.nodeType === 1 && typeof dom.nodeName === 'string';
}

/**
 * @description 通用设置样式
 * @param selector {string | HTMLElement}
 * @param style {Object}
 */
export function setDomStyle(selector: any, style: any = {}) {
  if (!selector) {
    return;
  }

  let dom: any = null;
  if (typeof selector === 'string') {
    dom = document.querySelector(selector);
  } else if (isValidDom(selector)) {
    dom = selector;
  }

  if (!isValidDom(dom)) {
    return;
  }

  Object.keys(style).forEach((key) => {
    dom.style[key] = style[key];
  });
}

/**
 * 通过 dom 设置样式
 * @param selector
 * @param cssText
 */
export function setDomListStyleCssText(selector: any, cssText: string) {
  const domList = $selector(selector);
  if (Array.isArray(domList)) {
    domList.forEach((domItem: any) => {
      domItem.style.cssText = cssText;
    });
  }
}

/**
 * @description 通用设置属性
 * @param dom {HTMLElement}
 * @param attributes {Object}
 */
export function setDomAttributes(dom: any, attributes: any = {}) {
  if (!dom) {
    return;
  }
  Object.keys(attributes).forEach((key) => {
    dom[key] = attributes[key];
  });
}

/**
 * @description dom 添加类名
 * @param dom
 * @param className
 */
export function domAddClassName(dom: any, className: string) {
  if (isValidDom(dom)) {
    dom.classList.add(className);
  }
}

/**
 * @description dom 删除类名
 * @param dom
 * @param className
 */
export function domRemoveClassName(dom: any, className: string) {
  if (isValidDom(dom)) {
    dom.classList.remove(className);
  }
}

/**
 * @description 删除 dom
 * @param className
 */
export function removeDom(className: string) {
  try {
    const childDomList = document.querySelectorAll(className.trim());
    for (let i = 0; i < childDomList.length; i++) {
      const childDom = childDomList[i];
      if (childDom.parentNode) {
        childDom.parentNode.removeChild(childDom);
      }
    }
  } catch (e) {
    console.log('e', e);
  }
}

/**
 * @description 检查 dom 包含哪个类名
 * @param dom
 * @param className
 */
export function domIsContainsClassName(dom: any, className: string) {
  if (isValidDom(dom)) {
    return dom.classList.contains(className);
  }
  return false;
}

/**
 * @description 创建 dom
 * @param elem {string}
 * @param attributes {Object}
 * @param style {Object}
 */
export function createElement(elem: any, attributes: object = {}, style: object = {}) {
  if (!elem) {
    return null;
  }

  const dom = document.createElement(elem);

  if (isPlainObject(attributes)) {
    setDomAttributes(dom, attributes);
  }

  if (isPlainObject(style)) {
    setDomStyle(dom, style);
  }

  return dom;
}
