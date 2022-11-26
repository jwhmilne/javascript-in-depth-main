const myMap = new Map();

console.log(myMap);
// Map(0) {}

// {
//     name: 'nader',
//     age: 10
// }

myMap.set("name", "nader");
myMap.set("age", 10);

console.log(myMap);
// Map(2) { 'name' => 'nader', 'age' => 10 }

const age = myMap.get("age");
console.log(age);
// 10

myMap.set("age", 11);
console.log(myMap);
// Map(2) { 'name' => 'nader', 'age' => 11 }

console.log(myMap.has("name"));
// true
console.log(myMap.has("last name"));
// false

console.log(myMap.size);
// 2

myMap.delete("age");
console.log(myMap);
// Map(1) { 'name' => 'nader' }
console.log(myMap.size);
// 1
