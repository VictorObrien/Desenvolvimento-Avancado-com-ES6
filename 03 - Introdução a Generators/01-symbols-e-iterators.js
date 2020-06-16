// Symbols - são uma maneira de gerar um identificador único

const uniqueId = Symbol('Hello');

/* const obj = {
    [uniqueId]: 'Hello'
}; */

/* Well Know symbols
Symbol.iterator
Symbol.split
Symbol.toStringTag
 -- Esses symbols podem ser usados para passar meta propriedades para objetos
*/

//Usando o Iterator
const arr = [1, 2, 3, 4]
const str = 'Digital innovation one'
/* const it = arr[Symbol.iterator]();

while (true) {
    let {
        value,
        done
    } = it.next()

    if (done) {
        break;
    }
    console.log(value);
} */

// No ES6 não precisamos mais chamar o iterador, podemos usar  'for of'

/* for (const value of arr) {
    console.log(value);
}

for (const value of str) {
    console.log(value);
}

const arr2 = [] */


// função iteradora em um objeto

const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;
        return {
            next: () => {
                i++;

                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                };
            }
        };
    }
};

for (const value of obj) {
    console.log(value);
}

const arr2 = [...obj];
console.log(arr2);