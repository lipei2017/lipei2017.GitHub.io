## Commonjs

运行时加载: CommonJS 模块就是对象；即在输入时是先加载整个模块，生成一个对象，然后再从这个对象上面读取方法，这种加载称为“运行时加载”。

exports 和 module.exports 的区别

- module.exports 初始值为一个空对象 {}
- exports 是指向的 module.exports 的引用
- require() 返回的是 module.exports 而不是 exports

## AMD

AMD 规范采用异步方式加载模块，模块的加载不影响它后面语句的运行。所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行。这里介绍用 require.js 实现 AMD 规范的模块化：用 require.config()指定引用路径等，用 definde()定义模块，用 require()加载模块。

- require.js

  AMD 的实现者 require.js 在申明依赖的模块时，会在<font color=red>第一时间加载并执行模块内的代码</font>

```js
// 定义math.js模块
define(function () {
  var basicNum = 0;
  var add = function (x, y) {
    return x + y;
  };
  return {
    add: add,
    basicNum: basicNum,
  };
});

// 定义一个依赖underscore.js的模块
define(['underscore'], function (_) {
  var classify = function (list) {
    _.countBy(list, function (num) {
      return num > 30 ? 'old' : 'young';
    });
  };
  return {
    classify: classify,
  };
});

// 引用模块，将模块放在[]内
require(['jquery', 'math'], function ($, math) {
  var sum = math.add(10, 20);
  $('#sum').html(sum);
});
```

## CMD

CMD 是另一种 js 模块化方案，它与 AMD 很类似，不同点在于：AMD 推崇依赖前置、提前执行，CMD 推崇依赖就近、延迟执行。此规范其实是在 sea.js 推广过程中产生的。

## ES6 Module

编译时加载: ES6 模块不是对象，而是通过 export 命令显式指定输出的代码，import 时采用静态命令的形式。即在 import 时可以指定加载某个输出值，而不是加载整个模块，这种加载称为“编译时加载”。模块内部引用的变化，会反应在外部。

- CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用
