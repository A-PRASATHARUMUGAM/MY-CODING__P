                            // Document Object Model (DOM)

//                             //1. Document Properties  (Getting Element)
// //getElementById();
// let element1=document.getElementById("para-id");
// console.log(element1);  

// //getElementsByClassName(); 
// element1=document.getElementsByClassName("para-class");
// console.log(element1);

// //getElementByName();
// element1=document.getElementsByName("para-name");
// console.log(element1);

// //getElementByTagName();
// element1=document.getElementsByTagName("p");
// console.log(element1);

// //querySelector();
// //tagname to select
// element1=document.querySelector("p");  
// console.log(element1);
// //id to select
// element1=document.querySelector("#para-id"); 
// console.log(element1); 
// //class to select
// element1=document.querySelector(".para-class"); 
// console.log(element1);


// //querySelectorAll();
// //tagname to select
// element1=document.querySelectorAll("p");  
// console.log(element1);
// //id to select
// element1=document.querySelectorAll("#para-id"); 
// console.log(element1); 
// //class to select
// element1=document.querySelectorAll(".para-class"); 
// console.log(element1);


//                                         // 2.Getting Child Element  

// parentElement=document.getElementById("parentElement");
// childElement=parentElement.children;
// for(i=0;i<childElement.length;i++){
//     element=childElement[i];
//     console.log(element);
// } 

//                                         // 3. Getting Parent element
// childElement=document.querySelector("#parentElement > p")
// parentElement=childElement.parentElement;
// console.log(parentElement);
//                                         //4.Create the Element
// let para=document.createElement("p") //create the element 
// para.textContent="create Element to js"
// document.getElementById("parentElement").appendChild(para); //add the Element 

//                                         //5. Remove the Element 
// let RemoveElement=document.getElementById("RemoveElement");
// RemoveElement.addEventListener('click',(event)=>{
//     parentElement.remove();
//     console.log("removed Parent Element");
   
// });

//                                     //6. Get Attribute of Element
// parentElement=document.getElementById("parentElement");
// Attribute=parentElement.getAttribute("data-info")
// console.log(Attribute); 

//                                     //7.Create or Update Attribute
// //Create
// parentElement=document.getElementById("parentElement");
// setAttribute=parentElement.setAttribute('name','add new attribute');
// //Modify
// parentElement=document.querySelector(".parentElement");
// setAttribute=parentElement.setAttribute('class','modify attribute');

//                                     //8. EventHandling and Mouse Events
// //using  'click' event             
// const clickmebutton=document.querySelector("#clickmebutton")
// const changetext=document.querySelector("#changetext")
// clickmebutton.addEventListener('click',()=>{
//           changetext.textContent="Text is changed"
// })
// // using 'mouseover' event
// changetext.addEventListener('mouseover',()=>{
//           changetext.textContent="Text is changed to mouseover"
// })
// // using 'mouseout' event
// changetext.addEventListener('mouseout',()=>{
//           changetext.textContent="Text is changed mouseout"
// })
// //using 'keydown' event  -->key press
// let inputfield=document.querySelector("#textinput");
//  inputfield.addEventListener('keydown',(event)=>{
//      console.log("keydown happend",event.key);
//  })
// //using 'keyup' event  -->key release
// inputfield=document.querySelector("#textinput");
//  inputfield.addEventListener('keyup',(event)=>{
//      console.log("keyup happend",event.key);
//  })

















                                //2. Element Properties

// const element=document.getElementById("dom-message");
// console.log(element.innerText); 

// //innerHTML -1   it is create the innerHTML to the  element  
// element.innerHTML ="<button> click </button>";
// console.log(element.innerHTML);  

// //outerHTML -2   it is print the outerHTML
// element.outerHTML; 
// console.log(element.outerHTML); 

// //innerText -3   it is add innertext in element and each Capitalized the word
// element.innerText =".innertext";   
// console.log(element.innerText);

// //textContent -4   it is use to create new Element at a time to use this textContent
//  element.textContent=".textContent";
// console.log(element.textContent);

// //className -5  it is used to add the new class in to the element and print the class
// element.className='dom-msgclass'; 
// console.log(element.className);
 

// //classList -6   it is list out the class in array format if you want change the class name  
// element.classList;
// console.log(element.classList);

// //id -7  it is used to add the new id in to the element and print the id
// element.id="dom-msgid"; 
// console.log(element.id)

 

 


 
 