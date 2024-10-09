/* 1. How asynchronous Calls are handled in Java Script?
2. What is Call Stack & give example of its usage?
3. What are closers & provide its implementation?
4. What are callback function with example?
5. Write an arrow function with multiple arguments & multiple Statements.
6 Wite an if statement with logical AND.
7. Write an if statearent with logical NOT.
8. Diffaence between function declaration function expression.
9. Difference between Var, let & const?
10 Explain call by value & call by refference. */ 

//1. How asynchronous Calls are handled in Java Script?

/* Ans.============================================================================================= The asynchronous  waitig in web API (step1)

step-1 Web API-(cb1 asynchronous())

//(step2) Call back qeue  [fisrt in first out]

cb1 :(cb1 asynchronous())

//Event loop(step3)

(The event loop continuously checks the call stack and the callback queue.
 If the call stack is empty, it takes the first function from the callback 
queue and pushes it onto the call stack for execution) */


function asynchronous(params) {
    console.log('hello ${params}!');
    
}
setTimeout(asynchronous,3000,"bharath");


//2. What is Call Stack & give example of its usage?

// In call stack we can where our code is executed
function first() {
    console.log("This is the first function.");
    second(); // Calling second function
}

function second() {
    console.log("This is the second function.");
    third(); // Calling third function
}

function third() {
    console.log("This is the third function.");
}

first();  // Initial function call

// 3. What are closers & provide its implementation?
//inner function have the access of the outer function even though the outer function as been executed
function outer() {
    let value = 1;
    function outer(){
        let sum=0;
        sum+=value;
        return sum
    }
    return outer;
}
let result =outer();
console.log(result());  


//What are callback function with example?
// if we use a function as a parameter or argument is called call back functionn
function getFunction(params,sub) {
    return sub(params);
    }
    function multi(param) {
        return param*param;
        }
        console.log(multi(10,multi));
        
    //Write an arrow function with multiple arguments & multiple Statements.
    var arrowFun=(valueOne,valueTwo)=>{
        let sum=0;
        sum=valueOne+valueTwo;
        return sum;
    }
    console.log(arrowFun(10,10));

  //  Wite an if statement with logical AND.
  //You can also use logical AND to check if a number is within a certain range. 

  let temperature = 72;

if (temperature >= 60 && temperature <= 80) {
    console.log("The temperature is comfortable.");
} else {
    console.log("The temperature is uncomfortable.");
}

8.//Diffaence between function declaration function expression.
//function declaration
welcome();//we cancall  the function here also it will work

function welcome() {
    console.log("welcome ");
}

//function expression.
//expression() we can`t call the function here it will throw u error expression is not a function
var expression=()=> console.log("welcome ");

// Difference between Var, let & const?
/* ---var-----
 -> its functional scope and stored in global scop
 ->var not not a block scope 
 ->var it can be redeclare ,reassign and 
 ->var will be hoisted 

 ----let---
 --> its functional scope and also a block scope 
 ->let it can`t be redeclare but we can reassign and 
 ->let will not hoisted
 
 ----const-----
 --> its functional scope and also a block scope 
 ->let it can`t be redeclare or reassign and 
 ->const  will not hoisted
 */
 //Explain call by value & call by refference.
 // Value type will share the value of the variable
let x = 10;
let y = x;  // y is a copy of x, not a reference
console.log("x:", x);  // 10
console.log("y:", y);  // 10
y = 20;
console.log("x after changing y:", x); 
console.log("y after changing y:", y);

// Reference type will share the refference of the memory address
let objOne = [{ name:"Alice"}];
let objTwo= objOne;  // oblOne and objTwo sharing the reference of the same memory so ObjOne object got changes it will affect the objTwo too
console.log("obOne:", objOne);  
console.log("objTwo:", objTwo);  
objTwo.age = 23;
console.log("objOne after changing obj2:", objOne);  
console.log("objTwo after changing obj2:", objTwo);  