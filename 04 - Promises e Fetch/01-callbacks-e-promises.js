//Promises

const doSomethingPromise = () => new Promise((resolved, reject) => {
    setTimeout(function () {
        // did something
        resolved('first data');
    }, 1000);
})

const doOtherThingPromise = () => new Promise((resolved, reject) => {
    setTimeout(function () {
        // did other thing
        resolved('Second data');
    }, 1000);
})

Promise.all([doSomethingPromise(), doOtherThingPromise()]).then((data) => {
    console.log(data);
}).catch(err => {
    console.log(err)
});

/* Outra forma de resolver promise é com o race
 Nessa forma a que for resolvida primeiro será execultada*/

 Promise.race([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err)
});

/* doSomethingPromise()
    .then(data => {
        console.log(data.split(''));
        return doOtherThingPromise();
    })
    .then(data2 => console.log(data2.split('')))
    .catch(error => console.log('Ops', error)); */

/* Um Promise pode ter 3 estados:
 * - Pending -> Quando está pendente
 * - Fulfilled -> Quando completo sem problemas
 * - Rejected -> Quando ocorreu algum erro com a promise
 */



// Como era feito antes os callbacks
/* function doSomething(callback) {
    setTimeout(function () {
        // did something
        callback('first data');
    }, 1000);
}

function doOtherThing(callback) {
    setTimeout(function () {
        // did other thing
        callback('Second data');
    }, 1000);
}

// Exemplo de Callback Hell
function doAll() {
    try {
        doSomething(function (data) {
            var processedData = data.split('');
            try {
                doOtherThing(function (data2) {
                    var processedData2 = data2.split('');

                    try {
                        setTimeout(function () {
                            console.log(processedData, processedData2)
                        }, 1000);
                    } catch (err) {
                        // handle error
                    }
                });
            } catch (err) {
                // handle error
            }
        });
    } catch (err) {
        // handle error
    }
}

doAll() */