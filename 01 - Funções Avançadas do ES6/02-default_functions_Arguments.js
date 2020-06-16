/*function multiply(a=2, b=1){
    return a*b;
}

/**Com o ES6 foi possícel definir um valor
 * padrão para um argumento da função, caso esse argumento 
 * não seja passado no momento em que a função é invocada.
 * utilizamos o sinal de '=' e logo em seguida o valor que será 
 * considerado 
 */


// Lazy evaluation
function randonNumber() {
    console.log('Generating a random number...');

    return Math.random() * 10;
}

function multiply(a, b = randonNumber()) {
    return a * b;
}

console.log(multiply(5));
console.log(multiply(5));
