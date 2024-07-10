// builtin module 

const os = require('os')

// info about current users 
const user = os.userInfo()
// console.log(user)

// method returns the system uptime in seconds 
// console.log(`the system uptime is ${os.uptime()} seconds`)


// useful data about my OS 
const currentOS = {
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)