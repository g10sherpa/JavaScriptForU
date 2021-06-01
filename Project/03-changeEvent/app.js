let selectBox = document.querySelector("#course-select");
selectBox.addEventListener('change', () =>{
    let selectedOption = selectBox.value;
    let courseOption = document.querySelector("#course-option");
    courseOption.innerText = selectedOption;
})