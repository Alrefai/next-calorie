/* eslint-disable import/no-unused-modules */
module.exports = {
  '**/*.ts{,x}': () => `tsc -p tsconfig.json --noEmit`,
  '**/*.+(j|t)s{,x}': filenames => `eslint ${filenames.join(` `)}`,
  '**/*.+(json|yaml)': filenames =>
    filenames.map(filename => `prettier --write '${filename}'`),
}
