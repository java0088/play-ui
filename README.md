# play-ui

Vue3 UI Components Library

注：该仓库主要记录从 0 搭建一个组件库的方法，包括组件文档的编写

## 项目搭建

- 新建 play-ui 项目
- cd play-ui
- npm init -y 初始化 package.json 文件
- 新建 packages 目录，里面存放我们要开发的项目
- 创建 pnpm-workspace.yaml 文件，并指定 packages

```yaml
packages:
  - 'packages/*'
```

- 安装 typescript 并初始化 tsconfig.json 文件

```shell
pnpm add typescript -D -w
npx typescript --init
```

- 配置你喜欢的即可

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "target": "es2016",
    "sourceMap": false,
    "module": "esnext",
    "esModuleInterop": true,
    "strict": true,
    "jsx": "preserve",
    "types": ["node"],
    "rootDir": "."
  }
}
```

## 代码规范

### eslint

- 安装依赖 pnpm add eslint @typescript-eslint/parser -D -w
- npx eslint --init 根据提示生成配置文件，如果自己有可以跳过

### prettier

- 安装依赖 pnpm add prettier -D -w
- 创建 .prettier 文件

```javascript
module.exports = {
  semi: false,
  singleQuote: true,
  printWidth: 80,
  trailingComma: 'none',
  arrowParens: 'avoid'
}
```

### eslint 配合 prettier

- 安装依赖 pnpm add eslint-config-prettier eslint-plugin-prettier -D -w

- 当 ESLint 的规则和 Prettier 的规则相冲突时，就会发现一个尴尬的问题，用其中一种来格式化代码，另一种就会报错。prettier 官方提供了一款工具 eslint-config-prettier 来解决这个问题，本质上这个工具其实就是禁用掉了一些不必要的以及和 Prettier 相冲突的 ESLint 规则。

修改 eslintrc 文件
```js
{
  "extends": [
    "...",
    "prettier"
  ]
}
```

- eslint-config-prettier 仅仅只是将部分 ESLint 规则给禁用了，避免 Prettier 格式化之后的代码导致 ESLint 报错而已，prettier 官方提供了一个 ESLint 插件 eslint-plugin-prettier。这个插件的主要作用就是将 prettier 作为 ESLint 的规则来使用，相当于代码不符合 Prettier 的标准时，会报一个 ESLint 错误，同时也可以通过 eslint --fix 来进行格式化。

修改 eslintrc 文件
```js
{
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

- .eslint.js
```js
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  env: {
    browser: true,
    es2021: true
  },
  extends: ['eslint:recommended'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    "prettier/prettier": 'error'
  }
}
```

### husky + commitlint

- husky 哈士奇，代码提交前可以执行自定义 git hooks
- commitlint 统一提交时的message

安装依赖
```
pnpm add husky -D -w
```
执行 npx husky install 创建.husky目录，该目录下有一个pre-commit文件在每次提交代码的时候会执行，可以修改里面的运行脚本，自定义提交需要做的工作
```shell
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

pnpm lint
```
commitlint 查看官方文档 https://commitlint.js.org/#/guides-local-setup


