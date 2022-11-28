/*
    1. Create a variable called "numbers" that points to a new Set

    2. Add the following numbers to the "numbers" (each a separate line):
        1, 2, 3, 4, 5, 2, 3, 4

    3. Print out "numbers" and note what is inside it

    4. Repeat the same steps above but with an array
        How does this differ?
*/

// Step 1:
const numbers = new Set();

// Step 2:
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(2);
numbers.add(3);
numbers.add(4);

// Step 3:
console.log(numbers);
// Set(5) { 1, 2, 3, 4, 5 }

// Step 4:
numbers.add([1, 2, 3, 4, 5, 2, 3, 4]);
console.log(numbers);
// Set(6) {
//     1,
//     2,
//     3,
//     4,
//     5,
//     [
//       1, 2, 3, 4,
//       5, 2, 3, 4
//     ]
//   }
