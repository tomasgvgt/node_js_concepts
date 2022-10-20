const {exec, spawn} = require('child_process');
const { stderr } = require('process');
//The same as:
// const exec = require('child_process').exec
// const spawn = require('child_process').spawn


exec('node console.js', (err, stdout, stderr)=>{
    if(err){
        console.error(err.msg)
    }else{
        console.log(stdout);
    }
})

let process = spawn('l', ['-la']);

process.stdout.on('data', (datos)=>{
    console.log(datos.toString());
});

process.stderr.on('data', (datos)=>{
    console.error(datos);
});

