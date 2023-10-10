# 13.代码执行流程防护原理(流程平坦化)

|本期版本| 上期版本
|:---:|:---:
`Wed May 25 17:15:02 CST 2022` | -


* 把代码分块，并且打乱代码块的顺序，分别塞到不同的 case 块中

```
var i = 0;
var arrStr = '7|5|1|3|2|4|6'.split('|')

while(!![]){
	switch(arrStr[i++]){
		case '1'
		case '2'
		case '3'
		case '4'
	}
	break;
}
```