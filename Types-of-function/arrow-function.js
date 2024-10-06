// Arrow function with no argument
let noArgument=()=>'aaa';
console.log(statement());

// arrow function with singleStatement
const singleStatement = single=> 'Arrow Function with a Single Statement';
let result=singleStatement();
console.log(result);

// arrow function with multi Statement
const greeting =name=>{
    let greetings='hello, ${name}!';
    return greetings;
}
let results = greeting('smith');
console.log(results);

/// arrow function with a callback

const greetUser = (name, callback) => {
    const message = `Hello, ${name}!`;
    callback(message);
  };
  
  greetUser('Alice', (greeting) => {
    console.log(greeting); // Output: Hello, Alice!
  });
  
  //Arrow Function Returning an Object
  const user = ((fname,age) => {
  return { fname, age };
})('john',24);
console.log(user);
