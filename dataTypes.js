// Using var, let, const, undefined, and null in JavaScript

// var: function-scoped or globally-scoped
var age = 25;  // Number
console.log("Age:", age);

// let: block-scoped
let name = "Alice";  // String
console.log("Name:", name);

// const: block-scoped, and can't be reassigned
const country = "USA";  // String
console.log("Country:", country);

// undefined: a variable declared but not initialized
let city;
console.log("City:", city);  // Outputs 'undefined'

// Assigning value later
city = "New York";
console.log("Updated City:", city);  // Outputs 'New York'

// null: explicitly representing "no value"
let salary = null;
console.log("Salary:", salary);  // Outputs 'null'

// Example of changing var and let values
var age = 30;  // Reassigns the var variable
console.log("Updated Age (using var):", age);

name = "Bob";  // Reassigns the let variable
console.log("Updated Name (using let):", name);

// You can't reassign a const variable (the following would cause an error)
// country = "Canada";  // Uncommenting this will throw an error



// Non-primitive data types: Object, Array, and Function

// 1. Object: A collection of key-value pairs
let person = {
    name: "Alice",
    age: 30,
    city: "New York"
};
console.log("Person Object:", person);

// Accessing object properties
console.log("Name:", person.name);  // Dot notation
console.log("Age:", person['age']); // Bracket notation

// Adding new properties
person.country = "USA";
console.log("Updated Person Object:", person);

// 2. Array: An ordered list of values
let colors = ["Red", "Green", "Blue"];
console.log("Colors Array:", colors);

// Accessing array elements
console.log("First Color:", colors[0]);

// Modifying an array element
colors[2] = "Yellow";
console.log("Updated Colors Array:", colors);

// Adding a new element to the array
colors.push("Purple");
console.log("Extended Colors Array:", colors);

// 3. Function: A block of code designed to perform a task
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));  // Outputs: "Hello, Alice!"

// Storing a function in a variable (Functions are first-class citizens)
let sayGoodbye = function(name) {
    return `Goodbye, ${name}!`;
};
console.log(sayGoodbye("Alice"));

// Objects and arrays can hold functions as properties (methods)
let calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};

console.log("Addition using calculator:", calculator.add(10, 5));  // Outputs: 15
console.log("Subtraction using calculator:", calculator.subtract(10, 5));  // Outputs: 5
