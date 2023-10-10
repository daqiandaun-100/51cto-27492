# 35.JS标准内置对象的处理

|本期版本| 上期版本
|:---:|:---:
`Thu May 26 20:41:58 CST 2022` | -



```js
const visitor = {
  Identifier(path){
    let name = path.node.name;
    if('eval|parseInt|Date'.indexOf(name) != -1){
      path.replaceWith(
        t.memberExpression(t.identifier('window'), t.stringLiteral(name), true)
      )
    }
  }
}
```