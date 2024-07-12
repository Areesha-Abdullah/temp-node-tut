const http = require('http')

// let server = http.createServer((req,res)=>{
//     res.write('welcome to our first page')
//     res.end()
// })

// // server.listen(4000) ///first web page

// let server = http.createServer((req,res)=>{
//     if(req.url === '/'){
//         res.end('welcome to our first page')
//     }
//     else if(req.url === '/about'){
//         res.end('welcome to our about page')
//     }
//     else{ res.end(`
//         <h1>Ooops!</h1>
//         <p>page not found</p>
//         <a href="/">back home</a>
//         `)
//        }
    
// })

// server.listen(4000)


const server = http.createServer((req,res)=>{
    if (req.url === '/'){
        res.end ("home page")
    }
    else if (req.url === '/about'){
        for (let i = 0; i<100; i++){
            for (let j=0; j<10; j++){
                console.log(i, j)
            }
        }
        res.end ("about page");
    }
    else{
        res.end ("error page")
    }
   
})
server.listen(5000)