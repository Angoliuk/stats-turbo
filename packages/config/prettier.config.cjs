/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  plugins: ["@ianvs/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
  singleQuote: false,
  semi: true,
  tabWidth: 2,
  bracketSpacing: true,
  bracketSameLine: true,
  arrowParens: "always",
  trailingComma: "all",
  printWidth: 120,
  jsxSingleQuote: false,
  pluginSearchDirs: false,
  quoteProps: "consistent",
  embeddedLanguageFormatting: "off",
};
