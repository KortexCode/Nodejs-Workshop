const os = require("os");

console.log("Información del sistema:");

const freeMemory = () => {
  return os.freemem() / 1000000000;
};

console.table({ SystemOp: os.platform(), memoryGB: freeMemory() });
