const {getAst, getDependcies, getCode} = require("./parser")
module.exports = class Complier {
    constructor(options) {
        // console.log(options);
        this.entry = options.entry;
        this.output = options.output;
        this.modules = [];
    }
    run() {
        const info = this.build(this.entry);
        this.modules.push(info);

        for (let i = 0; i < this.modules.length; i++) {
            const item = this.modules[i];
            const { dependencies } = item;
            if (dependencies) {
                for (let j in dependencies) {
                    this.modules.push(this.build(dependencies[j]))
                }
            }
        }
        //转换数据结构
        const obj = {};
        this.modules.forEach(item=>{
            obj[item.fileName] = {
                dependencies: item.dependencies,
                code: item.code
            }
        }
            )
        console.log(obj);
        
    }
    build(fileName) {
        let ast = getAst(fileName)
        let dependencies = getDependcies(ast, fileName)
        let code = getCode(ast);
        return {
            fileName,
            dependencies,
            code
        }
    }
}