/*
    1. Create the following 3 objects:
        - const banana = {name: "banana", quantity: 1, price: 1.95}
        - const apple = {name: "apple", quantity: 1, price: 1.45}
        - const candy = {name: "candy", quantity: 1, price: 3.50}

    2. Create a Map called "store" with the following entries:
        - storeNumber ➔ 5
        - locationCity ➔ "Milan"
        - locationCountry ➔ "Italy"
        - products: [banana, apple, candy]

    3. Print out "store" to the terminal

    4. Only print out all the product objects in "store"

    5. Only print out the 3rd product object in "store"

    6. Change the price of the banana object through the store Map to be 1.75

    7. Print out both "store" and "banana"

    8. Change the price of the candy object directly to be 4.99

    9. Print out both "store" and "candy"
*/

// Step 1:
const banana = {
  name: "banana",
  quantity: 1,
  price: 1.95,
};

const apple = {
  name: "apple",
  quantity: 1,
  price: 1.45,
};

const candy = {
  name: "candy",
  quantity: 1,
  price: 3.5,
};

//Step 2:
const store = new Map();
store.set("storeNumber", 5);
store.set("locationCity", "Milan");
store.set("locationCountry", "Italy");
store.set("products", [banana, apple, candy]);

// Step 3:
console.log(store);
// Map(4) {
//     'storeNumber' => 5,
//     'locationCity' => 'Milan',
//     'locationCountry' => 'Italy',
//     'products' => [
//       { name: 'banana', quantity: 1, price: 1.95 },
//       { name: 'apple', quantity: 1, price: 1.45 },
//       { name: 'candy', quantity: 1, price: 3.5 }
//     ]
//   }

// Step 4:
console.log(store.get("products"));
// [
//     { name: 'banana', quantity: 1, price: 1.95 },
//     { name: 'apple', quantity: 1, price: 1.45 },
//     { name: 'candy', quantity: 1, price: 3.5 }
//   ]

// Step 4 "better":
for (let i = 0; i < store.get("products").length; i++) {
  console.log(store.get("products")[i]);
}
// { name: 'banana', quantity: 1, price: 1.95 }
// { name: 'apple', quantity: 1, price: 1.45 }
// { name: 'candy', quantity: 1, price: 3.5 }
// { name: 'candy', quantity: 1, price: 3.5 }

// Step 5:
console.log(store.get("products")[2]);
// { name: 'candy', quantity: 1, price: 3.5 }

// Step 6:
store.get("products")[0].price = 1.75;

// Step 7:
console.log(store);
// Map(4) {
//     'storeNumber' => 5,
//     'locationCity' => 'Milan',
//     'locationCountry' => 'Italy',
//     'products' => [
//       { name: 'banana', quantity: 1, price: 1.75 },
//       { name: 'apple', quantity: 1, price: 1.45 },
//       { name: 'candy', quantity: 1, price: 3.5 }
//     ]
//   }

console.log(banana);
// { name: 'banana', quantity: 1, price: 1.75 }

// Step 8:
candy.price = 4.99;

// Step 9:
console.log(store);
// Map(4) {
//     'storeNumber' => 5,
//     'locationCity' => 'Milan',
//     'locationCountry' => 'Italy',
//     'products' => [
//       { name: 'banana', quantity: 1, price: 1.75 },
//       { name: 'apple', quantity: 1, price: 1.45 },
//       { name: 'candy', quantity: 1, price: 4.99 }
//     ]
//   }

console.log(candy);
// { name: 'candy', quantity: 1, price: 4.99 }
