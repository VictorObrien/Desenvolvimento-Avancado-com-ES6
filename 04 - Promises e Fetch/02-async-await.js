// ES7 - Async / Await
const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12345);
    }, 1000);
})

const simpleFunc = async () => {
    const data = await Promise.all([
        asyncTimer(),
        fetch('/data.json').then(respStream => respStream.json())
    ]);

    return data;
};

simpleFunc().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})