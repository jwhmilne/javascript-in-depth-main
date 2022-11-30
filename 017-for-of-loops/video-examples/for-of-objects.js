const stockItem = {
  id: 54,
  price: 1.32,
  name: "Apple",
  quantity: 6,
};

// for (const item of stockItem) {
//   console.log(item);
// }
// // TypeError: stockItem is not iterable

console.log(Object.entries(stockItem));
// [
//     [ 'id', 54 ],
//     [ 'price', 1.32 ],
//     [ 'name', 'Apple' ],
//     [ 'quantity', 6 ]
//   ]

for (const item of Object.entries(stockItem)) {
  console.log(item);
}
// [ 'id', 54 ]
// [ 'price', 1.32 ]
// [ 'name', 'Apple' ]
// [ 'quantity', 6 ]
