### ts 中声明 window.MyNamespace

```js
declare global {
    interface Window { MyNamespace: any; }
}
```

### Element.querySelector()

> element = baseElement.querySelector(selectors);

- element 和 baseElement 是 element 对象.
- selectors 是一个 CSS 选择器字符串( selectors )

### EventTarget.addEventListener()

> target.addEventListener(type, listener, useCapture)

- 当 useCapture(设为 true) 时，沿着 DOM 树向上冒泡的事件，不会触发 listener

master
lllssss
