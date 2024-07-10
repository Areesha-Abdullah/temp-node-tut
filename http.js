const http = require('http')

// let server = http.createServer((req,res)=>{
//     res.write('welcome to our first page')
//     res.end()
// })

// server.listen(4000) ///first web page

let server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('welcome to our first page')
    }
    else if(req.url === '/about'){
        res.end('welcome to our about page')
    }
    else{ res.end(`
        <h1>Ooops!</h1>
        <p>page not found</p>
        <a href="/">back home</a>
        `)
       }
    
})

server.listen(4000)