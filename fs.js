// const{readFileSync, writeFileSync}  = require('fs')

// const first = readFileSync('./content/first.txt', 'utf8')
// const second = readFileSync('./content/second.txt', 'utf8')

// console.log(first,second)
 

// //it will overwrite in a file and if file doesnt exist it will create a file and write in it
// // writeFileSync('./content/result-sync.txt', `here is the result: ${first},${second}`)

// //instead of overwriting you can append by just adding   flag = a i.e append
// writeFileSync('./content/result-sync.txt', `here is the result: ${first},${second}`, {flag: 'a'})

// console.log('start')

// // now lets do it asynchronously 
// const {readFile, writeFile} = require('fs')
// readFile('./content/firstasync.txt', 'utf8',(err,result)=>{
//     if (err){
//         console.log(err)
//         return
//     }
//     let firstasync = result
//     console.log(firstasync)
//     readFile('./content/secondasync.txt', 'utf8',(err,result)=>{
//     if (err){
//         console.log(err)
//         return
//     }
//     let secondasync = result
//     console.log(secondasync)
//     writeFile('./content/result-sync1.txt', `here is the result: ${firstasync},${secondasync}`,(err)=>{
//         if (err){
//             console.log(err)
//             return
//         }
//         console.log('task1')
//     })
// })
// })
// console.log('task2')
// // this is callback helll 








// //using .then chain of promise

// const {readFile, writeFile}=require('fs')

// const getinfo = (path)=>{
//     return new Promise((res,rej)=>{
//         readFile(path, 'utf8', (err,data)=>{
//             if (err){
//                 rej(err)
//             }
//             else{
//                 res(data)
//             }
//         })
       
//     })
// }

// getinfo('./content/first.txt').then((res)=>{console.log(res)
//  getinfo('./content/second.txt').then((res)=>console.log(res))})





//using async await

const {readFile, writeFile}=require('fs')

const getinfo = (path)=>{
    return new Promise((res,rej)=>{
        readFile(path, 'utf8', (err,data)=>{
            if (err){
                rej(err)
            }
            else{
                res(data)
            }
        })
       
    })
}

const main = async()=>{
    try{
        const first = await getinfo('./content/first.txt')
        console.log(first);
        const second = await getinfo('./content/second.txt')
        console.log(second);
    }
   catch(error){
    console.log(error);
   }
}

main()



// // using promisify it basically is the alternative of the whole promise block promisify is a method of util module
// const {readFile, writeFile} = require('fs')
// const util= require('util')
// const readpromise = util.promisify(readFile)
// const writepromise = util.promisify(writeFile)

// // promisify()` in Node. js converts callback-based methods to promise-based, aiding in managing asynchronous code more cleanly. Promisification” is a long word for a simple transformation. It's the conversion of a function that accepts a callback into a function that returns a promise.

// const main = async()=>{
//     const first =await readpromise('./content/first.txt', 'utf8')
    
//     const second =await readpromise('./content/second.txt', 'utf8')
//     console.log(first , second)
//     await writepromise('./content/promisify', 'this is a promisify file')
// }


// main()


// // this is the most easiest approach 
// // now lets do it asynchronously 
// const {readFile, writeFile} = require('fs').promises

// console.log('start')
// async function main(){
//     try{
//         let firstasync = await readFile('./content/firstasync.txt', 'utf8')
//         console.log(firstasync)
//         let secondasync = await readFile('./content/secondasync.txt', 'utf8')
//         console.log(secondasync)
//         await writeFile('./content/result-sync1.txt', `here is the result: ${firstasync},${secondasync}`,{flag : 'a'})
//         console.log('middle')
//     }
//     catch(err){
//         console.error(err);
//     }
// }

// main()
// console.log('end')
