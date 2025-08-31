const os = require("os");

const user = os.userInfo();

console.log(user);

console.log(`the system uo time is ${os.uptime()} seconds`);

const currentOs = {
  type: os.type(),
  user: os.userInfo(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOs);
