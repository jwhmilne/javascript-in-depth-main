/*
    1. Create a Map called "backpack" and add the following entries:
        - 1 => {name: "Sword", value: 300}
        - 2 => {name: "Banana", value: 5}
        - 3 => {name: "Gold Nugget", value: 10000}
        - 4 => {name: "Pants", value: 100}

    2. Use a for-of loop to loop over "backpack" and print out the name and the value for each item in the following format:
    Name: $Value
    For example: Sword: $300

    3. Also print out the total value of all items in the backpack
*/

// Step 1:
const backpack = new Map();
backpack.set(1, { name: "Sword", value: 300 });
backpack.set(2, { name: "Banana", value: 5 });
backpack.set(3, { name: "Gold Nugget", value: 10000 });
backpack.set(4, { name: "Pants", value: 100 });

console.log(backpack);

// Step 2:
for (item of backpack) {
  //   console.log(item[1].name + ": $" + item[1].value);
  console.log(`${item[1].name}: $${item[1].value}`);
  // Uncommented console.log is a nice template string
  // Commented console.log is an ugly non-template string
}
// Sword: $300
// Banana: $5
// Gold Nugget: $10000
// Pants: $100

// Step 3:

let totalValue = 0;

for (item of backpack) {
  totalValue += item[1].value;
}

console.log(`Total: $${totalValue}`);
// Total: $10405
