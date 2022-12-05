const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'global-require': 0,
  },
  globals: {
    TEST_EXCEL_QUEUE: true,
    PRODUCER: true,
    logger: true,
  },
};
