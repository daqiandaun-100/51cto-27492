# 25.Path对象详解(Path中的方法)

|本期版本|上期版本
|:---:|:---:
`Thu May 26 13:36:41 CST 2022` | -

**获取子节点/Path**

* Node: `path.node.property`
* NodePath: `path.get()`

**判断 Path 类型**

* `path.isIdentifier({name: n})`

**生成代码**

```js
generator(path.node).code
path.toString()
```

**替换整个节点**

> 替换后的节点，traverse 也是能够遍历到的。加入 `path.stop()` 替换完事就停止遍历当前节点后后续的子集诶单

* 一换一：`path.replaceWith()`
* 多换一：`path.repalceWithMultiple()`
* `path.replaceInline()`：一个参数、数组参数
* 使用字符源码替换：`path.replaceWithSourceString()`

**删除节点**

* `path.remove()`

插入节点

* `insertBefore()`、`insertAfter()`