const fs = require('fs')
const generator = require("@babel/generator").default;
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const t = require("@babel/types");

const jscode = fs.readFileSync("./demo.js", {
  encoding: "utf-8"
})

let ast = parser.parse(jscode)


// let visitor = {};
// visitor.FunctionExpression = function(path){}

const updateParamNameVisitor = {
  Identifier(path){
    
    if(path.node.name === this.paramName) {
      path.node.name = "x"
    }
  }
}

const  visitor = {
  FunctionExpression(path){
    const paramName = path.node.params[0].name;
    // traverse 并非必须从头遍历，可以在任意节点向下遍历
    // 还可以额外传入一个对象，在对应的 `visitor` 中用 this 去引用它
    path.traverse(updateParamNameVisitor, {paramName})
  }
}
traverse(ast, visitor)

let code = generator(ast).code
fs.writeFile('./demoNew.js', code ,(err)=>{});