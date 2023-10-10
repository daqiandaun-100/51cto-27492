# 18.其他代码防护方案(检测代码是否格式化)

|本期版本| 上期版本
|:---:|:---:
`Wed May 25 09:01:38 CST 2022` | -

* 在 JS 中函数是可以转字符串的。因此可以随便挑一个函数转字符串，然后跟内置的字符串对比或者用正则匹配即可

```js
function add(a, b) { return a + b;}
console.log( add + '');
console.log( add.toString());
```