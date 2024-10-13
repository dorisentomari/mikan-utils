import { isBoolean, isNumber, isString, isUndefined, isNull, isSymbol, isNaN, isInt, isEven, isOdd, isPositiveNumber, isNegativeNumber, isBaseType, isMap, isWeakMap, isSet, isWeakSet, isArray, isEmptyArray, isPlainObject, isEmptyObject, isObject, isDate, isFunction, isValidDate, isError, isHTMLElement, isLeapYear } from '../common';
export declare const isMockData: {
    isBoolean: {
        method: typeof isBoolean;
        data: ({
            value: string;
            result: boolean;
        } | {
            value: number;
            result: boolean;
        } | {
            value: {};
            result: boolean;
        } | {
            value: never[];
            result: boolean;
        } | {
            value: symbol;
            result: boolean;
        } | {
            value: WeakSet<object>;
            result: boolean;
        } | {
            value: WeakMap<object, any>;
            result: boolean;
        } | {
            value: boolean;
            result: boolean;
        })[];
    };
    isNumber: {
        method: typeof isNumber;
        data: ({
            value: string;
            result: boolean;
        } | {
            value: undefined;
            result: boolean;
        } | {
            value: null;
            result: boolean;
        } | {
            value: symbol;
            result: boolean;
        } | {
            value: number;
            result: boolean;
        } | {
            value: {};
            result: boolean;
        } | {
            value: never[];
            result: boolean;
        } | {
            value: WeakSet<object>;
            result: boolean;
        } | {
            value: WeakMap<object, any>;
            result: boolean;
        } | {
            value: boolean;
            result: boolean;
        })[];
    };
    isString: {
        method: typeof isString;
        data: ({
            value: string;
            result: boolean;
        } | {
            value: undefined;
            result: boolean;
        } | {
            value: null;
            result: boolean;
        } | {
            value: number;
            result: boolean;
        } | {
            value: {};
            result: boolean;
        } | {
            value: never[];
            result: boolean;
        } | {
            value: WeakSet<object>;
            result: boolean;
        } | {
            value: WeakMap<object, any>;
            result: boolean;
        } | {
            value: boolean;
            result: boolean;
        })[];
    };
    isUndefined: {
        method: typeof isUndefined;
        data: ({
            value: string;
            result: boolean;
        } | {
            value: undefined;
            result: boolean;
        } | {
            value: null;
            result: boolean;
        } | {
            value: symbol;
            result: boolean;
        } | {
            value: number;
            result: boolean;
        } | {
            value: {};
            result: boolean;
        } | {
            value: never[];
            result: boolean;
        } | {
            value: WeakSet<object>;
            result: boolean;
        } | {
            value: WeakMap<object, any>;
            result: boolean;
        } | {
            value: boolean;
            result: boolean;
        })[];
    };
    isNull: {
        method: typeof isNull;
        data: ({
            value: string;
            result: boolean;
        } | {
            value: undefined;
            result: boolean;
        } | {
            value: null;
            result: boolean;
        } | {
            value: number;
            result: boolean;
        } | {
            value: {};
            result: boolean;
        } | {
            value: never[];
            result: boolean;
        } | {
            value: WeakSet<object>;
            result: boolean;
        } | {
            value: WeakMap<object, any>;
            result: boolean;
        } | {
            value: boolean;
            result: boolean;
        })[];
    };
    isSymbol: {
        method: typeof isSymbol;
        data: ({
            value: string;
            result: boolean;
        } | {
            value: undefined;
            result: boolean;
        } | {
            value: null;
            result: boolean;
        } | {
            value: number;
            result: boolean;
        } | {
            value: symbol;
            result: boolean;
        } | {
            value: {};
            result: boolean;
        } | {
            value: never[];
            result: boolean;
        } | {
            value: WeakSet<object>;
            result: boolean;
        } | {
            value: WeakMap<object, any>;
            result: boolean;
        } | {
            value: boolean;
            result: boolean;
        })[];
    };
    isNaN: {
        method: typeof isNaN;
        data: {
            value: number;
            result: boolean;
        }[];
    };
    isInt: {
        method: typeof isInt;
        data: {
            value: number;
            result: boolean;
        }[];
    };
    isEven: {
        method: typeof isEven;
        data: {
            value: number;
            result: boolean;
        }[];
    };
    isOdd: {
        method: typeof isOdd;
        data: {
            value: number;
            result: boolean;
        }[];
    };
    isPositiveNumber: {
        method: typeof isPositiveNumber;
        data: {
            value: number;
            result: boolean;
        }[];
    };
    isNegativeNumber: {
        method: typeof isNegativeNumber;
        data: {
            value: number;
            result: boolean;
        }[];
    };
    isBaseType: {
        method: typeof isBaseType;
        data: ({
            value: number;
            result: boolean;
        } | {
            value: string;
            result: boolean;
        } | {
            value: undefined;
            result: boolean;
        } | {
            value: null;
            result: boolean;
        } | {
            value: boolean;
            result: boolean;
        } | {
            value: never[];
            result: boolean;
        } | {
            value: {};
            result: boolean;
        } | {
            value: WeakMap<object, any>;
            result: boolean;
        } | {
            value: WeakSet<object>;
            result: boolean;
        } | {
            value: Date;
            result: boolean;
        } | {
            value: RegExp;
            result: boolean;
        } | {
            value: Function;
            result: boolean;
        } | {
            value: Error;
            result: boolean;
        })[];
    };
    isMap: {
        method: typeof isMap;
        data: ({
            value: string;
            result: boolean;
        } | {
            value: number;
            result: boolean;
        } | {
            value: {};
            result: boolean;
        } | {
            value: never[];
            result: boolean;
        } | {
            value: symbol;
            result: boolean;
        } | {
            value: WeakSet<object>;
            result: boolean;
        } | {
            value: WeakMap<object, any>;
            result: boolean;
        } | {
            value: boolean;
            result: boolean;
        })[];
    };
    isWeakMap: {
        method: typeof isWeakMap;
        data: ({
            value: string;
            result: boolean;
        } | {
            value: number;
            result: boolean;
        } | {
            value: {};
            result: boolean;
        } | {
            value: never[];
            result: boolean;
        } | {
            value: symbol;
            result: boolean;
        } | {
            value: WeakSet<object>;
            result: boolean;
        } | {
            value: WeakMap<object, any>;
            result: boolean;
        } | {
            value: boolean;
            result: boolean;
        })[];
    };
    isSet: {
        method: typeof isSet;
        data: ({
            value: string;
            result: boolean;
        } | {
            value: number;
            result: boolean;
        } | {
            value: {};
            result: boolean;
        } | {
            value: never[];
            result: boolean;
        } | {
            value: symbol;
            result: boolean;
        } | {
            value: WeakSet<object>;
            result: boolean;
        } | {
            value: WeakMap<object, any>;
            result: boolean;
        } | {
            value: boolean;
            result: boolean;
        })[];
    };
    isWeakSet: {
        method: typeof isWeakSet;
        data: ({
            value: string;
            result: boolean;
        } | {
            value: number;
            result: boolean;
        } | {
            value: {};
            result: boolean;
        } | {
            value: never[];
            result: boolean;
        } | {
            value: symbol;
            result: boolean;
        } | {
            value: WeakSet<object>;
            result: boolean;
        } | {
            value: WeakMap<object, any>;
            result: boolean;
        } | {
            value: boolean;
            result: boolean;
        })[];
    };
    isArray: {
        method: typeof isArray;
        data: ({
            value: string;
            result: boolean;
        } | {
            value: number;
            result: boolean;
        } | {
            value: {};
            result: boolean;
        } | {
            value: number[];
            result: boolean;
        } | {
            value: symbol;
            result: boolean;
        } | {
            value: WeakSet<object>;
            result: boolean;
        } | {
            value: WeakMap<object, any>;
            result: boolean;
        } | {
            value: boolean;
            result: boolean;
        })[];
    };
    isEmptyArray: {
        method: typeof isEmptyArray;
        data: ({
            value: string;
            result: boolean;
        } | {
            value: number;
            result: boolean;
        } | {
            value: {};
            result: boolean;
        } | {
            value: number[];
            result: boolean;
        } | {
            value: symbol;
            result: boolean;
        } | {
            value: WeakSet<object>;
            result: boolean;
        } | {
            value: WeakMap<object, any>;
            result: boolean;
        } | {
            value: boolean;
            result: boolean;
        })[];
    };
    isPlainObject: {
        method: typeof isPlainObject;
        data: ({
            value: string;
            result: boolean;
        } | {
            value: number;
            result: boolean;
        } | {
            value: {
                name?: undefined;
            };
            result: boolean;
        } | {
            value: {
                name: string;
            };
            result: boolean;
        } | {
            value: never[];
            result: boolean;
        } | {
            value: symbol;
            result: boolean;
        } | {
            value: WeakSet<object>;
            result: boolean;
        } | {
            value: WeakMap<object, any>;
            result: boolean;
        } | {
            value: boolean;
            result: boolean;
        })[];
    };
    isEmptyObject: {
        method: typeof isEmptyObject;
        data: ({
            value: string;
            result: boolean;
        } | {
            value: number;
            result: boolean;
        } | {
            value: {
                name?: undefined;
            };
            result: boolean;
        } | {
            value: {
                name: string;
            };
            result: boolean;
        } | {
            value: never[];
            result: boolean;
        } | {
            value: symbol;
            result: boolean;
        } | {
            value: WeakSet<object>;
            result: boolean;
        } | {
            value: WeakMap<object, any>;
            result: boolean;
        } | {
            value: boolean;
            result: boolean;
        })[];
    };
    isObject: {
        method: typeof isObject;
        data: ({
            value: string;
            result: boolean;
        } | {
            value: number;
            result: boolean;
        } | {
            value: symbol;
            result: boolean;
        } | {
            value: {
                name?: undefined;
            };
            result: boolean;
        } | {
            value: {
                name: string;
            };
            result: boolean;
        } | {
            value: never[];
            result: boolean;
        } | {
            value: WeakSet<object>;
            result: boolean;
        } | {
            value: WeakMap<object, any>;
            result: boolean;
        } | {
            value: boolean;
            result: boolean;
        })[];
    };
    isDate: {
        method: typeof isDate;
        data: ({
            value: string;
            result: boolean;
        } | {
            value: number;
            result: boolean;
        } | {
            value: symbol;
            result: boolean;
        } | {
            value: {
                name?: undefined;
            };
            result: boolean;
        } | {
            value: {
                name: string;
            };
            result: boolean;
        } | {
            value: never[];
            result: boolean;
        } | {
            value: WeakSet<object>;
            result: boolean;
        } | {
            value: WeakMap<object, any>;
            result: boolean;
        } | {
            value: Date;
            result: boolean;
        } | {
            value: boolean;
            result: boolean;
        })[];
    };
    isValidDate: {
        method: typeof isValidDate;
        data: ({
            value: string;
            result: boolean;
        } | {
            value: number;
            result: boolean;
        } | {
            value: symbol;
            result: boolean;
        } | {
            value: {
                name?: undefined;
            };
            result: boolean;
        } | {
            value: {
                name: string;
            };
            result: boolean;
        } | {
            value: never[];
            result: boolean;
        } | {
            value: WeakSet<object>;
            result: boolean;
        } | {
            value: WeakMap<object, any>;
            result: boolean;
        } | {
            value: Date;
            result: boolean;
        } | {
            value: boolean;
            result: boolean;
        })[];
    };
    isFunction: {
        method: typeof isFunction;
        data: ({
            value: string;
            result: boolean;
        } | {
            value: number;
            result: boolean;
        } | {
            value: symbol;
            result: boolean;
        } | {
            value: {
                name?: undefined;
            };
            result: boolean;
        } | {
            value: {
                name: string;
            };
            result: boolean;
        } | {
            value: never[];
            result: boolean;
        } | {
            value: WeakSet<object>;
            result: boolean;
        } | {
            value: WeakMap<object, any>;
            result: boolean;
        } | {
            value: Date;
            result: boolean;
        } | {
            value: boolean;
            result: boolean;
        } | {
            value: () => void;
            result: boolean;
        })[];
    };
    isError: {
        method: typeof isError;
        data: ({
            value: string;
            result: boolean;
        } | {
            value: number;
            result: boolean;
        } | {
            value: symbol;
            result: boolean;
        } | {
            value: {
                name?: undefined;
            };
            result: boolean;
        } | {
            value: {
                name: string;
            };
            result: boolean;
        } | {
            value: never[];
            result: boolean;
        } | {
            value: WeakSet<object>;
            result: boolean;
        } | {
            value: WeakMap<object, any>;
            result: boolean;
        } | {
            value: Date;
            result: boolean;
        } | {
            value: boolean;
            result: boolean;
        } | {
            value: () => void;
            result: boolean;
        } | {
            value: Error;
            result: boolean;
        })[];
    };
    isLeapYear: {
        method: typeof isLeapYear;
        data: ({
            value: number;
            result: boolean;
        } | {
            value: Date;
            result: boolean;
        })[];
    };
    isHTMLElement: {
        method: typeof isHTMLElement;
        data: ({
            value: HTMLDivElement;
            result: boolean;
        } | {
            value: string;
            result: boolean;
        } | {
            value: number;
            result: boolean;
        } | {
            value: symbol;
            result: boolean;
        } | {
            value: {
                name?: undefined;
            };
            result: boolean;
        } | {
            value: {
                name: string;
            };
            result: boolean;
        } | {
            value: never[];
            result: boolean;
        } | {
            value: WeakSet<object>;
            result: boolean;
        } | {
            value: WeakMap<object, any>;
            result: boolean;
        } | {
            value: Date;
            result: boolean;
        } | {
            value: boolean;
            result: boolean;
        } | {
            value: () => void;
            result: boolean;
        } | {
            value: Error;
            result: boolean;
        })[];
    };
};
