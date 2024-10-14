import path from 'path';

export default {
  entryPoints: [path.resolve(process.cwd(), 'src/index.ts')],
  out: path.resolve(process.cwd(), 'docs'),
  tsconfig: path.resolve(process.cwd(), 'tsconfig.json'),
  excludeExternals: true,
  name: 'tank-utils',
  includeVersion: true,
  theme: 'default',
  readme: path.resolve(process.cwd(), 'README.md'),
  categorizeByGroup: true,
  disableSources: false,
  hideGenerator: false,
  exclude: ['**/**/__tests__/**/*'],
};
