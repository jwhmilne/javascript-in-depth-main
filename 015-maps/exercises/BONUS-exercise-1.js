/*
    1. Create a Map called "myConsole"

    2. Assign "myConsole" the key "log" with a value that is an arrow function.

        This arrow function will have one parameter called "message"

        The function will just console.log out the "message"

    3. Call the function with a message. How does this compare to Objects?

    4. Add the following key-value pairs to the map:
        - 1 : "number one"
        - "1" : "string one"

    5. Print out each of the 2 values for the keys you just added.
        How does this differ from an Object?
*/

// Step 1:
const myConsole = new Map();

// Step 2:
myConsole.set("log", (message) => {
  console.log(message);
});

// Step 3:
myConsole.get("log")("Hello there!");
// Hello there!

// Step 4:
myConsole.set(1, "number one");
myConsole.set("1", "string one");

// Step 5:
console.log(myConsole.get(1));
// number one

console.log(myConsole.get("1"));
// string one

console.log(myConsole);
// Map(3) {
//     'log' => [Function (anonymous)],
//     1 => 'number one',
//     '1' => 'string one'
//   }

// Very interesting. Is it fair to say that in an Object, a Key with the same name as another Key will overwrite the first Key, regardless of whether they seem to have different types (i.e. string "1" and number 1)? Whereas in a Map, different types can play the role of Key (i.e. string "1" and number 1 won't overwrite one another), right?
