var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

// Com o destructuring
var [apple2, banana2, orange2, [tomato2]] = [
    'Apple',
    'Banana',
    'Orange',
    ['Tomato']
];

console.log(tomato, tomato2);

//Jeito normal de pegar valores de objetos
var obj = {
    name:'Celso',
    props: {
        age: 26,
        favoriteColors: ['black', 'blue']
    }
}

var name = obj.name
var age = obj.props.age;

// Pegar valores de objetos com destructuring

var {name: name2} = obj
var {
    props:{age: age2, favoriteColors: [color1, color2]}
} = obj;

console.log(name2);
console.log(age2);
console.log(color1);
