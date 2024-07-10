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

//using async await




// now lets do it asynchronously 
const {readFile, writeFile} = require('fs').promises

console.log('start')
async function main(){
    try{
        let firstasync = await readFile('./content/firstasync.txt', 'utf8')
        console.log(firstasync)
        let secondasync = await readFile('./content/secondasync.txt', 'utf8')
        console.log(secondasync)
        await writeFile('./content/result-sync1.txt', `here is the result: ${firstasync},${secondasync}`,{flag : 'a'})
        console.log('middle')
    }
    catch(err){
        console.error(err);
    }
}

main()
console.log('end')
