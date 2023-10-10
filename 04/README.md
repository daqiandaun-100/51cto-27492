# 04.常量混淆原理(十六进制字符串)

|本期版本| 上期版本
|:---:|:---:
`Wed May 25 10:01:17 CST 2022` | -


* 在 JS 中字符串支持以十六进制表示

```js
// \x79
console.log(`\\x${'y'.charCodeAt().toString(16)}`)

// yyyy-mm-dd
console.log('\x79\x79\x79\x79\x2d\x6d\x6d\x2d\x64\x64')
```

## Ref

* [`String.prototype.charCodeAt()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)
* [`Number.prototype.toString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toString)