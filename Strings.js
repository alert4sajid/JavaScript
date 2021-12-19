//Concatenation using + operator
let str1 = "Hello ";
let str2 = "World!";

console.log(str1 + str2);
console.log(str1 + "new " + str2)

// numbers 
let num1 = 1;
let num2 = "2";
console.log(num1 + num2); //11 as string
console.log(num1 + 1);    //2 as number

console.log("-- Converting strings to numbers --");
console.log(parseInt("100"));
console.log(parseInt(num2));
console.log(parseInt("ABCD"));
console.log(parseInt("0xF")); //Hexadecimal

let flo1 = "1.5"

console.log(parseFloat("1.9"));
console.log(parseFloat(flo1));
console.log(parseFloat("ABCD"));

//Numbers after special character are ignored
console.log(parseInt("1.5"));
console.log(parseInt("1 + 1"));

// Using Template Literal

console.log(parseInt(`${1 + 1}`));

// Numbers to strings
console.log("-- Converting numbers to strings --");
console.log(num1.toString());
console.log(flo1.toString());
console.log((100).toString());
