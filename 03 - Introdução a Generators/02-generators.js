// Generators

function hello() {
    console.log('Hello');
    console.log('From');
    console.log('Function');

}

//hello();

// Com Generator

function* hello2() { // Aplicamos o '*' na palavra function
    console.log('Hello');
    yield 1; // Utilizamos a palavra 'yield' para suspender a função

    console.log('From');
    yield 2;

    console.log('Function');
    yield 3;
}

// se chamarmos só a função ela não vai retornar nada
hello2()

// para funcionar precisamos passá-la para uma constante

const it = hello2();

console.log(it.next());
console.log(it.next());
console.log(it.next());

/* na forma acima o value vem com valor 'undefined'
    se quisermos passar algum valor para ele, precisamos atribuir para
    o 'yield'*/

function* hello3() { // Aplicamos o '*' na palavra function
console.log('Hello');
yield 1; // Utilizamos a palavra 'yield' para suspender a função

console.log('From');
const value = yield 2;

console.log(value);
yield 3;
}

const it2 = hello3();

console.log(it2.next());
console.log(it2.next());
console.log(it2.next('Outside!'));

/* function naturalNumbers(){
    let number = 0;
    while (true) {
        yield number;
        number++;
    }
}

const it3 = naturalNumbers();

console.log(it3.next());
console.log(it3.next());
console.log(it3.next());
console.log(it3.next()); */

const obj = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator]() {
        for (var i = 0; i < this.values.length; i++){
            yield this.values[i];
        }
    }
};

for (const value of obj) {
    console.log(value);
}

// POsso utilizar generators como forma de construir iteradores