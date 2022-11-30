const mySet = new Set();

mySet.add("hello");
mySet.add("monkey");
mySet.add("monkey");
mySet.add("monkey");
mySet.add("10");
mySet.add("11");
mySet.add("TRUE");

console.log(mySet);
// Set(5) { 'hello', 'monkey', '10', '11', 'TRUE' }

for (const item of mySet) {
  console.log(item);
}
// hello
// monkey
// 10
// 11
// TRUE
