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
elements.remove();
