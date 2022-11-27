/*
    1. Create a Map called "houseForSale" with the following entries:
        - area ➔ 940
        - value ➔ 320000
        - streetName ➔ "Fifth Street"
        - built ➔ "2012"
        - owner ➔ {name: "Blake", age: 29}
        - offers ➔ [290000, 295000, 315000, 312000]

    2. Print out "houseForSale" to the terminal

    3. Delete the entry with the key "built"

    4. Change the age of the owner to be 30 inside "houseForSale"

    5. Print out the maximum offerPrice (use reduce)

    6. Add a new entry: "sale price" ➔ 312000

    7. Print out "houseForSale" to the terminal

    *This is a challenging exercise - take it slow and step by step
*/

// Step 1:
const houseForSale = new Map();
houseForSale.set("area", 940);
houseForSale.set("value", 320000);
houseForSale.set("streetName", "Fifth Street");
houseForSale.set("built", "2012");
houseForSale.set("owner", { name: "Blake", age: 29 });
houseForSale.set("offers", [290000, 295000, 315000, 312000]);

// Step 2:
console.log(houseForSale);
// Map(6) {
//     'area' => 940,
//     'value' => 320000,
//     'streetName' => 'Fifth Street',
//     'built' => '2012',
//     'owner' => { name: 'Blake', age: 29 },
//     'offers' => [ 290000, 295000, 315000, 312000 ]
//   }

// Step 3:
houseForSale.delete("built");

// Step 4:
houseForSale.get("owner").age = 30;

// Step 5:
console.log(
  houseForSale.get("offers").reduce((prev, curr) => {
    if (prev > curr) {
      return prev;
    }
    return curr;
  }, 0)
);
// 315000

// Step 6:
houseForSale.set("sale price", 312000);

// Step 7:
console.log(houseForSale);
// Map(6) {
//     'area' => 940,
//     'value' => 320000,
//     'streetName' => 'Fifth Street',
//     'owner' => { name: 'Blake', age: 30 },
//     'offers' => [ 290000, 295000, 315000, 312000 ],
//     'sale price' => 312000
//   }
