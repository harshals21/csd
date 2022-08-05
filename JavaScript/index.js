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


// const output = fizzBuzz(3);
// console.log(output);

// function fizzBuzz(input) {

// }

//  Exercise

// Speed Limit = 70
// 5 -> 1 point
// Math.floor(1.3)
// 12 points -> License suspended

// checkSpeed(74);

// function checkSpeed(speed) {
//     const speedLimit = 70;
//     const kmPerPoint = 5;

//     if (speed <= speedLimit + kmPerPoint) {
//         console.log('Ok');
//     }
//     else {
//         const points = Math.floor((speed - speedLimit) / kmPerPoint);
//         if (points >= 12)
//             console.log('License suspended');
//         else
//             console.log('Points', points);
//     }

// }

// EVEN AND ODD NUMBERS

// showNumbers(10);

// function showNumbers(limit) {
// for (let i = 0; i <= limit; i++) {
//     if (i % 2 === 0)
//         console.log(i, 'EVEN');
//     else
//         console.log(i, 'ODD');
// }

// Method 2: concise
//     for (let i = 0; i <= limit; i++) {
//         const message = (i % 2 == 0) ? 'EVEN' : 'ODD';
//         console.log(i, message);
//     }
// }

// STRING Properties

// const movie = {
//     title: 'a',
//     releaseYear: 2018,
//     rating: 4.5,
//     director: 'b'
// };

// showProperties(movie);

// function showProperties(obj) {
//     for (let key in obj)
//         if (typeof obj[key] === 'string')
//             console.log(key, obj[key]);
// }

// SECTION : OBJECTS

// Object-oriented Programming (OOP)

// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true,
//     draw: function () {
//         console.log('draw');
//     }
// };

// circle.draw(); // Method

// Factory Function

// function createCircle(radius) {
//     return {
//         radius,
//         draw() {
//             console.log('draw');
//         }
//     };
// }

// const circle1 = createCircle(1);
// console.log(circle1);

// const circle2 = createCircle(2);
// console.log(circle2);

// Constructor Function

// Note: recommended to use pascal notation for
// constructor function

// Camel Notation: oneTwoThreeFour
// Pascal Notation: OneTwoThreeFour

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         console.log('draw');
//     }
// }

// const circle = new Circle(1);

// Dynamic nature of objects

// const circle = {
//     radius: 1
// };

// circle.color = 'yellow';
// circle.draw = function () { }

// delete circle.color;
// delete circle.draw;

// console.log(circle);

// functions are objects

// Objects are not iterable

const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

for (let key in circle)
    console.log(key, circle[key]);

for (let key of Object.keys(circle))
    console.log(key);
