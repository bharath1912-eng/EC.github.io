/// Var Hoisting
console.log(varHoisting); // (output will be undefined) because hoisting suggests that variables and function declarations are physically moved to the top of your code.
// Technically the declarations are not exactly moved to the top of your code; instead, they are put into memory
var varHoisting ="varVariable";
 
// let and const hoisting
console.log(letVariable+" "+CONSTVARIABLE);
let letVariable ="let Variable";
const CONSTVARIABLE="CONST VARIABLE";
// (output is not defined) because let and const declarations are not hoisted and they remain uninitialized.
// they will only get initialized during the runtime of the program

// Hoisting function declaration
functionDeclaration("function")
function functionDeclaration(para) {
    console.log(para);
// (output will be function) function declaration  are added to the memory  during the compile time after executing the functionDeclaration()
// it will look into the lexical environment, finds the function and will be able to execute it. 
}
// Hoisting function Expression
functionDeclaration("function")
var functionDeclaration= function(para) {
    console.log(para);
}// (output will be not defined) because Only function declarations are hoisted in JavaScript, function expressions are not hoisted 
// so hoist declarations, not initializations (assignments), so the helloWorld will be treated as a variable, not as a function.