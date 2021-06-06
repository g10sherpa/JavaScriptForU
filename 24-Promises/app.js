/* jshint esversion:6*/

// let cleanCamera = new Promise((resolve, reject) => {
//   //cleaning camera
//   let isDone = false;
//   if (isDone) {
//     resolve("cleaning is done");
//   } else {
//     reject("cleaning is not done");
//   }
// });

// cleanCamera
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//dependent promises
let buildProject = new Promise((resolve, reject) => {
  setTimeout(() => {
    let isDone = true;
    if (isDone) {
      resolve("project is finished");
    } else {
      reject("project is not finished");
    }
  }, 1000);
});

let attendTechnicalRound = new Promise((resolve, reject) => {
  setTimeout(() => {
    let isDone = true;
    if (isDone) {
      resolve("attend technical round is done and is successful");
    } else {
      reject("not successful technical round");
    }
  }, 2000);
});

let managerRound = new Promise((resolve, reject) => {
  setTimeout(() => {
    let isDone = true;
    if (isDone) {
      resolve("successful manager round");
    } else {
      reject("not successful manager round");
    }
  }, 3000);
});

let hrRound = new Promise((resolve, reject) => {
  setTimeout(() => {
    let isDone = true;
    if (isDone) {
      resolve("hrRound is finished ,get job");
    } else {
      reject("hrRound is not finished");
    }
  }, 4000);
});

buildProject
  .then((message) => {
    let result = `${message} ->`;
    console.log(message);
    attendTechnicalRound
      .then((message) => {
        result += `${message} ->`;
        console.log(message);
        managerRound
          .then((message) => {
            result += `${message} ->`;
            console.log(message);
            hrRound
              .then((message) => {
                result += `${message} `;
                console.log(message);
                // console.log(result);
              })
              .catch((err) => {
                console.error(err);
              });
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error(err);
      });
  })
  .catch((err) => {
    console.error(err);
  });
