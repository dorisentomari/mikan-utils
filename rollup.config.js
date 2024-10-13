import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
// import { terser } from 'rollup-plugin-terser';
import serve from 'rollup-plugin-serve';


const plugins = [
	// 允许 Rollup 解析 node_modules 中的模块
	resolve(),
	// 将 CommonJS 模块转换为 ES6
	commonjs(),
	// 支持 TypeScript
	typescript({ tsconfig: './tsconfig.json' }),
	// 压缩代码
	// terser()
];

if (process.env.NODE_ENV === 'development') {
	plugins.push(serve({
		open: false,
		historyApiFallback: true,
		host: 'localhost',
		port: 9700,
		openPage: '/index.html',
		contentBase: ['dist', 'templates'],
	}));
}

export default {
	// 工具库的入口文件
	input: 'src/index.ts',
	output: [
		{
			// 输出目录
			dir: 'dist/es',
			// 输出为 ES 模块
			format: 'es',
			// 保留模块结构，支持按需加载
			preserveModules: true,
			// 保留 src 目录结构
			preserveModulesRoot: 'src',
			sourcemap: true
		},
		{
			file: 'dist/mikan-utils.cjs.js',
			format: 'cjs',
			name: 'mikanUtils',
			sourcemap: true,
		},
		{
			file: 'dist/mikan-utils.esm.js',
			format: 'esm',
			sourcemap: true,
		},
		{
			file: 'dist/mikan-utils.umd.js',
			format: 'umd',
			// UMD 全局变量名
			name: 'mikanUtils',
			sourcemap: true,
		},
	],
	plugins: plugins
};
