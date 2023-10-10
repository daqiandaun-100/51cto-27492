# 23.types

|本期版本|上期版本
|:---:|:---:
`Wed May 25 23:06:03 CST 2022` | -

* 如果要判断其他类型，只需把 is 后面的类型更改即可。
* 还有一种断言式的版本，当节点不符合要求，会抛出一场而不是返回 true 或 false

```js
t.isIdentifier(path.noe, {name: 'n'})
path.node.type === 'Identifier' && path.node.name === 'n'
t.assertBinaryExpression(maybeBinaryExpressionNode, { operator: '*'})
```

* types 组件最主要的功能是可以方便的生成新的节点
* 不同的字面量需要调用不同的方法生成。当生成比较多的字面的时候，会很麻烦。其实在 Babel 中还提供了 `valueToNode` 方法