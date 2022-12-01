/*
    1. Create an empty Set called "names"

    2. Create another empty Set called "capsNames"

    3. Add the following names to the set "names":
        - Bilbo
        - Hermione
        - Spock
        - Leia

    4. Use a for-of loop to loop over "names" and adds the capitlized version of each name to the "capsNames" set

    5. Print out "capsNames"
*/

// Step 1:
let names = new Set();

// Step 2:
let capsNames = new Set();

// Step 3:
names.add("Bilbo");
names.add("Hermione");
names.add("Spock");
names.add("Leia");

// Step 4:
for (name of names) {
  capsNames.add(name.toUpperCase());
}

// Step 5:
console.log(capsNames);
// Set(4) { 'BILBO', 'HERMIONE', 'SPOCK', 'LEIA' }
