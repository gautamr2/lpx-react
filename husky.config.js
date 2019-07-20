module.exports = {
  hooks: {
    'pre-commit': 'lint-staged'
  },
  'lint-staged': {
    '*.js': ['yarn lint:fix', 'git add']
  }
}
