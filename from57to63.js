/* assignemnt 1 */

// function sayHello(Name, Gender) {
//     if (Gender === 'male') {
//         document.write(`Hello Mr ${Name}`);
//     }
//     else if (Gender === 'female') {
//         document.write(`Hello Miss ${Name}`);
//     }
//     else if (Gender === undefined) {
//         document.write(`Hello ${Name}`);
//     }
// }

// sayHello("AHMED", "male");

/* assignment 2 */

// function calculate(firstNum, secondNum, operation) {
//     if (secondNum === undefined) {
//         console.log(`the second number doesnot exist`);
//     }
//     else if (operation === "multiply") {
//         console.log(`the multiplication equal ${firstNum * secondNum}`);
//     }
//     else if (operation === "subtract") {
//         console.log(`the subtraction equal ${firstNum - secondNum}`);
//     }
//     else if (operation === "add ") {
//         console.log(`the sum equal ${firstNum + secondNum}`);
//     }
//     else if (operation === undefined) {
//         console.log(`the sum equal ${firstNum + secondNum}`);
//     }



// }

// calculate(20); // Second Number Not Found
// calculate(20, 30); // 50
// calculate(20, 30, 'add'); // 50
// calculate(20, 30, 'subtract'); // -10
// calculate(20, 30, 'multiply'); // 600

/* assignment 4 */


// function checkStatus(a, b, c) {
//     let Name;
//     let age;
//     let state;
//     let newstate;

//     let data = [a, b, c];
//     for (i = 0; i < data.length; i++) {
//         if (typeof data[i] === "number") {
//             age = data[i];
//         }
//         else if (typeof data[i] === "string") {
//             Name = data[i];
//         }
//         else if (typeof data[i] === "boolean") {
//             state = data[i];
//         }
//     }
//     if (state === true) {
//         newstate = "you are avialable for hire";
//     }
//     else if (state === false) {
//         newstate = "you are not avialable";
//     }


//     console.log(`Hello ${Name} your age is ${age} , ${newstate} `);

// }

// checkStatus("osama", 38, true);


/* assignment 6 */

function multiplyNumbers(...numbers) {
    let result = 1;
    for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] === "number") {
            result *= parseInt(numbers[i]);
        }
        else if (typeof numbers[i] != "number") {
            continue;

        }
    }
    console.log(`result is ${result}`);
}

multiplyNumbers(10, 20);
multiplyNumbers(10, 20);
multiplyNumbers("A", 10, 30);
multiplyNumbers(100.5, 10, "B");