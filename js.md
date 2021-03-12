### Array.prototype.slice()

slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括 end）。原始数组不会被改变。

### Array.from()

方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。

```js
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], (x) => x + x));
// expected output: Array [2, 4, 6]
```

> Array.from(arrayLike[, mapFn[, thisArg]])

### Array.prototype.reduce()

方法对数组中的每个元素执行一个由您提供的 reducer 函数(升序执行)，将其结果汇总为单个返回值。

```js
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
```

> arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])

### Function.prototype.bind()

bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用

```js
const module = {
  x: 42,
  getX() {
    return this.x;
  },
};
const boundGetX = module.getX.bind(module);
console.log(boundGetX());
```

### Function.prototype.call()

call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。

```js
function Product(name, price) {
  this.name = name;
  this.price = price;
}
function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}
console.log(new Food('cheese', 5).name);
// expected output: "cheese"
```

