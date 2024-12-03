# 23.types

|本期版本|上期版本
|:---:|:---:
`Wed Dec  4 00:24:01 CST 2024` | `Wed May 25 23:06:03 CST 2022`

* 如果要判断其他类型，只需把 is 后面的类型更改即可。
* 还有一种断言式的版本，当节点不符合要求，会抛出一场而不是返回 true 或 false

```js
t.assertBinaryExpression(maybeBinaryExpressionNode, { operator: '*'})
```