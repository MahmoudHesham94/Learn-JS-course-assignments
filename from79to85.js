/* assignment 1 */

// let member = {
//     name: "ElZero",
//     age: 38,
//     country: "Egypt",
//     fullDetails: function () {
//         return `my name is ${member.name} , my Age is ${member.age} , i live in ${member.country}`;
//     }

// };

// console.log(member.name); // Elzero
// console.log(member.age); // 38
// console.log(member.country); // Egypt
// console.log(member.fullDetails());

/* assignment 2 */

// let member = {
//     name: "ElZero",
//     age: 38,
//     country: "Egypt",

// }


// let member2 = new Object({
//     name: "Mahmoud",
//     age: 28,

// });


// let member3 = Object.create(member2);
// member3.name = "Ahmed";

// let member4 = {};

// let lastMember = Object.assign(member4, member3);
// member4.name = "Hesham";

// console.log(member.name);
// console.log(member2.name);
// console.log(member3.name);
// console.log(member4.name);


/* assignment 3 */

// let a = 1;

// let threeNums = {
//     b: 2,
//     c: 3,
//     d: 4,
// };

// let twoNums = {
//     e: 5,
//     f: 6,
// };

// // Create Your Object Here in One Line
// let finalObject = Object.assign({ a }, threeNums, twoNums);

// console.log(finalObject);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/

/* assignment 4 */

// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

// Code One => How To Get Object Length ?
let objectLength = Object.keys(myFavGames).length;

/*
-The Object.keys() method returns an Array Iterator object with the keys of an object.

- The Object.keys() method does not change the original object.
*/


console.log(objectLength);

for (let i = 0; i < objectLength; i++) {
  console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
  console.log(`The Publisher Is ${myFavGames[Object.keys(myFavGames)[i]]["publisher"]}`);
  console.log(`The Price Is ${myFavGames[Object.keys(myFavGames)[i]]["price"]}`);

  // Check If Nested Object Has Property (bestThree)

  if (myFavGames[Object.keys(myFavGames)[i]].bestThree !== undefined) {

    console.log("- Game Has Releases");
    console.log(`First => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.one}`);
    console.log(`Second => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.two}`);
    console.log(`Third => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.three}`);
  }
  console.log("#".repeat(20));
}
