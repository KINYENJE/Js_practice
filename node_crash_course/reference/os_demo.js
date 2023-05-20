const os = require('os')


// platform
console.log(os.platform())

/** CPU Arch */
console.log(os.arch())

/** CPU core info */
console.log(os.cpus())

/** free memory */
console.log(`free memory :${os.freemem()}`)

/** total memory */
console.log(`total memory: ${os.totalmem()}`)

/** Home directory */
console.log(os.homedir())

/** Uptime */
console.log(os.uptime())