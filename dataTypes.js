
var age = 25;  // Number
console.log("Age:", age);

let name = "Alice";  // String
console.log("Name:", name);

const country = "USA";  
console.log("Country:", country);

let city;
console.log("City:", city);  

city = "New York";
console.log("Updated City:", city);  


let salary = null;
console.log("Salary:", salary);  

var age = 30;  
console.log("Updated Age :", age);

name = "Bob";  
console.log("Updated Name :", name);

// You can't reassign or redeclare const variable  



// Non-primitive data types: Object, Array, and Function

// 1. Object: 
let person = {
    name: "Alice",
    age: 30,
    city: "New York"
};
console.log("Person Object:", person);
console.log("Name:", person.name);  
console.log("Age:", person['age']); 


person.country = "USA";
console.log("Updated Person Object:", person);


let colors = ["Red", "Green", "Blue"];
console.log("Colors Array:", colors);


console.log("First Color:", colors[0]);


colors[2] = "Yellow";
console.log("Updated Colors Array:", colors);


colors.push("Purple");
console.log("Extended Colors Array:", colors);

//function
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); 


// Objects and arrays can hold functions as properties (methods)
let calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};

console.log("Addition ", calculator.add(10, 5));  
console.log("Subtraction :", calculator.subtract(10, 5));  
