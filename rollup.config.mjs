import esbuild from 'rollup-plugin-esbuild'
import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin'
import serve from 'rollup-plugin-serve'
import postcss from 'rollup-plugin-postcss'
import css from 'rollup-plugin-import-css'

const plugins = [
  esbuild(),
  vanillaExtractPlugin(),
  // css(),
  postcss({
      plugins: []
  }),
];

export default [
  {
    input: 'src/index.ts',
    plugins,
    output: {
      dir: 'dist',
    },
  }, {
    input: 'src/index.ts',
    plugins: [
      ...plugins,

      serve({
        contentBase: 'dist',
        host: 'localhost',
        port: 10001,
        openPage: '/',
      }),
    ],
    output: {
      dir: 'dist',
      preserveModules: true,
    },
  },
]
