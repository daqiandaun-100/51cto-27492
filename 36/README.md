# 36.实现数值常量加密

|本期版本| 上期版本
|:---:|:---:
`Fri May 27 08:53:03 CST 2022` | -


```js
const visitor = {
  NumericLiteral(path) {
    let value = path.node.value;
    let key = parseInt(Math.random() * (999999 - 100000) + 100000, 10);
    let cipherNum = value ^ key
    path.replaceWith(
      t.binaryExpression('^', t.numericLiteral(cipherNum), t.numericLiteral(key))
    );
    // 替换后的节点里也有 numericLiteral 节点， 会造成死循环，因此需要加入 path.skip()
    path.skip();
  }
}
```