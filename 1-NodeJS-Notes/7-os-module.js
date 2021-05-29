const os = require('os');

/// info about current user
const user = os.userInfo();
console.log(user)
//// output is --->>>
// {
//     uid: -1,
//     gid: -1,
//     username: '91902',
//     homedir: 'C:\\Users\\91902',
//     shell: null
//  }


// methos returns the system uptimr in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);
///// output is ---->>>>
// The System Uptime is 669284 seconds


const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem : os.totalmem(),
    freeMem: os.freemem(),
    
}

console.log(currentOs);
//// output is ---->>> 
// {
//     name: 'Windows_NT',
//     release: '10.0.19041',
//     totalMem: 8410091520,
//     freeMem: 2082390016
// }