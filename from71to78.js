/* assignment 1 */

// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// let word = mix.map(function (el) {
//     return isNaN(el) ? el : "";


// }).reduce(function (acc, current) {
//     return `${acc}${current}`;

// });

// console.log(word);

/* assignment 2 */

// let myString = "EElllzzzzzzzeroo";

// let word = myString.split("").filter(function (el, index) {

//     return myString.indexOf(el) === index;

// }).join("");

// console.log(word);

/* for illustration check the link */
/*
https://dev.to/soyleninjs/3-ways-to-remove-duplicates-in-an-array-in-javascript-259o
*/


/* assignment 4 */

// let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// let result = numsAndStrings.filter(function (el) {
//     return isNaN(el) ? "" : el;
// }).map(function (el) {
//     return el * (-1);
// });

// console.log(result);

/* assignment 5 */

let nums = [2, 12, 11, 5, 10, 1, 99];

let result = nums.reduce(function (acc, current) {
    return current % 2 ? acc + current : acc * current;

}, 1)
console.log(result);