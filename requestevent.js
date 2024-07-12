const http = require('http')

// const server = http.createServer((req,res)=>{
//     res.end("welcome")

// })

// using event emitter api 
const server = http.createServer()
//here server has the method on that listen for req event
// so bts server emits the request event and then we can listen to it so here our event name should be request as its present in server as an an event of this event name that the server will emit
//emits requests event
// subscribe to it /listen for it /respond to it
server.on('request',(req, res)=>{
    res.end('welcomesssss')
})





server.listen(5000)
