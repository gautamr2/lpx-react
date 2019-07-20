const dist = 'dist'

export default {
  input: 'src/index.js',
  output: [
    {
      file: `${dist}/cjs/bundle.js`,
      format: 'cjs'
    },
    {
      file: `${dist}/umd/bundle.js`,
      format: 'umd'
    },
    {
      file: `${dist}/esm/bundle.js`,
      format: 'esm'
    }
  ]
}
