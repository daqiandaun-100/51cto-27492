const generator = require("@babel/generator").default;
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const t = require("@babel/types");

// 用途一: 判断节点
// traverse(ast, {
//   enter(path){
//     // path.node.type === "Identifier"
//     t.isIdentifier(path.node)

//     // path.node.type === 'Identifier' && path.node.name === 'n'
//     t.isIdentifier(path.node, {name: 'n'})

    
//   }
// })


// 用途二: 最主要的功能是可以方便的生成新的节点
// (1) return a + b + 1000;
let a = t.identifier('a')
let b = t.identifier('b')
let binExpr = t.binaryExpression("+", a, b)
let localAst = t.returnStatement(
  t.binaryExpression("+", binExpr, t.numericLiteral(1000))
)

let code = generator(localAst).code;
console.log(code)

// 不同的字面量需要调用不同的方法生成。当生成比较多的字面的时候，会很麻烦。其实在 Babel 中还提供了 `valueToNode` 方法
// (2) { name: "abc" }
localAst = t.valueToNode({name: 'abc'})
code = generator(localAst).code;
console.log(code)

// 自己构造json
// (3) 1000 / 2000
let obj = {};
obj.type = 'BinaryExpression';
obj.left = {type: 'NumericLiteral', value: 1000}
obj.operator = '/'
obj.right = {type: 'NumericLiteral', value: 2000}
code = generator(obj).code;
console.log(code)