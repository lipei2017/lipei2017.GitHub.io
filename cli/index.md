# 自定义开发脚手架

## Commander.js [link](https://github.com/tj/commander.js/blob/master/Readme_zh-CN.md)

完整的 node.js 命令行解决方案

## 'require' is not defined.eslint

在.eslintrc.js 中添加 node: true

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
};
```
