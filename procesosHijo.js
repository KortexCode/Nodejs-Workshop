const { exec, spawn } = require('child_process');
//CON EXEC
exec('ls -la', (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
})
//CON SPAWN
let process = spawn('ls', ['-la']);
process.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});