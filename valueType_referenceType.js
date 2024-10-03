// Value type (primitive)
let x = 10;
let y = x;  // y is a copy of x, not a reference
console.log("x:", x);  // 10
console.log("y:", y);  // 10
y = 20;
console.log("x after changing y:", x); 
console.log("y after changing y:", y);

// Reference type (object)
let objOne = [{ name:"Alice"}];
let objTwo= objOne;  // oblOne and objTwo sharing the reference of the same memory so ObjOne object got changes it will affect the objTwo too
console.log("obOne:", objOne);  
console.log("objTwo:", objTwo);  
objTwo.age = 23;
console.log("objOne after changing obj2:", objOne);  
console.log("objTwo after changing obj2:", objTwo);  
