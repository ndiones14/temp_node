// don't need ./ for built in modules
const os = require('os')

const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds

console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)