# 34.改变对象属性的访问方式

|本期版本| 上期版本
|:---:|:---:
`Thu May 26 19:58:09 CST 2022` | -


**差异**


名字 | `console.log` | `console['log']`
---|---|---
`computed` | `false` | `true`
`property` | `Identifier` | `StringLiteral`


**测试代码**

```js
console.info('success');
console['log']('success');
```

**实现**

```js
const visitor = {
  MemberExpression(path) {
    if(t.isIdentifier(path.node.property)){
      let name = path.node.property.name
      path.node.property = t.stringLiteral(name)
    }
    path.node.computed = true;
    console.log(generator(path.node).code);
  }
}
```
