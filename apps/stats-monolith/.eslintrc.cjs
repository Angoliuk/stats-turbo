require("@stats/eslint-config-custom/fix");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["plugin:@next/next/recommended", "@stats/eslint-config-custom"],
};
