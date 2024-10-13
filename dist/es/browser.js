import { isPlainObject } from './common.js';

/**
 * dom 选择器
 *
 * @param selector
 */
function $selector(selector) {
    if (!selector) {
        return null;
    }
    var type = selector.substring(0, 1);
    if (type === '#') {
        if (document.querySelector) {
            return document.querySelector(selector);
        }
    }
    else if (type === '.') {
        if (document.querySelectorAll) {
            return document.querySelectorAll(selector);
        }
        return document.getElementsByClassName(selector.substring(1));
    }
    else {
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
function hasClassName(elem, className) {
    if (elem) {
        return elem.className.trim().indexOf(className) > -1;
    }
    throw new Error("cannot find ".concat(elem, " element"));
}
/**
 * 给某个元素添加class
 *
 * @param elem
 * @param name
 */
function addClassName(elem, name) {
    if (!hasClassName(elem, name)) {
        var className = elem.className.trim();
        if (className) {
            elem.className += " ".concat(name);
        }
        else {
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
function deleteClassName(elem, name) {
    if (hasClassName(elem, name)) {
        var reg = new RegExp('(\\s|^)' + name + '(\\s|$)');
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
function replaceClassName(elem, newClassName, oldClassName) {
    deleteClassName(elem, oldClassName);
    addClassName(elem, newClassName);
}
/**
 * @description 判断是否有效 dom
 * @param dom
 */
function isValidDom(dom) {
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
function setDomStyle(selector, style) {
    if (style === void 0) { style = {}; }
    if (!selector) {
        return;
    }
    var dom = null;
    if (typeof selector === 'string') {
        dom = document.querySelector(selector);
    }
    else if (isValidDom(selector)) {
        dom = selector;
    }
    if (!isValidDom(dom)) {
        return;
    }
    Object.keys(style).forEach(function (key) {
        dom.style[key] = style[key];
    });
}
/**
 * 通过 dom 设置样式
 * @param selector
 * @param cssText
 */
function setDomListStyleCssText(selector, cssText) {
    var domList = $selector(selector);
    if (Array.isArray(domList)) {
        domList.forEach(function (domItem) {
            domItem.style.cssText = cssText;
        });
    }
}
/**
 * @description 通用设置属性
 * @param dom {HTMLElement}
 * @param attributes {Object}
 */
function setDomAttributes(dom, attributes) {
    if (attributes === void 0) { attributes = {}; }
    if (!dom) {
        return;
    }
    Object.keys(attributes).forEach(function (key) {
        dom[key] = attributes[key];
    });
}
/**
 * @description dom 添加类名
 * @param dom
 * @param className
 */
function domAddClassName(dom, className) {
    if (isValidDom(dom)) {
        dom.classList.add(className);
    }
}
/**
 * @description dom 删除类名
 * @param dom
 * @param className
 */
function domRemoveClassName(dom, className) {
    if (isValidDom(dom)) {
        dom.classList.remove(className);
    }
}
/**
 * @description 删除 dom
 * @param className
 */
function removeDom(className) {
    try {
        var childDomList = document.querySelectorAll(className.trim());
        for (var i = 0; i < childDomList.length; i++) {
            var childDom = childDomList[i];
            if (childDom.parentNode) {
                childDom.parentNode.removeChild(childDom);
            }
        }
    }
    catch (e) {
        console.log('e', e);
    }
}
/**
 * @description 检查 dom 包含哪个类名
 * @param dom
 * @param className
 */
function domIsContainsClassName(dom, className) {
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
function createElement(elem, attributes, style) {
    if (attributes === void 0) { attributes = {}; }
    if (style === void 0) { style = {}; }
    if (!elem) {
        return null;
    }
    var dom = document.createElement(elem);
    if (isPlainObject(attributes)) {
        setDomAttributes(dom, attributes);
    }
    if (isPlainObject(style)) {
        setDomStyle(dom, style);
    }
    return dom;
}

export { $selector, addClassName, createElement, deleteClassName, domAddClassName, domIsContainsClassName, domRemoveClassName, hasClassName, isValidDom, removeDom, replaceClassName, setDomAttributes, setDomListStyleCssText, setDomStyle };
//# sourceMappingURL=browser.js.map
