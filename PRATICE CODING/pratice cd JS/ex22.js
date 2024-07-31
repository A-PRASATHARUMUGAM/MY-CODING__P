                            //Document Object Model (DOM)

                            //1. Document Properties
//getElementById();
let element1=document.getElementById("para-id");
console.log(element1);  

//getElementByClassName(); 
element1=document.getElementsByClassName("para-class");
console.log(element1);

//getElementByName();
element1=document.getElementsByName("para-name");
console.log(element1);

//getElementByTagName();
element1=document.getElementsByTagName("p");
console.log(element1);

//querySelector();
//tagname to select
element1=document.querySelector("p");  
console.log(element1);
//id to select
element1=document.querySelector("#para-id"); 
console.log(element1); 
//class to select
element1=document.querySelector(".para-class"); 
console.log(element1);


//querySelectorAll();
//tagname to select
element1=document.querySelectorAll("p");  
console.log(element1);
//id to select
element1=document.querySelectorAll("#para-id"); 
console.log(element1); 
//class to select
element1=document.querySelectorAll(".para-class"); 
console.log(element1);


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

// //textContent -4   it is similar to innerHTML
//  element.textContent=".textcontent";
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

 

 


 
 