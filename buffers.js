// const buffercito = Buffer.alloc(5);
// const buffercito = Buffer.from([1, 2, 3])
// const buffercito = Buffer.from('Hola amiguitos')


const buffercito = Buffer.alloc(26);
console.log(buffercito);

function fillBufferWithAlphabet(){
    for(let i = 0; i < 26; i++){
        buffercito[i] = i + 97;
    }
}
fillBufferWithAlphabet();
console.log(buffercito);
buffercito.set
console.log(buffercito.toString());