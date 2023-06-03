/* assignment 3 */

// let USD = document.querySelector("[name='dollar']");
// let div = document.querySelector(".result");

// document.oninput = function () {

//     let EGP = (USD.value) * 15.6;
//     div.textContent = `{${USD.value}} USD Dollar = {${EGP.toFixed(2)}} Egyptian Pound`;


// }

/* assignment 4 */

// let ClassOne = document.querySelector(".one");
// let ClassTwo = document.querySelector(".two");

// let TitleOne = ClassOne.title;
// let TitleTwo = ClassTwo.title;

// let Text1 = ClassOne.textContent;
// let Text2 = ClassTwo.textContent;

// ClassOne.title = TitleTwo;
// ClassTwo.title = TitleOne;

// ClassOne.textContent = Text2;
// ClassTwo.textContent = `${Text1} ${ClassOne.attributes.length} `

/* assignment 5 */

// let image = document.querySelectorAll("img");

// for (i = 0; i < image.length; i++) {
//     if (image[i].hasAttribute("alt")) {
//         image[i].setAttribute("alt", "old")


//     }
//     else image[i].alt = "Elzero new";

// }
// for (i = 0; i < image.length; i++) {
//     console.log(image[i].alt);
// }

/* assignment 6 */

let NumberOfelements = document.querySelector("[name='elements']");
let TextInput = document.querySelector("[name='texts']");
let InputType = document.querySelector("[name='type']");
let div = document.querySelector(".results");
let myBtn = document.getElementById("c2");
let element;

myBtn.onclick = function (event) {
    div.innerHTML = " ";
    event.preventDefault();

    let number = NumberOfelements.value;
    let TextEntered = TextInput.value;
    let InputUsed = InputType.value;




    for (let i = 0; i < number; i++) {
        element = document.createElement(`${InputUsed}`);
        element.setAttribute("class", "box");
        element.setAttribute("title", "element");
        element.setAttribute("id", `${i + 1}`);
        let FinalText = document.createTextNode(`${TextEntered}`);
        element.appendChild(FinalText);
        div.appendChild(element);


    }

}


// let btncreate = document.querySelector("[type = submit]");

// let divresult = document.querySelector(".results");

// btncreate.onclick = function (e) {
//     divresult.innerHTML = "";
//     let btnText = document.querySelector("[name = texts]").value;
//     let btnSelect = document.querySelector("select").value;
//     let ele = document.querySelector("[name = elements]").value;
//     let element;
//     let textElement;
//     console.log(divresult)
//     for (let i = 0; i < ele; i++) {
//         element = document.createElement(`${btnSelect}`);
//         textElement = document.createTextNode(`${btnText}`);
//         element.appendChild(textElement);
//         divresult.appendChild(element);
//     }

//     e.preventDefault();
// }






