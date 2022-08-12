module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write', 'git add'],
  'package.json': ['prettier --write', 'git add'],
  '*.vue': ['eslint --fix', 'prettier --write', 'stylelint --fix', 'git add'],
  '*.{scss,less,html}': ['stylelint --fix', 'prettier --write', 'git add'],
  '*.md': ['prettier --write', 'git add']
};
