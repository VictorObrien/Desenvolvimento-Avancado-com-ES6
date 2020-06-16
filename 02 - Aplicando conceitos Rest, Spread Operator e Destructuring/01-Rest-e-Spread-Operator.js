function sum(a,b) {
    return a + b
}

/* Agora vamos incrmentar essa função onde os argumentos passados sejam
infinitos, e não somente a e b */

function sum2(a,b){
    var value = 0;
    
    for (var i = 0; i < arguments.length; i++) {
        value += arguments[i];        
    }
    return value;
}

console.log(sum2(5,5,5,5,5,5));

/*
* O ES6 trouxe o operador rest  (...)
* Ele é parecido com o 'arguments', a diferença está no prototype dele
* o 'arguments' é do tipo object, já o 'rest' é do tipo array
* com isso, o 'rest' traz todas as funções do array
*/

function sum3(...args){
    return args.reduce((acc, value) => acc + value, 0);
}

console.log(sum3(5,5,5,5,5,5));

/**
 * o arguments em funções arrows dá erro de referência
 * então por isso usamos o operador rest nesses tipos de funções
 */

 const sum4 = (a,b,...rest) => {
     console.log(a, b, rest)
 }
 /**
  * no caso acima o operador rest forma um array com os valores restantes
  * vai ser impresso assim: 5, 5, [5, 5, 5, 5]
  */
 console.log(sum4(5,5,5,5,5,5));

 // SPREAD OPERATOR

 const multiply = (...args) => args.reduce((acc, value) => acc * value, 1)

 // Aplicação do spread
const sum5 = (...rest) => {
    return multiply(...rest) //utilizando o spread
}

/**
 * Enquanto o rest oparator pega todos os parâmetros de uma função
 * e passa para um array, o spread operator, no caso acima, pega todos os
 * itens do array (array do rest) e passa como parâmetro para a funçao multiply
 */

 /** Spread Operator pode ser usado em:
  * - Strings;
  * - Arrays;
  * - Literal Objects;
  * - objetos iteraveis.
  */

// Funcionamento em strings
const str = 'Digital Innovattion One';

function logArgs (...args){
    console.log(args);
}

logArgs(...str);
// Quebrou a string em caracteres e jogou para um array

// Funcionamento em array
const arr = [1, 2, 3, 4]

function logArgs2 (a, b, c){
    console.log(a, b, c);
}

logArgs2(...arr);
// quebrou o array e passou os números individualmente

//Spread também pode ser usado para construir array
const arr2 = [...arr, 5, 6, 7];
console.log(arr2);

//Funcionameto em Objetos Literais
const obj = {
    test: 123
};

const obj2 = {
    ...obj,
    test2: 'hello'
}

console.log(obj2);

// a ordem em que é feita o spread dentro do objeto é importante.