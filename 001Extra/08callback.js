//function that is passed to another function 
//as a parameter is called callback function.

const message = () =>{
    console.log("after 4 seconds");
}

setTimeout(message,4000);