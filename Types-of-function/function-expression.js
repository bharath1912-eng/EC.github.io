// 1. Function Expression Without Argument and Without Return Type:

// functionExp(); if we are calling this function here it will not work it will throw you error(functionExp is not a function).
var functionExp= function() {
    console.log('1. Function Expression Without Argument and Without Return Type:');
    
}
functionExp();
//2. Function Expression With Argument and With Return Type:
let functionExpression =function(arrOne) {
    return arrOne*arrOne;
}
console.log(functionExpression(10));
 