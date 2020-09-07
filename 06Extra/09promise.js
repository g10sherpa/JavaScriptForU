//promises
// > promises are one of the ways to deal with asynchronous
// operations in javascript.

const myPromise = new Promise((resolve,reject) =>{
    let connection = false;

    if(connection){
        resolve('connection established');
    }else{
        reject('connection error');
    }
});

myPromise.then((message)=>{
    console.log(message);
}).catch((message) =>{
    console.log(message);
});