const characters = ["Frodo", "Harry", "Thanos", "Gandalf", "Yoda"];

for (let i = 0; i < characters.length; i++) {
  //   characters[i] = characters[i].toUpperCase();
  //   console.log(characters[i]);
}
// FRODO
// HARRY
// THANOS
// GANDALF
// YODA

// -> A "for-of" loop
for (let character of characters) {
  console.log(character);
  character = character.toUpperCase();
  console.log(character);
}
// Frodo
// FRODO
// Harry
// HARRY
// Thanos
// THANOS
// Gandalf
// GANDALF
// Yoda
// YODA

console.log(characters);
// [ 'Frodo', 'Harry', 'Thanos', 'Gandalf', 'Yoda' ]
