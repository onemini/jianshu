// 启动webpack node webpack.js
const Complier = require("./lib/complier");
const options = require("./webpack.config");

new Complier(options).run();