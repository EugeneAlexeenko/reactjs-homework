module.exports = {
  'plugins': [
    'react',
    'cypress'
  ],
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:cypress/recommended'
  ],
  // We don't need parserOptions if using babel-eslint parser
  // but we need babel as dependency and .babelrc should be specified
  'parser': 'babel-eslint',
  settings: {
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React to use
      version: 'detect',
    },
  },
  // Specify environments. Each environment brings with it a certain set of predefined global variables.
  'env': {
    'browser': true,
    'node': true,
    'jest': true,
    'cypress/globals': true
  }
};
