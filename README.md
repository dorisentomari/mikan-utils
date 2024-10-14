# mikan-utils [![npm version](https://badge.fury.io/js/mikan-utils.svg)](https://badge.fury.io/js/mikan-utils)

mikan 项目工具库


## 安装

```bash
npm i mikan-utils --save

yarn add mikan-utils

pnpm add mikan-utils
```

## 支持模式

支持 es、cjs、esm、umd 模式。

```text
dist/es

dist/mikan-utils.cjs.js

dist/mikan-utils.esm.js

dist/mikan-utils.umd.js
```

## 目录结构

```text

├── dist
│   ├── es
│   │   ├── array.d.ts
│   │   ├── array.js
│   │   ├── array.js.map
│   │   ├── browser.d.ts
│   │   ├── browser.js
│   │   ├── browser.js.map
│   │   ├── common.d.ts
│   │   ├── common.js
│   │   ├── common.js.map
│   │   ├── csv.d.ts
│   │   ├── csv.js
│   │   ├── csv.js.map
│   │   ├── date.d.ts
│   │   ├── date.js
│   │   ├── date.js.map
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── index.js.map
│   │   ├── node_modules
│   │   │   └── tslib
│   │   │       ├── tslib.es6.js
│   │   │       └── tslib.es6.js.map
│   │   ├── number.d.ts
│   │   ├── number.js
│   │   ├── number.js.map
│   │   ├── object.d.ts
│   │   ├── object.js
│   │   ├── object.js.map
│   │   ├── random.d.ts
│   │   ├── random.js
│   │   ├── random.js.map
│   │   ├── regexp.d.ts
│   │   ├── regexp.js
│   │   ├── regexp.js.map
│   │   ├── string.d.ts
│   │   ├── string.js
│   │   └── string.js.map
│   ├── mikan-utils.cjs.js
│   ├── mikan-utils.cjs.js.map
│   ├── mikan-utils.esm.js
│   ├── mikan-utils.esm.js.map
│   ├── mikan-utils.umd.js
│   └── mikan-utils.umd.js.map
├── src
│   ├── array.ts
│   ├── browser.ts
│   ├── common.ts
│   ├── csv.ts
│   ├── date.ts
│   ├── index.ts
│   ├── number.ts
│   ├── object.ts
│   ├── random.ts
│   ├── regexp.ts
│   └── string.ts
├── tsconfig.json
├── yarn.lock
├── package.json
├── public
│   └── index.html
└─── rollup.config.js
```

## ES, ESM, CJS, UMD 模式

- ES(ECMAScript)：涵盖了语言本身的所有功能。
- ESM(ECMAScript Modules)：提供了模块导入和导出的机制，使得 JavaScript 原生支持模块化开发。支持 import export 语法，静态分析，tree-shaking，延迟加载。
- CJS(CommonJS) ：支持 require module.exports 语法，动态加载，不支持 tree-shaking，模块同步加载。只能在 Node.js 环境里使用。
- UMD(Universal Module Definition)：支持 AMD、CommonJS、ESM 三种模块规范，适用于浏览器环境和 Node.js 环境。
