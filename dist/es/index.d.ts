declare const _default: {
    capitalize(word: string): string;
    trimLeft(val: string): string;
    trimRight(val: string): string;
    trim(val: string): string;
    isPhone(phone: any): boolean;
    isEmail(email: string): boolean;
    phoneRegexp: RegExp;
    emailRegexp: RegExp;
    stringNumberRegexp: RegExp;
    randomColor(needUpper?: boolean): string;
    randomNumber(minNumber?: number, maxNumber?: number, needInt?: boolean): number;
    randomString(maxLength?: number): string;
    deepGet(obj: {} | undefined, keys: string): Record<any, any> | null;
    divFloor(a: number, b: number): number;
    divCeil(a: number, b: number): number;
    power(baseValue: number, rate: number, times: number): number;
    convertUTCToLocal(date: number | string): Date;
    convertLocalToUTC(date: number | string): Date;
    CSVtoJSON(data?: string, delimiter?: string): {};
    JSONtoCSV(arr?: never[], columns?: never[], delimiter?: string): string;
    isBoolean(value: any): boolean;
    isNumber(value: any): boolean;
    isString(value: any): boolean;
    isUndefined(value: any): boolean;
    isNull(value: any): boolean;
    isSymbol(value: any): boolean;
    isNaN(value: any): boolean;
    isInt(value: any): boolean;
    isEven(value: any): boolean;
    isOdd(value: any): boolean;
    isPositiveNumber(value: any): boolean;
    isNegativeNumber(value: any): boolean;
    isBaseType(value: any): boolean;
    isMap(value: any): boolean;
    isWeakMap(value: any): boolean;
    isSet(value: any): boolean;
    isWeakSet(value: any): boolean;
    isArray(value: any): boolean;
    isEmptyArray(value: any): boolean;
    isPlainObject(value: any): boolean;
    isEmptyObject(value: any): boolean;
    isObject(value: any): boolean;
    isDate(value: any): boolean;
    isFunction(value: any): boolean;
    isValidDate(value: any): boolean;
    isError(value: any): boolean;
    isHTMLElement(element: any): boolean;
    isBrowser(): boolean;
    isNode(): boolean;
    isLeapYear(year: number): boolean;
    envMap: {
        isPC: boolean;
        isMobile: boolean;
        isAndroid: boolean;
        isIPhone: boolean;
        isIPad: boolean;
    };
    $selector(selector: string): HTMLElement | null | NodeListOf<Element>;
    hasClassName(elem: HTMLElement, className: string): boolean;
    addClassName(elem: HTMLElement, name: string): void;
    deleteClassName(elem: HTMLElement, name: string): void;
    replaceClassName(elem: HTMLElement, newClassName: string, oldClassName: string): void;
    isSpecificHTMLElement<T extends HTMLElement>(element: any, tagName: string): element is T;
    setStyle(selector: string | HTMLElement, style?: Record<string, string>): void;
    setStyleCssText(selector: string, cssText: string): void;
    setDomAttributes(dom: HTMLElement, attributes?: Record<string, any>): void;
    removeDom(className: string): void;
    createElement(elem: string, attributes?: Record<string, any>, style?: Record<string, string>): HTMLElement | null;
    removeLocalStorageByPrefix(prefix: string): void;
    safeGetLocalStorage(key: string): any;
    safeSetLocalStorage(key: string, value: any, removePrefix?: string): void;
    safeRemoveLocalStorage(key: string): void;
    arrayify(value: Array<any> | any): Array<any>;
    calculateArrayAverage(arr: Array<number> | Array<any>, field?: string): number;
    calculateArrayMaxValue(arr: Array<any>): number;
    calculateArrayMinValue(arr: Array<any>): number;
    calculateArraySum(arr: Array<number> | Array<any>, field?: string): any;
    compareArray(arr1: Array<any>, arr2: Array<any>): boolean;
    differenceSet<T>(arr1: Array<T>, arr2: Array<T>): Array<T>;
    intersection<T>(arr1: Array<T>, arr2: Array<T>): Array<T>;
    union<T>(arr1: Array<T>, arr2: Array<T>): Array<T>;
    findDuplicateElements<T>(arr: Array<T>): Array<T>;
    mergeTwoArray<T>(arr1: Array<T>, arr2: Array<T>, removeRepetition?: boolean): Array<T>;
    flattenArray<T = any>(arr: Array<T>, childrenKey?: string): Array<T>;
    unique(arr: any[]): any[];
    transformListToMap<T>(list: Array<T>, field: string): Record<any, any>;
};
export default _default;
