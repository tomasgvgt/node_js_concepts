const {Transform} = require('stream');
const fs = require('fs');
const { stderr, stdout } = require('process');

let poem = '';

const myReaderStream = fs.createReadStream('burnt_norton.txt');

myReaderStream.setEncoding('utf-8');

myReaderStream.on('data', (chunk)=>{
    poem += chunk;
});

const upperCaseTransform = new Transform({
    transform(chunk, encoding, callback){
        this.push(chunk.toString().toUpperCase());
        callback();
    }
})

myReaderStream.pipe(upperCaseTransform).pipe(process.stdout);
