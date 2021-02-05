- Use Array.from for converting an array-like object to an array.

```js
const arrLike = { 0: 'foo', 1: 'bar', 2: 'baz', length: 3 };

// bad
const arr = Array.prototype.slice.call(arrLike);

// good
const arr = Array.from(arrLike);
```

- Use Array.from instead of spread ... for mapping over iterables, because it avoids creating an intermediate array.

```js
// bad
const baz = [...foo].map(bar);

// good
const baz = Array.from(foo, bar);
```

- Use named function expressions instead of function declarations. eslint: func-style

```js
// bad
function foo() {
  // ...
}

// bad
const foo = function () {
  // ...
};

// good
// lexical name distinguished from the variable-referenced invocation(s)
const short = function longUniqueMoreDescriptiveLexicalFoo() {
  // ...
};
```

- Wrap immediately invoked function expressions in parentheses. eslint: wrap-iife
  > Why? An immediately invoked function expression is a single unit - wrapping both it, and its invocation parens, in parens, cleanly expresses this. Note that in a world with modules everywhere, you almost never need an IIFE.

```js
// immediately-invoked function expression (IIFE)
(function () {
  console.log('Welcome to the Internet. Please follow me.');
})();
```

- Never mutate parameters. eslint: no-param-reassign
  > Why? Manipulating objects passed in as parameters can cause unwanted variable side effects in the original caller.

```js
// bad
function f1(obj) {
  obj.key = 1;
}

// good
function f2(obj) {
  const key = Object.prototype.hasOwnProperty.call(obj, 'key') ? obj.key : 1;
}
```

- If for whatever reason you are doing something wild and parseInt is your bottleneck and need to use Bitshift for performance reasons, leave a comment explaining why and what you’re doing.

```js
// good
/**
 * parseInt was the reason my code was slow.
 * Bitshifting the String to coerce it to a
 * Number made it a lot faster.
 */
const val = inputValue >> 0;
```
