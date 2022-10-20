const fs = require('fs');

let poem = '';

const myReaderStream = fs.createReadStream('burnt_norton.txt');

myReaderStream.setEncoding('utf-8');

myReaderStream.on('data', (chunk)=>{
    poem += chunk;
});

myReaderStream.on('end', ()=>{
    console.log(poem);
})

myReaderStream.on('error', (err)=>{
    console.log(err.message);
})


//Transform the poem to mayus and send it to stdout.


