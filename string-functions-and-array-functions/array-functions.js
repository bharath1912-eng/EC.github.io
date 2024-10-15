//1. Adding a element at end of the array using push
const fruits =["apple","orange"];
fruits.push("banana");
console.log(fruits);

//.2 Adding a element at beginning of the array using unshift
fruits.unshift("papaya");
console.log(fruits);

///3. deleting a element at end of the array using pop
fruits.pop();
console.log(fruits);

//4.deleting a element at beginning of the array using shift
fruits.shift();
console.log(fruits);

//5.joining array elements 
const joinArray=(arr,seprator)=>arr.join(seprator);
console.log(joinArray(fruits,','));

//6 finding index of the value
fruits =["apple","orange"];
console.log(fruits.indexOf('orange'));

//7.finding a element in an array returns true or false
const get=(arr,searchValue)=>arr.includes(searchValue);
console.log(get(fruits,'orange'));

//7.finding a element in an array using find returns value
const numbers = [1, 2, 3, 4, 5];
const result =numbers.find(number=>number>4);
console.log(result);

// removing a specific element using findIndex and splice
const getResult=numbers.findIndex(number=>number===3);
if (getResult!=-1) {

    numbers.splice(getResult,1);
}
console.log(numbers);

// map function
const doubled =numbers.map(number=>number*2);
console.log(doubled);

const users=[{
    name:"bharath",
    age:23
},{
    name:"siva",
    age:23

}];
const names=users.map(user=>user.name);
console.log(names);

// fiter function

const evenNumbers=numbers.filter(number=>number%2==0);
console.log(evenNumbers);

//slice()

let getfruits = ["apple", "banana", "cherry", "date"];

let slicedFruits=getfruits.slice(1,3);
console.log(slicedFruits);

// Examples of Using Negative Indexes
slicedFruits=getfruits.slice(-3,-1);
console.log(slicedFruits);

//splice()

// Removing Elements using splice
getfruits.splice(2,1);

// Replacing  Elements
getfruits.splice(0,2,"litche","mango");


// sort() ascending order
 numbers = [10, 5, 20, 15];
numbers.sort((a,b)=>a-b)
 console.log(numbers)

 // sort() decending order
numbers = [10, 5, 20, 15];
numbers.sort((a,b)=>b-a)
 console.log(numbers)

 // reverse()
 numbers.reverse();
 console.log(numbers);

 //reduce()
//Flatten an Array using reduce()
const nestedArrays = [[1, 2], [3, 4], [5, 6]];
 const flatArray=nestedArrays.reduce((acc,value)=>acc.concat(value),[]);
 console.log(flatArray);
 
 // find occurrence of the element
 const fruitsShop = ['apple', 'banana', 'orange', 'apple', 'orange', 'apple'];

 const fruitCount=fruitsShop.reduce((acc,value)=>{
    acc[value]=(acc[value] ||0)+1
    return acc;
 },[]);
 console.log(fruitCount);

 //fill 
 const arr = [1, 2, 3, 4];
arr.fill(5, 1);
console.log(arr);


//forEach()
const numbersGet = [1, 2, 3];
let sum = 0;
numbers.forEach(num => {
    sum += num; 
});
console.log(sum); 

