
let addClass = document.getElementsByClassName("classes-to-add")[0];
let CurrentElement = document.getElementsByClassName("element current")[0];
let ClassToShow = document.querySelector(".classes-list");
let removeClass = document.getElementsByClassName("classes-to-remove")[0];



//add class 
addClass.addEventListener("blur", function () {


    let LowerCase = addClass.value.toLowerCase().split(" ");


    for (let i = 0; i < LowerCase.length; i++) {
        console.log(LowerCase[i]);
        CurrentElement.classList.add(LowerCase);

    }



    ShowClass();
    // to clear the field after input
    addClass.value = '';
})




removeClass.addEventListener("blur", function () {


    CurrentElement.classList.remove(removeClass.value);
    ShowClass();
    removeClass.value = '';

})



function ShowClass() {

    if (CurrentElement.classList == " ") {
        ClassToShow.textContent = `No classes to show`
    }

    else {

        ClassToShow.textContent = `${CurrentElement.classList}`;
    }
}