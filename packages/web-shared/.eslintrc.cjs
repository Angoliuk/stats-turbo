require('@stats/eslint-config-custom/fix')

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['@stats/eslint-config-custom'],
  root: true,
  parserOptions: {
    project: [__dirname + '/tsconfig.json']
  }
}
