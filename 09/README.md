# 09.增加JS逆向工作量(数组混淆)

|本期版本| 上期版本
|:---:|:---:
`Wed May 25 15:05:38 CST 2022` | -

* 把所有的字符，都提取到一个数组中，然后需要引用字符串的地方，全部以数组下标的方式去访问数组成员

```js
// console.log(new window.Date().getTime())
var bigArr = ['Date', 'getTime', 'log']

console[bigArr[2]](new window[bigArr[0]]()[bigArr[1]]())
```

```js
var bigArr = ['RGF0ZQ==', 'Z2V0VGltZQ==', 'bG9n']
console[atob(bigArr[2])](new window[atob(bigArr[0])]()[atob(bigArr[1])]())
```


```js
String.fromCharCode
String['fromCharCode']
window['String']['fromCharCode']
""['constructor']['fromCharCode']
```