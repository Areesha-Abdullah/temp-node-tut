// const {createReadStream} = require('fs')
// //default buffer size is 64kb last one is remainder
// //to control the buffer size we use property of highwatermark in which we write defAULT size and encoding scheme
// const  stream = createReadStream('./content/big.txt',{highWaterMark: 32000, encoding: 'utf8'})

// // stream is also connect to event emiiter class and use the on function to listen to the event and stream use the event name 'data'

// stream.on('data', (result)=>{
//     console.log(result)
// })
// //we have error event as well
// stream.on('error',(err)=>{
// console.log(err)
// })


// const http = require('http')
// const fs = require('fs')
// const server = http.createServer((req,res)=>{
//   const text = fs.readFileSync('./content/big.txt', 'utf8')
//  res.end(text)

//   })
   

// server.listen(5000)





















const http = require('http')
const fs = require('fs')
const server = http.createServer((req,res)=>{
  const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
  fileStream.on('open', ()=>{
    fileStream.pipe(res)

  })
fileStream.on('error',(err)=>{
res.end(err)
})
  })
   

server.listen(5000)