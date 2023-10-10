# 26.Path对象详解(父级Path)


|本期版本|上期版本
|:---:|:---:
`Thu May 26 13:47:34 CST 2022` | -

* 其中 `parentPath` 类型为 `NodePath`, 所以他是父级 `Path`。`parent` 类型为 `Noe`，所以它是父节点
* `findParent()`: 向上遍历语法树树，直到满足相应的条件。不包含当前节点
*  `find`: 查找范围包含当前节点。
* `getFunctionParent()`: 与当前节点最接近的父函数
* `getStatementParent()`: 语句节点