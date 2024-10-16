// Read
// Select Elements based on id
const selectBasedOnId=document.getElementById('selectID');
selectBasedOnId.textContent="Hello World";


//Create
const createTag=document.createElement('h3');
createTag.textContent="Welcome to javaScript Traning";
selectBasedOnId.appendChild(createTag);

// Update 
createTag.style.color="red";
createTag.style.fontSize="20px";
createTag.innerHTML=" Welcome to <span style='color:blue'>javaScript</span> Traning";
createTag.className='javaScript'
createTag.title='javaScript Traning'
//delete
const elements = document.getElementsByClassName('selectClass')[0];
//elements.remove();
  
// Creating a element and set Attribute the Existing Element
// and Create a parent Element a move the existing as child element
const createElement=document.createElement('div');
createElement.setAttribute('id','setAttribute');
createElement.setAttribute('title','Java Script traning');
createElement.appendChild(elements);
selectBasedOnId.prepend(createElement);

//getting attribute
const getAttribute=createElement.getAttribute('id');
// removing Attribute

createElement.removeAttribute('title');

// checking if the Attribute is present or not
createElement.hasAttribute('title');// it return a boolean value

//adding a new class to a existing class
elements.classList.add('addClass');

//events 
// add Event Listener and Removeing the Event Listener after executed once

function showMessage() {
    alert('Event listener going remove')
     createTag.removeEventListener("click", showMessage);
 }

 // Add event listener to execute once
 createTag.addEventListener("click", showMessage);

 //prevent default behaviour
 const btn=document.getElementById('button');
 btn.addEventListener('click',(event) =>{
    event.preventDefault();

 })