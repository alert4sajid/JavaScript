var one = 1; // function scoped, can be changed in scope, available before declaration 
let two = 2; // block scoped, can be changed in scope, available after declaration 
const three = 3; // block scoped, can not be changed in scope, available after declaration 
// const by default
// let in loops

// Declaring Variables
console.log(hello); // undefined, not error
var hello = "Hello";
console.log(hello);
hello = "Hello World";
console.log(hello)

if (true) {
    let world = "World";
    console.log(world);
}
const name = "Sajid";
console.log(name);











