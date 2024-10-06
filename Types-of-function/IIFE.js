// IIFE with a Regular Function
var great='kavin';
(function(){
var great='preveen';
console.log(great);//preveen
})();
console.log(great);// here he output is kavin because IIFE is used to create a private space and self calling no need to manualy

// IIFE with an Arrow Function
((argument)=>{ // arrow function is a shorthand syntax for writing functions.
var great=argument;
console.log(great);//preveen
})('preveen');