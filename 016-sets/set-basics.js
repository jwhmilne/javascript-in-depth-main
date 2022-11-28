const mySet = new Set();

mySet.add(10);
mySet.add(20);
mySet.add(30);
mySet.add(40);

console.log(mySet);
// Set(4) { 10, 20, 30, 40 }

mySet.add(10);
mySet.add(10);
mySet.add(10);
console.log(mySet);
// Set(4) { 10, 20, 30, 40 }
// -> Duplicates of unique values are effectively ignored

mySet.add("10");
console.log(mySet);
// Set(5) { 10, 20, 30, 40, '10' }
// -> String '10' is different to Number 10
// -> Can add different value types into sets

mySet.delete(20);
console.log(mySet);
// Set(4) { 10, 30, 40, '10' }

console.log(mySet.has(30));
// true

console.log(mySet.has(300));
// false

console.log(mySet.size);
// 4
