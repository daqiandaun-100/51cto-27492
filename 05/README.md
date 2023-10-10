# 05.常量混淆原理(unicode字符串)

|本期版本| 上期版本
|:---:|:---:
`Wed May 25 10:10:40 CST 2022` | -

* unicode 形式就是 `\u` 开头，后面跟着四位的十六进制数

```js
// \u65e5
console.log(
  `\\u${("0000" + parseInt('日'.charCodeAt()).toString(16)).substr(-4)}`
)
```

* JS 中的标识符也支持 unicode 形式表示

```js
// new Date()
new \u0044\u0061\u0074\u0065()
```

## Ref

* [`String.prototype.substring()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substring)