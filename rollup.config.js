import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import sass from 'rollup-plugin-sass'
import { terser } from 'rollup-plugin-terser'
import autoprefixer from 'autoprefixer'
import postcss from 'postcss'

const dist = 'dist'
const bundle = 'bundle'
const isProduction = !process.env.ROLLUP_WATCH

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
    isProduction && terser(),
    sass({
      output: 'dist/styles.css',
      processor: css =>
        postcss([autoprefixer])
          .process(css)
          .then(result => result.css)
    })
  ]
}
