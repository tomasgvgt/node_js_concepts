const {factorial} = require('./modulito.js');

function asyncAddition(a, b){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('adding...')
            let c = a + b;
            resolve(c);
        }, 1000)
    })
}

//Using async await
console.time('Async addition');
(async()=>{
    let c = await asyncAddition(1, 2);
    console.log(c);
    console.timeEnd('Async addition');
})()


//Using promisese
console.time('Promise addition');
asyncAddition(1, 2)
    .then((c)=>{
        console.log(c);
        console.timeEnd('Promise addition');
    })

console.time('Factorial of number');
console.log(factorial(5));
console.timeEnd('Factorial of number');

