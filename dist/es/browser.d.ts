/**
 * dom 选择器
 *
 * @param selector
 */
export declare function $selector(selector: string): Element | NodeListOf<Element> | HTMLCollectionOf<Element> | null | undefined;
/**
 * 判断元素是否有某个class
 *
 * @param elem
 * @param className
 */
export declare function hasClassName(elem: HTMLElement, className: string): boolean;
/**
 * 给某个元素添加class
 *
 * @param elem
 * @param name
 */
export declare function addClassName(elem: HTMLElement, name: string): void;
/**
 * 删除某个元素的class
 *
 * @param elem
 * @param name
 */
export declare function deleteClassName(elem: HTMLElement, name: string): void;
/**
 * 替换某个元素的class
 *
 * @param elem
 * @param newClassName
 * @param oldClassName
 */
export declare function replaceClassName(elem: HTMLElement, newClassName: string, oldClassName: string): void;
/**
 * @description 判断是否有效 dom
 * @param dom
 */
export declare function isValidDom(dom: any): any;
/**
 * @description 通用设置样式
 * @param selector {string | HTMLElement}
 * @param style {Object}
 */
export declare function setDomStyle(selector: any, style?: any): void;
/**
 * 通过 dom 设置样式
 * @param selector
 * @param cssText
 */
export declare function setDomListStyleCssText(selector: any, cssText: string): void;
/**
 * @description 通用设置属性
 * @param dom {HTMLElement}
 * @param attributes {Object}
 */
export declare function setDomAttributes(dom: any, attributes?: any): void;
/**
 * @description dom 添加类名
 * @param dom
 * @param className
 */
export declare function domAddClassName(dom: any, className: string): void;
/**
 * @description dom 删除类名
 * @param dom
 * @param className
 */
export declare function domRemoveClassName(dom: any, className: string): void;
/**
 * @description 删除 dom
 * @param className
 */
export declare function removeDom(className: string): void;
/**
 * @description 检查 dom 包含哪个类名
 * @param dom
 * @param className
 */
export declare function domIsContainsClassName(dom: any, className: string): any;
/**
 * @description 创建 dom
 * @param elem {string}
 * @param attributes {Object}
 * @param style {Object}
 */
export declare function createElement(elem: any, attributes?: object, style?: object): any;
