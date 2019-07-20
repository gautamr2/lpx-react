import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
const dist = 'dist'

export default {
  input: 'src/index.js',
  output: [
    {
      file: `${dist}/cjs/bundle.js`,
      format: 'cjs'
    },
    {
      file: `${dist}/esm/bundle.js`,
      format: 'esm'
    },
    {
      name: 'Lpx',
      file: `${dist}/umd/bundle.js`,
      format: 'umd',
      globals: {
        react: 'React'
      }
    }
  ],
  external: ['react'],
  plugins: [resolve(), babel({ exclude: 'node_modules/**' })]
}
