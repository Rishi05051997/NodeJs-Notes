const os = require('os');

/// info about current user
const user = os.userInfo();
console.log(user)

// methos returns the system uptimr in seconds



console.log(`The Ststem Uptime is ${os.uptime()} seconds`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem : os.totalmem(),
    freeMem: os.freemem(),
    
}

console.log(currentOs);