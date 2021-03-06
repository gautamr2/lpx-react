import autoprefixer from 'autoprefixer'
import sass from 'node-sass'
import babel from 'rollup-plugin-babel'
import copy from 'rollup-plugin-copy-assets'
import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'

const dist = 'dist'
const bundle = 'bundle'
// const isProduction = !process.env.ROLLUP_WATCH

export default {
  input: 'src/index.js',
  output: [
    {
      file: `${dist}/cjs/${bundle}.js`,
      format: 'cjs'
    },
    {
      file: `${dist}/esm/${bundle}.js`,
      format: 'esm'
    },
    {
      name: 'Lpx',
      file: `${dist}/umd/${bundle}.js`,
      format: 'umd',
      globals: {
        react: 'React'
      }
    }
  ],
  external: ['react'],
  plugins: [
    resolve(),
    babel({ exclude: 'node_modules/**' }),
    // isProduction && terser(),
    postcss({
      preprocessor: (content, id) =>
        new Promise((resolve, reject) => {
          const result = sass.renderSync({ file: id })
          resolve({ code: result.css.toString() })
        }),
      plugins: [autoprefixer],
      minimize: true,
      sourceMap: true,
      extract: true,
      exec: true,
      extensions: ['.sass', '.css']
    }),
    copy({
      assets: ['src/assets']
    })
  ]
}
