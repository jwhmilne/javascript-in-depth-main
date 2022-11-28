/*
    1. Create an array called "points" with the following values:
        [10, 20, 10, 30, 15, 15, 35, 60, 10]

    2. How can you print out all the UNIQUE points inside "points"?
*/

// Step 1:
const points = [10, 20, 10, 30, 15, 15, 35, 60, 10];

// Step 2:
const uniquePoints = new Set();

for (i = 0; i < points.length; i++) {
  uniquePoints.add(points[i]);
}

console.log(uniquePoints);
// Set(6) { 10, 20, 30, 15, 35, 60 }

// Another way to do Step 2:
const cheatUniquePoints = new Set(points);
console.log(cheatUniquePoints);
// Set(6) { 10, 20, 30, 15, 35, 60 }

// -> We can give the set constructor an iterable (such as an array)
