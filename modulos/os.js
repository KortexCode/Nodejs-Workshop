const os = require("os");

console.log("Información del sistema:");

const freeMemory = () => {
  return os.freemem() / 1000000000;
};

console.table({ SystemOp: os.platform(), memoryGB: freeMemory() });

// Actived Network interfaces right now
console.log("Network Interfaces right now");
console.log(os.networkInterfaces());
console.log("");
