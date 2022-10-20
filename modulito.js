const suma = function(a, b){
    return a + b
}

const resta = function(a, b){
    return a - b;
}

const factorial = function(a){
    if(a === 1){
        return a;
    }
    return a * factorial(a - 1)
}


module.exports = {
    sumita: suma,
    restica: resta,
    factorial
}