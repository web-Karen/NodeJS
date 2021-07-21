// web服务
// ajax --> api --> web server(node.js)
const http = require('http')
const server = http.createServer((req,res) => {
    res.end('hello world')
})

server.listen(3000,'127.0.0.1',() => {
    console.log('服务器启动成功')
})

// 配置nodemon 
// 1.npm install nodemon -D
// 2.修改 package.json 中的启动命令 "start": "nodemon src/app.js" --> npm run start
// 3.通过增加 nodemon.json 配置指定特殊watch的文件
// 4."start": "DEBUG=* nodemon src/app.js" 打开debug