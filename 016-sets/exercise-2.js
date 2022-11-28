/*
    1. Create an array called "numbers" with the following values:
        [10, 20, 15, 30, 15, 20, 35, 60, 10]

    2. Find the first duplicate value in "numbers" and print it out to the terminal

    HINT: Add the numbers to a Set as you for-loop over "numbers"

    *This is quite challenging and is a common interview question
*/

// Step 1:
const numbers = [10, 20, 15, 30, 15, 20, 35, 60, 10];

// Step 2:
// -> "brain storage"
const seenNumbers = new Set();

// -> "looking at each item"
for (let i = 0; i < numbers.length; i++) {
  if (seenNumbers.has(numbers[i])) {
    // found first duplicate
    console.log(numbers[i]);
    break;
  }
  // -> have not seen it, we need to store it (brain storage)
  seenNumbers.add(numbers[i]);
}
//  15
