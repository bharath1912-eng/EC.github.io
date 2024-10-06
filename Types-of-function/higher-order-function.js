//Higher-Order Function that Takes a Function as an Argument
let addValue=(valeOne,valueTwo)=>{
return valeOne+ valueTwo;
}
let divideValue=(valeOne,valueTwo)=>{
    return valeOne/valueTwo;
}
let calculateValue=(valeOne,valueTwo,operators)=>{
return operators(valeOne,valueTwo);
}
console.log(calculateValue(10,10,addValue));
console.log(calculateValue(10,10,divideValue));


//Higher-Order Function that Returns a Function and also it is anonymous function 
const multiplyBy = (num) => {
    return x => x * num;
  };
  
  const double = multiplyBy(2);
  console.log(double(5));  
  
  const triple = multiplyBy(3);
  console.log(triple(5));   


  //Take another function as argument and return a function
  var createMultiplier = (factor) => {
    return (value) => {
        return value * factor;
    }
}

var applyFunction = (fnn, value) => {
    return fnn(value);
}


var multiplyByTwo = createMultiplier(2);
console.log(applyFunction(multiplyByTwo, 5)); 










  