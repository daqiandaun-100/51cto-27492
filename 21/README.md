# 21.parser与generator

|本期版本|上期版本
|:---:|:---:
`Tue Dec 26 18:51:03 CST 2023` | -

## parser 的 parse 方法是有第二个参数的

* sourceType 默认为 script
* 含有 `import`、`export`等关键字时，需要指定 sourceType 为 module


## 把 AST 转换为 JS 代码

* generator 返回的是一个对象，其中的 code 属性才是需要的代码