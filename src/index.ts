import * as array from './array';
import * as browser from './browser';
import * as common from './common';
import * as number from './number';
import * as object from './object';
import * as random from './random';
import * as regexp from './regexp';
import * as string from './string';

export * from './array';
export * from './browser';
export * from './common';
export * from './number';
export * from './object';
export * from './random';
export * from './regexp';
export * from './string';

export default {
  ...array,
  ...browser,
  ...common,
  ...number,
  ...object,
  ...random,
  ...regexp,
  ...string,
};
