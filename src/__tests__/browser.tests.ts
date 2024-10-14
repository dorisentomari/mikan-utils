// browser.test.ts
import {
  $selector,
  hasClassName,
  addClassName,
  deleteClassName,
  replaceClassName,
  isHTMLElement,
  isSpecificHTMLElement,
  setStyle,
  setStyleCssText,
  setDomAttributes,
  removeDom,
  createElement,
  removeLocalStorageByPrefix,
  safeGetLocalStorage,
  safeSetLocalStorage,
  safeRemoveLocalStorage
} from '../browser';

describe('测试 $selector', () => {
  test('测试 $selector 返回 null', () => {
    expect($selector('')).toBeNull();
  });
  
  test('测试 $selector 返回单个元素', () => {
    document.body.innerHTML = '<div id="testId"></div>';
    expect($selector('#testId')).toBeInstanceOf(HTMLElement);
  });
  
  test('测试 $selector 返回 NodeList', () => {
    document.body.innerHTML = '<div class="testClass"></div><div class="testClass"></div>';
    expect($selector('.testClass')).toHaveLength(2);
  });
});

describe('测试 hasClassName', () => {
  test('测试 hasClassName 检查类名存在', () => {
    const elem = document.createElement('div');
    elem.className = 'testClass';
    expect(hasClassName(elem, 'testClass')).toBe(true);
  });
  
  test('测试 hasClassName 检查类名不存在', () => {
    const elem = document.createElement('div');
    expect(hasClassName(elem, 'testClass')).toBe(false);
  });
  
  test('测试 hasClassName 抛出错误', () => {
    // @ts-ignore
    expect(() => hasClassName(null, 'testClass')).toThrow();
  });
});

describe('测试 addClassName', () => {
  test('测试 addClassName 添加类名', () => {
    const elem = document.createElement('div');
    addClassName(elem, 'newClass');
    expect(elem.className).toBe('newClass');
  });
  
  test('测试 addClassName 不重复添加类名', () => {
    const elem = document.createElement('div');
    elem.className = 'existingClass';
    addClassName(elem, 'existingClass');
    expect(elem.className).toBe('existingClass');
  });
});

describe('测试 deleteClassName', () => {
  test('测试 deleteClassName 删除类名', () => {
    const elem = document.createElement('div');
    elem.className = 'testClass';
    deleteClassName(elem, 'testClass');
    expect(elem.className).toBe('');
  });
  
  test('测试 deleteClassName 不存在的类名', () => {
    const elem = document.createElement('div');
    elem.className = 'testClass';
    deleteClassName(elem, 'nonExistentClass');
    expect(elem.className).toBe('testClass');
  });
});

describe('测试 replaceClassName', () => {
  test('测试 replaceClassName 替换类名', () => {
    const elem = document.createElement('div');
    elem.className = 'oldClass';
    replaceClassName(elem, 'newClass', 'oldClass');
    expect(elem.className).toBe('newClass');
  });
  
  test('测试 replaceClassName 不存在的旧类名', () => {
    const elem = document.createElement('div');
    elem.className = 'anotherClass';
    replaceClassName(elem, 'newClass', 'nonExistentClass');
    expect(elem.className).toBe('anotherClass newClass');
  });
});

describe('测试 isHTMLElement', () => {
  test('测试 isHTMLElement 返回 true', () => {
    const elem = document.createElement('div');
    expect(isHTMLElement(elem)).toBe(true);
  });
  
  test('测试 isHTMLElement 返回 false', () => {
    expect(isHTMLElement(null)).toBe(false);
    expect(isHTMLElement({})).toBe(false);
  });
});

describe('测试 isSpecificHTMLElement', () => {
  test('测试 isSpecificHTMLElement 返回 true', () => {
    const elem = document.createElement('div');
    expect(isSpecificHTMLElement(elem, 'div')).toBe(true);
  });
  
  test('测试 isSpecificHTMLElement 返回 false', () => {
    const elem = document.createElement('span');
    expect(isSpecificHTMLElement(elem, 'div')).toBe(false);
  });
});

describe('测试 setStyle', () => {
  test('测试 setStyle 空入参', () => {
    // @ts-ignore
    expect(setStyle(null,)).toEqual(undefined);
    expect(setStyle('.ss',)).toEqual(undefined);
  });
  
  test('测试 setStyle 设置样式', () => {
    const elem = document.createElement('div');
    setStyle(elem, { color: 'red', backgroundColor: 'blue' });
    expect(elem.style.color).toBe('red');
    expect(elem.style.backgroundColor).toBe('blue');
  });
  
  test('测试 setStyle 选择器为字符串', () => {
    document.body.innerHTML = '<div id="testId"></div>';
    setStyle('#testId', { color: 'green' });
    const elem = $selector('#testId') as HTMLElement;
    expect(elem.style.color).toBe('green');
  });
});

describe('测试 setStyleCssText', () => {
  test('测试 setStyleCssText 设置 cssText', () => {
    const elem = document.createElement('div');
    // @ts-ignore
    setStyleCssText(elem, 'color: blue; background-color: yellow;');
    expect(elem.style.cssText).toBe('color: blue; background-color: yellow;');
  });
  
  test('测试 setStyleCssText 选择器为字符串', () => {
    document.body.innerHTML = '<div class="testClass"></div>';
    setStyleCssText('.testClass', 'color: red;');
    const elem = $selector('.testClass') as HTMLElement;
    expect(elem.style.color).toBe('red');
  });
});

describe('测试 setDomAttributes', () => {
  
  test('测试 setDomAttributes 空入参', () => {
    // @ts-ignore
    expect(setDomAttributes(null,)).toEqual(undefined);
    // @ts-ignore
    expect(setDomAttributes('.ss',)).toEqual(undefined);
  });
  
  test('测试 setDomAttributes 设置属性', () => {
    const elem = document.createElement('input');
    setDomAttributes(elem, { type: 'text', placeholder: '输入文本' });
    expect(elem.type).toBe('text');
    expect(elem.placeholder).toBe('输入文本');
  });
});

describe('测试 removeDom', () => {
  test('测试 removeDom 删除元素', () => {
    document.body.innerHTML = '<div class="removeClass"></div><div class="removeClass"></div>';
    removeDom('.removeClass');
    // @ts-ignore
    const domList = $selector('.removeClass') as NodeList;
    expect(domList.length).toBe(0);
  });
});

describe('测试 createElement', () => {
  test('测试 createElement 创建元素', () => {
    const elem = createElement('div', { id: 'newDiv' }, { color: 'red' });
    expect(elem).toBeInstanceOf(HTMLElement);
    // @ts-ignore
    expect(elem.id).toBe('newDiv');
    // @ts-ignore
    expect(elem.style.color).toBe('red');
  });
  
  test('测试 createElement 返回 null', () => {
    expect(createElement('')).toBeNull();
  });
});

describe('测试 removeLocalStorageByPrefix', () => {
  test('测试 removeLocalStorageByPrefix 删除以前缀开头的 localStorage 项', () => {
    localStorage.setItem('test_key1', 'value1');
    localStorage.setItem('test_key2', 'value2');
    removeLocalStorageByPrefix('test_');
    expect(localStorage.getItem('test_key1')).toBeNull();
    expect(localStorage.getItem('test_key2')).toBeNull();
  });
});

describe('测试 safeGetLocalStorage', () => {
  test('测试 safeGetLocalStorage 获取存在的 localStorage 项', () => {
    localStorage.setItem('key1', JSON.stringify({ name: 'test' }));
    expect(safeGetLocalStorage('key1')).toEqual({ name: 'test' });
  });
  
  test('测试 safeGetLocalStorage 获取不存在的 localStorage 项', () => {
    expect(safeGetLocalStorage('nonExistentKey')).toBe('');
  });
});

describe('测试 safeSetLocalStorage', () => {
  test('测试 safeSetLocalStorage 设置 localStorage', () => {
    safeSetLocalStorage('key2', { name: 'test2' });
    expect(localStorage.getItem('key2')).toBe(JSON.stringify({ name: 'test2' }));
  });
  
  test('测试 safeSetLocalStorage 设置失败并删除前缀', () => {
    localStorage.setItem('key3', 'value3');
    safeSetLocalStorage('key3', { name: 'test3' }, 'key3');
    expect(localStorage.getItem('key3')).toBe(JSON.stringify({ name: 'test3' }));
  });
});

describe('测试 safeRemoveLocalStorage', () => {
  test('测试 safeRemoveLocalStorage 删除 localStorage 项', () => {
    localStorage.setItem('key4', 'value4');
    safeRemoveLocalStorage('key4');
    expect(localStorage.getItem('key4')).toBeNull();
  });
});
