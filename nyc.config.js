const babelConfig = require('@istanbuljs/nyc-config-babel');
const hookRunInThisContextConfig = require('@istanbuljs/nyc-config-hook-run-in-this-context');

module.exports = {
  ...babelConfig,
  ...hookRunInThisContextConfig,
  all: true,
  include: ['src/**/*.js'],
  exclude: ['**/*.(test|spec).js'],
  'check-coverage': true,
  branches: 80,
  lines: 80,
  functions: 80,
  statements: 80,
  require: ['@babel/register'],
  reporter: ['lcov', 'text']
};
