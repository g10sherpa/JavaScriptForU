let registrationForm = document.querySelector("#register-form");
registrationForm.addEventListener("submit", (event) => {
  event.preventDefault(); //stops auto form submission
  if (validateForm()) {
    alert("Form submitted successfully");
  } else {
    alert("something went wrong");
  }
});

let validateForm = () => {
  return (
    checkUserName() & checkEmail() & checkPassword() & checkConfirmPassword()
  );
};

let checkUserName = () => {
  let inputEl = document.querySelector("#username");
  let inputFeedback = document.querySelector("#username-feedback");
  let regExp = /^[a-zA-Z0-9]{4,10}$/;
  if (regExp.test(inputEl.value)) {
    makeValid(inputEl, inputFeedback);
    return true;
  } else {
    makeInValid(inputEl, inputFeedback);
    return false;
  }
};

//make valid
let makeValid = (inputEl, inputFeedback) => {
  inputEl.classList.add("is-form-valid");
  inputEl.classList.remove("is-form-invalid");
  inputFeedback.classList.add("text-success");
  inputFeedback.classList.remove("text-danger");
  inputFeedback.innerText = "looks good";
};

//make invalid
let makeInValid = (inputEl, inputFeedback) => {
  inputEl.classList.remove("is-form-valid");
  inputEl.classList.add("is-form-invalid");
  inputFeedback.classList.remove("text-success");
  inputFeedback.classList.add("text-danger");
  inputFeedback.innerText = `please enter a ${inputEl.placeholder}`;
};

//email
let checkEmail = () => {
  let inputEl = document.querySelector("#email");
  let inputFeedback = document.querySelector("#email-feedback");
  let regExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (regExp.test(inputEl.value)) {
    makeValid(inputEl, inputFeedback);
    return true;
  } else {
    makeInValid(inputEl, inputFeedback);
    return false;
  }
};

//password
let checkPassword = () => {
  let inputEl = document.querySelector("#password");
  let inputFeedback = document.querySelector("#password-feedback");
  let regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  if (regExp.test(inputEl.value)) {
    makeValid(inputEl, inputFeedback);
    return true;
  } else {
    makeInValid(inputEl, inputFeedback);
    return false;
  }
};

//confirm password
let checkConfirmPassword = () => {
  let inputEl = document.querySelector("#c-password");
  let passwordEl = document.querySelector("#password");
  let inputFeedback = document.querySelector("#cpassword-feedback");
  let regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  if (regExp.test(inputEl.value) && inputEl.value === passwordEl.value) {
    makeValid(inputEl, inputFeedback);
    return true;
  } else {
    makeInValid(inputEl, inputFeedback);
    return false;
  }
};

//username field with keyup event
let usernameEl = document.querySelector("#username");
usernameEl.addEventListener("keyup", () => {
  checkUserName();
});

//email
let emailEl = document.querySelector("#email");
emailEl.addEventListener("keyup", () => {
  checkEmail();
});

//password
let passwordEl = document.querySelector("#password");
passwordEl.addEventListener("keyup", () => {
  checkPassword();
});

//confirm password
let cPasswordEl = document.querySelector("#c-password");
cPasswordEl.addEventListener("keyup", () => {
  checkConfirmPassword();
});
