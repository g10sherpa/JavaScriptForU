// let marks = -80;

// if(marks<45 && marks>0){
//     console.log(`you failed the exam`)
// }else if(marks >=45 && marks<=60){
//     console.log(`you got grade C`);
// }else if(marks>60 && marks<=75){
//     console.log(`you got grade B`)
// }else if(marks>=75){
//     console.log(`you got A`)
// }else{
//     console.log(`enter the right number`);
// }

// let inRelation = true;
// let parentAgreed = false;

// if(inRelation && parentAgreed){
//     console.log(`you can marry`)
// }else{
//     console.log(`you can't marry`);
// }

// let day = new Date().getDay();
// let today = '';

// switch (day) {
//   case 0:
//     today = "sunday";
//     break;

//   case 1:
//     today = "monday";
//     break;

//   case 2:
//     today = "tuesday";
//     break;

//   case 3:
//     today = "wednesday";
//     break;

//   case 4:
//     today = "thursday";
//     break;

//   case 5:
//     today = "friday";
//     break;

//   case 6:
//     today = "saturday";
//     break;

//     default:
//         today = 'enter a proper day';
//         break;
// }

// console.log(`today is ${today}`);


let result = '';
for(let i =0; i<=5; i++){
    if(i <=4){
        result += `${i} , `;
    }else{
        result += `${i} `;
    } 
}
console.log(result);

let number = 5;
result = '';
for(let i =1; i<=number; i++){
    for(let j = 1; j<= i; j++){
        result += '* ';
    }
    result += '\n';
}
console.log(result);

numbers = '';
for (let i = 5; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    numbers += `${j} `;
  }
  numbers += "\n";
}
console.log(numbers);

