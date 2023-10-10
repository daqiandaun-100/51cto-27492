# 22.traverse与visitor

|本期版本|上期版本
|:---:|:---:
`Wed May 25 22:31:45 CST 2022` | -

* `traverse` 组件用来遍历 AST，简单的说就是把 AST 上的各个节点都走一遍
* `visitor` 其实就是一个对象，里面可以定义一些方法，用来过滤节点

	* 名字是需要遍历的节点类型， 注意大小写
	* visitor 中的方法接收一个参数，traverse 在遍历的时候会把当前节点的 Path 对象传给它。

```js
let visitor = {};

visitor.FunctionExpression = function(path){}
```


```js
const visitor{
	FunctionExpression: function(path){}
}
```

```js
const visitor = {
	FunctionExpression(path) {}
}
```

* 在遍历节点的过程中，实际上有两次机会来访问一个节点，即进入节点时(enter)与退出节点时(exit)
* 可以看出 traverse 是一个深度优先的遍历过程
* enter 的处理时机，是先处理父节点，再处理子节点
* exit 的处理时机，是先处理子节点，再处理父节点

```js
const visitor = {
	FunctionExpression: {
		// 进入/退出节点
		enter(path) {}, exit(path) {}
	}
}
```

* 还可以把方法名用`|` 分割，把同一个函数应用到多个节点

```
const visitor = {
	"FunctionExpression|BinaryExpression"(path){}
}

```

* 把多个函数应用月同一个节点

```
const func1 = (path) => {}
const func2 = (path) => {}

const visitor = {
	FunctionExpression : {
		enter: [func1, func2]
	}
}
```

* traverse 并非必须从头遍历，可以在任意节点向下遍历
* 在使用 `path.traverse` 是，还可以额外传入一个对象，在对应的 `visitor` 中用 this 去引用它

```js
path.traverse
```

