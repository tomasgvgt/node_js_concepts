const process = require('process');

process.on('uncaughtException', (err, origin)=>{
    console.log(err.message);
    console.log(origin);
})

funcionQueNoExiste();
