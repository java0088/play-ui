# play-ui

Vue3 UI Components Library

注：该仓库主要记录从0搭建一个组件库的方法，包括组件文档的编写


## 项目搭建
- 新建 play-ui项目
- cd play-ui
- npm init -y 初始化package.json文件
- 新建packages目录，里面存放我们要开发的项目
- 创建 pnpm-workspace.yaml 文件，并指定 packages

```yaml
packages:
 - 'packages/*'
```

- 安装 typescript 并初始化tsconfig.json文件
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
    "rootDir": ".",
  }
}
```
## 代码规范

### eslint

- 安装依赖 pnpm add eslint -D -w
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