# 37.实现字符串常量加密

|本期版本| 上期版本
|:---:|:---:
`Wed May 25 09:01:38 CST 2022` | -


```js
const visitor = {
  StringLiteral(path){
    let value = btoa(path.node.value);
    let encStr = t.callExpression(
      t.identifier('atob'),
      [t.stringLiteral(value)]
    )
    path.replaceWith(encStr);
    // 替换后的节点里也有 StringLiteral 节点， 会造成死循环，因此需要加入 path.skip()
    path.skip()
  }
}
```