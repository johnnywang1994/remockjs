import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { terser } from "rollup-plugin-terser";

const isProd = process.env.NODE_ENV === 'production';

const baseConfig = {
  input: 'src/index.js',
  plugins: [
    babel({ babelHelpers: 'bundled' }),
    (isProd && terser()),
    nodeResolve(),
    commonjs()
  ],
};

const umdConfig = Object.assign({}, baseConfig, {
  output: {
    name: 'ReMock',
    file: `dist/remock${isProd ? '.min' : ''}.js`,
    format: 'umd',
    // exports: 'default',
    compact: isProd
  },
});

const cjsConfig = Object.assign({}, baseConfig, {
  output: {
    file: `dist/remock${isProd ? '.cjs.min' : '.cjs'}.js`,
    format: 'cjs',
    // exports: 'default',
    compact: isProd
  },
});

const esmConfig = Object.assign({}, baseConfig, {
  output: {
    file: `dist/remock${isProd ? '.esm.min' : '.esm'}.js`,
    format: 'es',
    // exports: 'default',
    compact: isProd
  },
});

export default [umdConfig, cjsConfig, esmConfig];
