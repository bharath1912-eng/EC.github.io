// if Conditions
var cibleScoe=800;
 if (cibleScoe<300) {
    
 
if(cibleScoe>=300 && cibleScoe<500 ){
    console.log("Your cible score is average");
}
 else if(cibleScoe>=500 && cibleScoe<700){
    console.log("Your cible score is good");
    
}
else if(cibleScoe>=700 && cibleScoe<=1000){
    console.log("Your cible score is good");
}
 }
else{
    console.log("Your cible score is below 300");
}

/// Loops
// While loop
let value=10;
while (value>=1) {
    console.log("value = "+value);
    value--;
}
// for loop
let count ;
 for(count=1;count<=10;count++){
    if(count%2!=0){
    console.log("Odd number = "+count);
    }  
 }
 // do while loop
 let loop=10;
 do {
    loop++;
    console.log('do-while loop is run atleast once before checking the condithion');
    
 } while (loop<=5);
   console.log(loop);

   // for in loop
   let myDetials={
    name:"Bharath",agr:"23",gender:"male"
   }
   for(let detials in myDetials){
    console.log(detials+" = "+myDetials[detials]);
   }

   // for of loop
   let color=['red','blue','green']
    for (const colour of color) {
        console.log(colour);
        
    }
    // forEach loop
    let values=[1,2,3,4,5];
    values.forEach((values)=>{
        console.log(values);
        
    })
   
    // switch case

    let day=8;
switch (day) {
case 1:
        
console.log("sunday");
break;
case 1:
console.log("sunday");
break;
case 2:
console.log("monday");
break;
 case 3:
console.log("tuesday");
break;
case 4:
console.log("wednesday");
break;
case 5:
    console.log("thuesday");
break;
 case 6:
console.log("saterday");
break;
default:
console.log("invalid input");                         
break;
}
 