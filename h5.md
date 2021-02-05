### ios 不支持 2020-06-04 这种格式，先转成 2020/06/04 再转成时间戳就可以

### 解决 h5 页面按钮样式在 ios 样式不一样问题

- 亲测没用; 加上 padding：0;

```
input,
button {
appearance: none;
-moz-appearance: none;
-webkit-appearance: none;
padding：0
}
```

### 将 input 或 textarea 设置为 disabled 后，在 iphone 手机上样式将被覆写

```css
 {
  -webkit-text-fill-color: black;
  opacity: 1;
}
```

### ios 滚动条不流畅

```
{
   -webkit-overflow-scrolling: touch;
}
```
