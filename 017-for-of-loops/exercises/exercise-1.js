/*
    1. Create a variable called "ages" that points to this array:
        [10, 42, 15, 22, 11, 74, 39, 2]

    2. Create an array called "results" that starts off empty

    3. Use a for-of loop to loop over "ages" and add an Object to "results" with an age key having the value of the "age" being looped over. Also, add a "name" key that is always "Dragon".
    e.g. {age: 10, name: "Dragon"}, {age: 42, name: "Dragon"}

    4. Print out "results"

    5. "results" should be:
        [
            {age: 10, name: "Dragon"},
            {age: 42, name: "Dragon"},
            {age: 15, name: "Dragon"},
            {age: 22, name: "Dragon"},
            {age: 11, name: "Dragon"},
            {age: 74, name: "Dragon"},
            {age: 39, name: "Dragon"},
            {age: 2, name: "Dragon"},
        ]
*/
const ages = [10, 42, 15, 22, 11, 74, 39, 2];

let results = [];

for (age of ages) {
  results.push({
    age: age,
    name: "Dragon",
  });
}

console.log(results);
// [
//     { age: 10, name: 'Dragon' },
//     { age: 42, name: 'Dragon' },
//     { age: 15, name: 'Dragon' },
//     { age: 22, name: 'Dragon' },
//     { age: 11, name: 'Dragon' },
//     { age: 74, name: 'Dragon' },
//     { age: 39, name: 'Dragon' },
//     { age: 2, name: 'Dragon' }
//   ]

// -> To add a number to each name:

// let dragonNumber = 1;

// for (age of ages) {
//   results.push({
//     age: age,
//     name: `Dragon ${dragonNumber}`,
//   });
//   dragonNumber++;
// }

// console.log(results);
// // [
// //   { age: 10, name: "Dragon 1" },
// //   { age: 42, name: "Dragon 2" },
// //   { age: 15, name: "Dragon 3" },
// //   { age: 22, name: "Dragon 4" },
// //   { age: 11, name: "Dragon 5" },
// //   { age: 74, name: "Dragon 6" },
// //   { age: 39, name: "Dragon 7" },
// //   { age: 2, name: "Dragon 8" },
// // ];
