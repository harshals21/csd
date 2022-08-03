// This is my first JavaScript code!
// console.log("Hello World");

// variables
// let name = "Harsh";
// console.log(name);

// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space or hyphen (-)
// Are case-sensitive

// let firstName = "Abc";
// let lastName = "Xyz";

// const interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);

// If you need to re-assign use let otherwise const

// let name = "Mosh"; // String Literal
// let age = 30; // Number Literal
// let isApproved = false; // Boolean Literal
// let firstName = undefined;
// let selectedColor = null;

// Objects

// let person = {
//   name: "Mosh",
//   age: 30,
// };

// Dot Notation
// person.name = "John";

// Bracket Notation
// let selection = "name";
// person[selection] = "Mary";

// console.log(person.name);

// Arrays
// In JavaScript, array can be of multiple types

// let selectedColors = ["red", "blue"];
// selectedColors[2] = 1;
// console.log(selectedColors.length);

// Functions

// Performing a task
// function greet(name, lastName) {
//   console.log("Hello " + name + ' ' + lastName);
// }

// Calculating a value
// function square(number) {
//   return number * number;
// }

// greet('John', 'Smith');
// console.log(square(2));

// Operators
/*
- Arithmetic operators
- Assignment Operators
- Comparison Operators
- Equality Operators

Checks type + value (Strict equality)
-> console.log(1 === 1)

checks value (Lose equality)
-> console.log(1 == 1)
*/

// Ternary Operators

// let points = 90;
// let type = points > 100 ? 'gold' : 'silver';

// console.log(type);

// Logical operators with Non-Booleans

// Falsy (false)
// undefined
// null
// 0
// false
// ''
// NaN

// if the above values are used in evaluating an expression
// they are treated as falsy.

// Anything that is not Falsy -> Truthy

// Short Circuiting
// Eg. false || 1 || 2
// JS engine finds value 1 evaluates it as true and returns
// without checking any other value 

// let userColor = undefined;
// let defaultColor = 'blue';
// let currentColor = userColor || defaultColor;

// console.log(currentColor);

// Swap Variables

// let a = 'red';
// let b = 'blue';

// Swapping
// let temp = a;
// a = b;
// b = temp;


// console.log(a);
// console.log(b);

// maximum of two numbers

// function maxOfTwoNumbers(num1, num2) {
//     if (num1 > num2)
//         return num1;
//     else
//         return num2;
// }

// console.log(maxOfTwoNumbers(10, 20));

// FizzBuzz

// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// Not a number => 'Not a number'


const output = fizzBuzz(3);
console.log(output);

function fizzBuzz(input) {

}