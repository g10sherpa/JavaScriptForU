// find the number of 'o' in the given string

let msg = "good morning tom";
let findZeros = (str) => {
    let count = 0;
    for(let i=0; i<=str.length-1;i++){
        let char = str.charAt(i);
        if(char ==='o' || char ==='O'){
            count++;
        }
    }
    return count;
}
console.log(`the total no of zeros are : ${findZeros(msg)}`);

//find the reverse string

msgs = "good morning";
let reverseString = (str1) => {
    let tempString = '';
    for(let i=str1.length-1; i>=0; i--){
        let chars = str1.charAt(i);
        tempString += chars;
    }
    return tempString;
}
console.log(`${msgs} => ${reverseString(msgs)}`);

// check the given string is palindrome or not

str2 = 'aba';
let isPalindrome = (a) => {
    // if(str2 === reverseString(a)){
    //     return true;
    // }else{
    //     return false;
    // }
    return (str2 === reverseString(str2));
};
console.log(`${str2} is palindrome ? ${isPalindrome(str2)}`);

// triangle string one

fullName = 'gyamzo sherpa';
let triangleOne = (str3) => {
    let temp = '';
    for(let i=1; i<=str3.length; i++){
        temp += `${str3.substr(0,i)} \n`; 
    }
    return temp;
}
console.log(triangleOne(fullName));

//triangle string two

fullName2 = "gyamzo sherpa";
let triangleTwo = (str4) => {
  let temp2 = "";
  for (let i = 0; i <= str4.length-1; i++) {
    temp2 += `${str4.substr(i)} \n`;
  }
  return temp2;
};
console.log(triangleTwo(fullName2));