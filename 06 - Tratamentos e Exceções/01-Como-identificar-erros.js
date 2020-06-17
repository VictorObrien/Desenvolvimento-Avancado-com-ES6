

/* try{
console.log(name);
const name = 'Victor Obrien';
} catch (err) {
    console.log('Qual é a da parada: ', err);
}

console.log('Keep going...'); */

// podemos também utilizar mensagens no erro

class CustomError extends Error {
    constructor({message, data}) {
        super(message);
        this.data = data;
    }
}

try{
    const name = 'Victor Obrien';

    const myError = new CustomError({
        message: 'Custom message on custom error',
        data: {
            type: 'Server error'
        }
    });
    
    throw myError;

    } catch (err) {
        console.log(err);
        console.log(err.data);
    }finally {    
    console.log('Keep going...');
    }