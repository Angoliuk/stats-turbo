require('@stats/eslint-config-custom/fix')

/** @type {import("eslint").Linter.Config} */
module.exports =  {
  extends: ['@stats/eslint-config-custom'],
  parserOptions: { project: [__dirname + "/tsconfig.json"] },
  root: true
}
