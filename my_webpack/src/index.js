import { say } from "./hello.js"
// import test from "./test.js"
document.write("hello" + say("webpack"));
// import test from "./test"

//获取配置 根据配置信息启动webpack，执行构建
//1.从入口模块开始分析
//有那些依赖
//转换代码

//2.递归的分析其他依赖模块
//有那些依赖
//转换代码

//3.生成可以在浏览器执行的bundle文件