/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  // overrides: [
  //   {
  //     files: '*.astro',
  //     options: {
  //       parser: 'astro',
  //     },
  //   },
  // ],
  "semi": true,
  "printWidth": 80,
  "tabWidth": 2,
  "singleQuote": true,
  "bracketSpacing": true,
  "useTabs": false,
  "arrowParens": "avoid",
  "jsxSingleQuote": true,
  "trailingComma": "all",
  "jsdocParser": true
};
