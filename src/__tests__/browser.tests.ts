import {
  $selector,
  hasClassName,
  addClassName,
  deleteClassName,
  replaceClassName,
  isSpecificHTMLElement,
  setStyle,
  setDomAttributes,
  removeDom,
  createElement,
  safeGetLocalStorage,
  safeSetLocalStorage,
  safeRemoveLocalStorage,
} from '../browser';

describe('测试 $selector', () => {
  test('正确选择单个元素', () => {
    document.body.innerHTML = `<div id="app"></div>`;
    const element = $selector('#app');
    expect(element).toBeInstanceOf(HTMLElement);
  });

  test('选择多个元素时返回 NodeList', () => {
    document.body.innerHTML = `<ul><li class="item"></li><li class="item"></li></ul>`;
    const elements = $selector('.item');
    expect(elements).toBeInstanceOf(NodeList);
  });

  test('传入 HTMLElement 时返回自身', () => {
    const element = document.createElement('div');
    const result = $selector(element);
    expect(result).toBe(element);
  });

  test('无效选择器返回 null', () => {
    const result = $selector('#non-existent');
    expect(result).toBeNull();
  });
});

describe('测试 hasClassName', () => {
  test('元素包含指定类名时返回 true', () => {
    const element = document.createElement('div');
    element.classList.add('active');
    expect(hasClassName(element, 'active')).toBe(true);
  });

  test('元素不包含指定类名时返回 false', () => {
    const element = document.createElement('div');
    expect(hasClassName(element, 'inactive')).toBe(false);
  });

  test('元素不存在时抛出错误', () => {
    expect(() => hasClassName(null as any, 'test')).toThrowError();
  });
});

describe('测试 addClassName', () => {
  test('成功添加类名', () => {
    const element = document.createElement('div');
    addClassName(element, 'new-class');
    expect(element.classList.contains('new-class')).toBe(true);
  });

  test('类名已存在时不重复添加', () => {
    const element = document.createElement('div');
    element.classList.add('existing-class');
    addClassName(element, 'existing-class');
    expect(element.classList.length).toBe(1);
  });
});

describe('测试 deleteClassName', () => {
  test('成功删除类名', () => {
    const element = document.createElement('div');
    element.classList.add('to-remove');
    deleteClassName(element, 'to-remove');
    expect(element.classList.contains('to-remove')).toBe(false);
  });

  test('类名不存在时不抛出错误', () => {
    const element = document.createElement('div');
    deleteClassName(element, 'non-existent-class');
    expect(element.classList.contains('non-existent-class')).toBe(false);
  });
});

describe('测试 replaceClassName', () => {
  test('成功替换类名', () => {
    const element = document.createElement('div');
    element.classList.add('old-class');
    replaceClassName(element, 'new-class', 'old-class');
    expect(element.classList.contains('new-class')).toBe(true);
    expect(element.classList.contains('old-class')).toBe(false);
  });
});

describe('测试 isSpecificHTMLElement', () => {
  test('正确判断元素标签', () => {
    const element = document.createElement('div');
    expect(isSpecificHTMLElement<HTMLDivElement>(element, 'div')).toBe(true);
  });

  test('标签不匹配时返回 false', () => {
    const element = document.createElement('span');
    expect(isSpecificHTMLElement<HTMLDivElement>(element, 'div')).toBe(false);
  });
});

describe('测试 setStyle', () => {
  test('成功设置样式', () => {
    const element = document.createElement('div');
    document.body.appendChild(element);
    setStyle(element, { color: 'red', fontSize: '16px' });
    expect(element.style.color).toBe('red');
    expect(element.style.fontSize).toBe('16px');
  });

  test('无效元素不设置样式', () => {
    setStyle(null as any, { color: 'blue' });
    // No expectation here, just ensuring no error is thrown.
  });
});

describe('测试 setDomAttributes', () => {
  test('成功设置属性', () => {
    const element = document.createElement('div');
    setDomAttributes(element, { id: 'testId', 'data-role': 'button' });
    expect(element.id).toBe('testId');
    expect(element.getAttribute('data-role')).toBe('button');
  });

  test('无效元素不设置属性', () => {
    setDomAttributes(null as any, { id: 'testId' });
    // No expectation here, just ensuring no error is thrown.
  });
});

{
  // 创建一个测试用的 DOM 元素
  const createElement = (id: string, parent: HTMLElement | null = document.body): HTMLElement => {
    const elem = document.createElement('div');
    elem.id = id;
    parent?.appendChild(elem);
    return elem;
  };

  describe('测试 removeDom', () => {
    // 在每个测试之前，清空 document.body
    beforeEach(() => {
      document.body.innerHTML = ''; // 清空 DOM
    });

    test('移除存在的单个元素', () => {
      const elem = createElement('test-element-1');
      removeDom('#test-element-1');
      expect($selector('#test-element-1')).toBeNull(); // 确保元素被移除
    });

    test('尝试移除不存在的元素', () => {
      removeDom('#non-existent'); // 调用不存在的元素
      expect($selector('#non-existent')).toBeNull(); // 确保仍然是 null
    });

    test('移除多个元素', () => {
      createElement('test-element-1');
      createElement('test-element-2');
      removeDom('div'); // 选择所有 div 元素
      expect($selector('#test-element-1')).toBeNull(); // 确保第一个元素被移除
      expect($selector('#test-element-2')).toBeNull(); // 确保第二个元素被移除
    });

    test('安全移除带有 parentNode 的元素', () => {
      const parent = createElement('parent');
      const child = createElement('child', parent);
      removeDom('#child');
      expect(parent.children.length).toBe(0); // 确保 child 被移除
    });

    test('不移除未附加到 DOM 的元素', () => {
      const elem = document.createElement('div'); // 创建但不附加到 DOM
      removeDom(elem); // 应该无影响
      expect(elem.parentNode).toBeNull(); // 确保仍然不在 DOM 中
    });
  });
}

describe('测试 createElement', () => {
  test('成功创建带属性和样式的元素', () => {
    const element = createElement('div', { id: 'test' }, { color: 'blue' });
    expect(element?.id).toBe('test');
    expect(element?.style.color).toBe('blue');
  });

  test('未指定标签名时抛出错误', () => {
    expect(() => createElement('')).toThrowError('Element name is required');
  });
});

describe('测试 safeGetLocalStorage', () => {
  test('获取 safeGetLocalStorage 空值', () => {
    const result = safeGetLocalStorage('um');
    expect(result).toBe(null);
  });

  test('获取 safeGetLocalStorage 字符串对象', () => {
    localStorage.setItem('keykey', JSON.stringify({ a: 1 }));
    const result = safeGetLocalStorage('keykey');
    expect(result).toEqual({ a: 1 });
  });

  test('成功获取并解析 localStorage 数据', () => {
    localStorage.setItem('key', JSON.stringify({ a: 1 }));
    const result = safeGetLocalStorage('key');
    expect(result).toEqual({ a: 1 });
  });

  test('解析失败时返回原始值', () => {
    localStorage.setItem('key', '{not-json');
    const result = safeGetLocalStorage('key');
    expect(result).toBe('{not-json');

    localStorage.setItem('key2', '[not-json');
    const result2 = safeGetLocalStorage('key2');
    expect(result2).toBe('[not-json');
  });
});

describe('测试 safeSetLocalStorage', () => {
  test('成功设置对象到 localStorage', () => {
    safeSetLocalStorage('key', { b: 2 });
    const storedValue = localStorage.getItem('key');
    expect(storedValue).toBe(JSON.stringify({ b: 2 }));
  });

  test('成功设置字符串到 localStorage', () => {
    safeSetLocalStorage('key', 'string-value');
    const storedValue = localStorage.getItem('key');
    expect(storedValue).toBe('string-value');
  });
});

describe('测试 safeRemoveLocalStorage', () => {
  test('成功删除 localStorage 键', () => {
    localStorage.setItem('key', 'value');
    safeRemoveLocalStorage('key');
    const result = localStorage.getItem('key');
    expect(result).toBeNull();
  });
});
