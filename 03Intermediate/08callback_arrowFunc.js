// function isEven(element){
//     if (element % 2 ===0){
//         return true;
//     }
//     return false;
// }

// console.log(isEven(2));

var result = [2,3,4,5,6].every((e) => {
    return e%2 ===0;
});

console.log(result);