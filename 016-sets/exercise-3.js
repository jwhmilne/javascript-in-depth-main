/*
    1. Create an array called "items" with the following values:
        - {name: "banana", quantity: 1, price: 1.95}
        - {name: "apple", quantity: 1, price: 1.45}
        - {name: "banana", quantity: 10, price: 0.05}
        - {name: "candy", quantity: 1, price: 3.50}

    2. Create a second array called "results" that starts off empty

    3. Create a Set called "duplicates"

    4. Add all the Objects in "items" to "results" in order, while skipping over any duplicate-named objects you encounter within "items" (in this example, only add the first banana item)

    5. Print out "results" - it should be:
        [
                {name: "banana", quantity: 1, price: 1.95},
                {name: "apple", quantity: 1, price 1.45},
                {name: "candy", quantity: 1, price: 3.50}
        ]
*/

// Step 1:
const items = [
  { name: "banana", quantity: 1, price: 1.95 },
  { name: "apple", quantity: 1, price: 1.45 },
  { name: "banana", quantity: 10, price: 0.05 },
  { name: "candy", quantity: 1, price: 3.5 },
];

// Step 2:
let results = [];

// Step 3:
const duplicates = new Set();

// Step 4:
for (let i = 0; i < items.length; i++) {
  if (duplicates.has(items[i].name)) {
    continue;
  }
  duplicates.add(items[i].name);
  results.push(items[i]);
}

// Step 5:
console.log(results);
// [
//     { name: 'banana', quantity: 1, price: 1.95 },
//     { name: 'apple', quantity: 1, price: 1.45 },
//     { name: 'candy', quantity: 1, price: 3.5 }
//   ]
