const eno = () => {
  return "i m one";
};

// const deno = () => {
//   setTimeout(() => {
//     return "i m two"
//   }, 3000);
// };

const deno  = () =>{
  return new Promise((resolve,reject) =>{
    setTimeout(() => {
      resolve("i m coming in 3 seconds");
    },3000);
  });
}

const feno = () => {
  return "i m three";
};

const callMe = async() =>{
  let valOne = eno();
  console.log(valOne);

  let valTwo = await deno();
  console.log(valTwo);

  let valThree = feno();
  console.log(valThree);
};

callMe();