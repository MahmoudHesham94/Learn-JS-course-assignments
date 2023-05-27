/* assignment 2 */

// let itsMe = () => {
//     return `Iam A Normal Function`;
// }
// console.log(itsMe());

// let urlCreate = (protocol, web, tld) => {
//     return `${protocol}://www.${web}.${tld}`;
// }

// console.log(urlCreate("https", "elzero", "org"));

/* assignment 4*/


function specialMix(...data) {
    let sumresult = 0;

    for (let i = 0; i < data.length; i++) {
        data[i] = parseInt(data[i]);
        if (typeof data[i] === "number") {
            sumresult += data[i];
        }
        else if (isNaN(data[i] == false)) {
            continue;
        }
        else if (isNaN(data[i] == true)) {
            sumresult += data[i];
        }
    }
    if (sumresult == 0) {
        console.log(`all are strings`);
    }
    else if (sumresult != 0) {
        console.log(`the sum equal to ${sumresult}`);
    }
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test"));