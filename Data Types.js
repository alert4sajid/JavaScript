// Data Types
const people = ["Sajid", "Ali", "Hamza"];
const number = 1;
const str = "String";
const bool = true;
const person = {
    FirstName : "Sajid",
    LastName : "Mehmood"
};
function sayHello (person) {
    console.log("Hello, " + person.FirstName)
}

//typeof
console.log("-- typeof --");
console.log(typeof people);
console.log(typeof number);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof person);
console.log(typeof sayHello);

//instanceof
console.log("-- instanceof --");
console.log(people instanceof Array);
console.log(number instanceof Number);
console.log(str instanceof String);
console.log(bool instanceof Boolean);
console.log(person instanceof Object);
console.log(sayHello instanceof Function);

// Types can change
let x = "Something"; // string
console.log(x);
x = 1; // number
console.log(x);
x = 1 + "Hello"; // string
console.log(x);

// Equality Gotchas
