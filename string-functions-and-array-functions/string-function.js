// 1. String Length

let str = "Hello, World!";
const getStringLength=(s)=>s.length;
console.log(getStringLength(str)); 

// 2. charAt(index)

const getCharAt=(s,index)=>s.charAt(index);
console.log(getCharAt(str,0));

// 3. charCodeAt(index)

const getCharCodeAt =(s,index)=>s.charCodeAt(index);
console.log(getCharCodeAt(str,0));

// 4. concat()
const concatenateStrings =(strOne,strtwo)=>strOne.concat(",",strTwo);
console.log(concatenateStrings('hello','world'));

// 5. indexOf(searchValue, start)
const getIndexOf =(str,value)=>str.indexOf(value);
console.log(getIndexOf(str,'W'));

// indexOf(searchValue, start, limit)
getIndexOf =(str,value,limit)=>str.indexOf(value,limit);
console.log(getIndexOf(str,'o',8));

// 6. lastIndexOf(searchValue, start)
const getLastIndexOf =(str,value)=> str.lastIndexOf(value);
console.log(getLastIndexOf(str,'o'));

//LastindexOf(searchValue, start, limit)
getLastIndexOf =(str,value,limit)=> str.lastIndexOf(value,limit);
console.log(getLastIndexOf(str,'o',7));

// 7. toUpperCase()
const convertToUpperCase = str=>str.toUpperCase();
console.log(convertToUpperCase(str));

// 8. toLowerCase()
const convertToLowerCase = (str)=>str.toLowerCase();
console.log(convertToLowerCase(str));

// 9. trim()
const trimString = str=>str.trim();
console.log(trimString('     hello , world      '));

// 10. split(separator, limit)
const splitString = (str,separator)=>str.split(',');
console.log(splitString('hello,hi,bye'));

//split(separator, limit)
splitString = (str,separator,limit)=>str.split(',',limit);
console.log(splitString('hello,hi,bye',',',2));


//11. substring(start, end)
const getSubstring = (str,start,end)=>str.substring(start,end);
console.log(getSubstring('hello,world',0,5));

// substring(start);
console.log(getSubstring('hello,world',0));

// 12. slice(start, end)
const getSlice =(str,start,end)=>str.slice(start,end);
console.log(getSlice(str,0,6));

// 12. slice(start)
console.log(getSlice(str,6));

// 13. replace(searchValue, newValue)
const replaceString = (str,oldValue,newValue)=>str.replace(oldValue,newValue);
console.log(replaceString(str,'Hello','hi'));

//14. replaceAll(searchValue, newValue)
const replaceAllStrings = (str,oldValue,newValue)=> str.replaceAll(oldValue,newValue);
console.log(replaceAllStrings("apple,apple,apple","apple","orange"));

// 15. includes(searchValue, start)
const checkIncludes = (str,searchValue)=>str.includes(searchValue);
console.log(checkIncludes(str,"Hello"));

// 15. includes(searchValue, start,limit)

checkIncludes = (str,searchValue,limit)=>str.includes(searchValue,limit);
console.log(checkIncludes(str,"World",7));


// 16. startsWith(searchValue, start)
const checkStartsWith = (str, searchValue)=>str.startsWith(searchValue);
console.log(checkStartsWith(str,"Hello"));

// 17. endsWith(searchValue, length)
const checkEndsWith =(str, searchValue)=>str.endsWith(searchValue);
console.log(checkEndsWith(str,"!"));







