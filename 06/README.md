# 06.常量混淆原理(字符串ASCII码混淆)

|本期版本| 上期版本
|:---:|:---:
`Wed May 25 12:54:59 CST 2022` | -

* 把一个字符串转为字节数组

```js
function stringToByte(str)
{
  var byteArr = [];
  for(var i = 0; i < str.length; i++){
    byteArr.push(str.charCodeAt(i));
  }
  return byteArr
}

// [118, 97, 114, 32, 97, 32, 61, 32, 49, 48, 48, 59, 32, 99, 111, 110, 115, 111, 108, 101, 46, 108, 111, 103, 40, 97, 41, 59]
console.log(stringToByte('var a = 100; console.log(a);'));
```

* 把字节数组变为字符串


```js
String.fromCharCode(118, 97, 114, 32, 97, 32, 61, 32, 49, 48, 48, 59, 32, 99, 111, 110, 115, 111, 108, 101, 46, 108, 111, 103, 40, 97, 41, 59);

String.fromCharCode.apply(null, [118, 97, 114, 32, 97, 32, 61, 32, 49, 48, 48, 59, 32, 99, 111, 110, 115, 111, 108, 101, 46, 108, 111, 103, 40, 97, 41, 59])
```

* 把字符串当作代码来执行

```js
// eval('var a = 100; console.log(a);');
eval(String.fromCharCode.apply(null, [118, 97, 114, 32, 97, 32, 61, 32, 49, 48, 48, 59, 32, 99, 111, 110, 115, 111, 108, 101, 46, 108, 111, 103, 40, 97, 41, 59]))
```

## Ref

* [`String.fromCharCode()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)
* [`Function.prototype.apply()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
* [`eval()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval)
* `google ruby 代码混淆`