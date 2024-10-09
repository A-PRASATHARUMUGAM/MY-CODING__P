                            // Document Object Model (DOM)

/*

----------------------------------------------------------------------------------
1. HTML DOM -- it is a standard object model and programming interface for HTML 
            -- how to get, change, add, and delete HTML elements 

2. DOM Specification -- by  W3C world wide web considum 

3. JS Specification  -- by  ES6 Ecma Script 

4. 
  - <head>, <h1>, <img>       = Attribute, Element, Tag
  - src, tilte, width, height = Propeties
  - onclick, all action event = methods
    
----------------------------------------------------------------------------------
*/ 


                            /**************************\
                                 #1.window properties
                            \**************************/
 
 /*

                        -- window properties --  

- 1. window.innerHeight                 --> display your window innerHeight  
- 2. window.innerWidth                  --> display your window innerWidth 
- 3. window.location                    --> it display the loaction 
- 4. window.history                     --> it display the window history


                         -- window methods --  

- 1. window.open("https://google.com")  --> pop to open the link like add block using 
- 2. window.close()                     --> close your run window
- 3. window.alert()                     --> alert the pop up menu 
- 4. window.prompt()                    --> display the pop up prompt
- 5. window.print()                     --> it is print the window 
- 6. window.find()                      --> it is find the value  Eg: Ctrl-F 



                            -- Bendings --
- 1. window.length
- 3. window.moveTo(x,y)
- 4. window.moveBy()
- 5. window.resizeBy()
- 6. window.resizeTo()
- 7. window.confirm()

*/ 
                          

                                /**************************\
                                  #3.Document Properties
                                \**************************/   

//                       // 1. Getting Element
// //getElementById();
// let element1=document.getElementById("para-id");
// console.log(element1);  

// //getElementsByClassName(); 
// element1=document.getElementsByClassName("para-class");
// console.log(element1);

// //getElementsByName();
// element1=document.getElementsByName("para-name");
// console.log(element1);

// //getElementsByTagName();
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


//                                // 2.Getting Child Element  

// parentElement=document.getElementById("parentEleent");
// childElement=parenmtElement.children;
// for(i=0;i<childElement.length;i++){
//     element=childElement[i];
//     console.log(element);
// } 

//                              // 3. Getting Parent element
// childElement=document.querySelector("#parentElement > p")
// parentElement=childElement.parentElement;
// console.log(parentElement);

//                              //4.Create the Element
// let para=document.createElement("p") //create the element 
// para.textContent="create Element to js"
// document.getElementById("parentElement").appendChild(para); //add the Element 

                                //5.Create the textNode
// let para=document.createTextNode('hello world')


//                                 //5. Remove the Element 
// 1.remove();
// let RemoveElement=document.getElementById("RemoveElement");
// RemoveElement.addEventListener('click',(event)=>{
//     parentElement.remove();
//     console.log("removed Parent Element");
   
// });
// 2.removeChild();


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

                                /**************************\
                                  #2.Element Properties
                                \**************************/   


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

// //className -5  it is used to add the new class in to the element  
// element.className='dom-msgclass'; 
// console.log(element.className);
 

// //classList -6   it is list out the class in array format if you want change the class name  
// element.classList;
// console.log(element.classList);

// //id -7  it is used to add the new id in to the element and print the id
// element.id="dom-msgid"; 
// console.log(element.id)

// //append  - 8      - it is add last child in your element
// const main=document.getElementById("main-container");
// const Append=document.createElement("h2");
// Append.textContent="Hello world"
// main.append(Append)  // - last add child

// //prepend - 9    - it add fist child in your element
// main.prepend(Append)  //-first add child

                          
                                /**************************\
                                      #5.Style using
                                \**************************/   
                              
// let ColorText=document.getElementsByTagName("h1");
// // style the Element 
// console.log(ColorText[0].style.color="red");


//      --- This way to accesing the element --- 
// console.log(document.body.constructor.name)

// console.log(document.body instanceof HTMLBodyElement) // 5
// console.log(document.body instanceof HTMLElement)     // 4
// console.log(document.body instanceof Element)         // 3
// console.log(document.body instanceof Node)            // 2
// console.log(document.body instanceof EventTarget)     // 1

// console.log(document.body.nodeType)
