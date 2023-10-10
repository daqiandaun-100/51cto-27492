# 27.Path对象详解(同级Path)

|本期版本|上期版本
|:---:|:---:
`Thu May 26 17:02:47 CST 2022` | -


**容器(container)**

* `container`: 容器, 并非只有 body 节点才是容器
* `key`: 当前节点在容器中的索引
* `listKey`: 容器的名字


**操作**

* `path.inList` 判断是否有同级节点
* `path.getSibling(index)` 用于获取同级 Path



 