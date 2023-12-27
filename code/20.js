const generator = require("@babel/generator").default;
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const t = require("@babel/types");

const jscode = fs.readFileSync("./demo.js", {
  encoding: "utf-8"
})

let ast = parser.parse(jscode)

// 在这里对 AST 进行一些列的操作
let code = generator(ast).code
fs.writeFile('./demoNew.js', code ,(err)=>{});