                            // CRUD Operations


/*
    1. createAttribute ()       - use
    2. createAttributeNS()
    3. createCDATASection()
    4. createComment()           - use
    5. createDocumentFragment()  - use
    6. createElement()           - use
    7. createElementNS()
    8. createEvent()
    9. createExpression()
    10. createNSResolver()
    11. createNodeIterator()
    21. createProcessingInstruction()
    13. createNodeIterator()
    14. createRange()
    15. createTextNode()          - use     - alternative to innerText 
    16. createTreeWalker()



    
1. setAttribute()           -use ("value","23")
2. setAttributeNS()
3. setAttributeNode()
4. setAttributeNodeNS()
5. setHTMLUnsafe()
6. setPointerCapture()

8. getAttribute()            -use ("place") 
7. getAnimations()      
9. getAttributeNS()
10. getAttributeNames()
11. getAttributeNode()
12. getAttributeNodeNS()
13. getBoundingClientRect()
14. getClientRects()

    hasAttribute            -use("place ") true or false -check the attribute
    hasAttributeNS
    hasAttributes
    hasChildNodes

hasPointerCapture
15. releasePointerCapture()
16. remove()                -use
17. removeAttribute()       -use
18. removeAttributeNS()
19. removeAttributeNode()
20. removeEventListener()   -use

21. replaceChild()          -use   - old way to replace
22. replaceChildren()       -use   - it multiple children to replace 
23. replaceWith()           -use   - new way it one child replace

24. requestFullscreen()
25. requestPointerLock()


26. insertAdjacentElement() -use    beforebegin, beforeend, afterbegin, afterend
27. insertAdjacentHTML()    -use    
28. insertAdjacentText()    -use
29. insertBefore()          -use


//1. Create DOM Elements 
//2. add class and remove 
//3. how to get / set Text via DOM                    
//4. createDocumentFragment() 
//5. inserting DOM Element 
//6. inserting DOM Strign Template
//7. Replacing DOM Elements
//8. Cloning DOM Elements
//9. Removing DOM Elements
//10. Finding child in DOM
//11. Finding parent Element in DOM
//12. Finding sibling Element in DOM
//13. HTML propertie vs Element propeties
//14. Setting and Getting HTML Attribute 
//15. Setting and Getting inline style
//16. Setting and Getting  class styles 
//17. Adding Event Listeners Event Object  
//18. Event Bubbling and Capturing 
//19. Preventing Browser Default action 
//20. Event Delegation  Dynamic Events 
//21. Mouse Events
//22. Keyboard Event




*/




//                                 //1.Create DOM Elements 
// // createElement
// let textNode1=document.createTextNode("hello world ");
// let h2=document.createElement('h2');
// h2.append(textNode1);  // --> only one time store the textNode
// let main=document.querySelector(".main-container");
// main.append(h2)
// main.prepend(h2)
 
// // createComment
// let comment=document.createComment("DOM via comment");
// main.append(comment);

// // createTextNode
// let textNode2=document.createTextNode("Every day is a chance to be the best");
// let para1=document.createElement('p');
// para1.append(textNode2);    // --> only one time store in the textNode
// main.prepend(para1);

//                         // !important
// // text=document.textContent="hello"; --> you can store multiple time in the text



//                             //2. add class and remove                             
// // className
// para1.className="prasath";

// //classList.add()
// para1.classList.add("kandhan")

// //classList.toggle()
// para1.addEventListener('click',()=>{
//     para1.classList.toggle("checkclass"); //-- recursively add and remove classname
// })

// // remove()
// para1.addEventListener('click',()=>{
//     para1.remove()    //-- click the para1
// })


//                     //3. how to get / set Text via DOM

//                         // get text
// // // innerText
// // console.log(main.innerText)   //-avoid space to print text 


// // // innerHTML
// // console.log(main.innerHTML)  //-print element+text

// // // textContent
// // console.log(main.textContent) //-actual print link <para>

// //                       //set text
// // //innerText
// // let para2=document.querySelector(".para2");
// // para2.innerText="<strong>Every day is a chance to be the best </strong>";
// // console.log(para2.innerText)// or createTextNode 
  
// // //innerHTML
// // para2.innerHTML="<strong>Every day is a chance to be the best</strong>";
// // console.log(para2.innerHTML)  // or  createElement 


// // //textContent
// // para2.textContent="<strong>Every day is a chance to be the best </strong>";
// // console.log(para2.textContent)// or createTextNode   



//                         // 4. createDocumentFragment()  

// let fragmentContainer=document.querySelector(".fragment-container");
// console.time("normal way ")
// for(let i=0;i<=2;i++){
    
//     let para4=document.createElement("p")
//     para4.innerText=`fragment ${i}`
//     fragmentContainer.append(para4)
// }
// console.timeEnd("normal way ")


// // fragment way
// let framgment=document.createDocumentFragment()
// console.time("DocumentFragment way ")
// for(let i=0;i<=2;i++){
    
//     let para4=document.createElement("p")
//     para4.innerText=`fragment ${i}`
//     framgment.append(para4)
// }
// fragmentContainer.append(framgment)
// console.timeEnd("DocumentFragment way ")



//                         // 5. inserting DOM Element 

// //append
// let container2=document.querySelector(".container2");
// let newelement=document.createElement("p");
// newelement.innerText="para-append";
// newelement.style.color="red";
// container2.append(newelement);

// //prepend
// let newelement2=document.createElement("p");
// newelement2.innerText="para-prepend";
// newelement2.style.color="yellow";
// container2.prepend(newelement2);

// // before
// let newelement3=document.createElement("p")
// newelement3.innerText="para-before";
// newelement3.style.color="lightblue"
// container2.before(newelement3)

// //after
// let newelement4=document.createElement("p")
// newelement4.innerText="para-after"
// newelement4.style.color="hotpink";
// container2.after(newelement4); 

// // old way to use before()
// container2.parentElement.insertBefore(newelement3,fragmentContainer);

// // old way to use after()
// container2.parentNode.insertBefore(newelement4,fragmentContainer.nextSibling);


//                         // 6.inserting DOM Strign Template
// /* how will be insert 

//     -- > beforebegin
//     -- > before()
// <container>
//     -- > afterbegin

//     -- > append()
//     <p1>
//     <p2>
//     <p3>
//     -- > prepend()
    
//     -- > beforeend
//    <container>
//     -- > after()
//     -- > afterend
  
//   */

// //insertAdjacentHTML() - afterbegin ->after container2 begin
// container2.insertAdjacentHTML("afterbegin","<h4>afterbegin</h4>");

// //insertAdjacentText() - afterend   ->after container2 end
// container2.insertAdjacentText("afterend","afterend");

// //insertAdjacentText() - beforebegin   ->before container2 begin
// container2.insertAdjacentHTML("beforebegin","beforebegin");

// //insertAdjacentText() - beforeend   ->before container2 end
// container2.insertAdjacentHTML("beforeend","beforeend");


//                         //7. Replacing DOM Element
 
// //1. replaceWith()  -- > new way  -  preferred
// let container3=document.querySelector(".container3");
// let container3para=document.querySelector(".container3 :first-child")
// // createElement
// let newpara1=document.createElement("p");
// newpara1.textContent="kandhan"
// newpara1.className="#hello world";
// newpara1.style.backgroundColor="red"; 
// newpara1.style.color="black";
// // replaceWith()
// container3para.replaceWith(newpara1)

// //2. replaceChild()   --> old way
// newpara1.style.backgroundColor="springgreen"; 
// // container3para.parentNode.replaceChild(newpara1,container3para); --some problem


// //3. replaceChildren() 
// // container3.replaceChildren(newpara1)



//                         //8. Cloning DOM Elements

// // const container4=document.querySelector(".container4");
// // console.log("normal",container4);

// // // cloneNode()   - default false - it clone only current node 
// // const cloneNode=container4.cloneNode() 
// // console.log("cloneNode()",cloneNode);


// // // cloneNode(true)  // -it clone include childrens nodes
// // const cloneNodeTrue=container4.cloneNode(true)
// // console.log("cloneNode(true)",cloneNodeTrue);


//                         //9. Removing DOM Elements

// remove mulitiple elements
let paraContainer5=document.querySelector(".para-container5 ")
let removeBtn=document.querySelectorAll(".fa-xmark");
let addbutton=document.querySelector(".addbtn");

removeBtn.forEach(element => {
   
    element.addEventListener("click",()=>{
        element.parentNode.remove() 
    })
    
});

//                         //10. Finding child in DOM 

// console.log(paraContainer5.firstChild);
// console.log(paraContainer5.firstElementChild);
// console.log(paraContainer5.lastChild);
// console.log(paraContainer5.lastElementChild);
// console.log(paraContainer5.children);
// console.log(paraContainer5.childNodes);
// console.log(paraContainer5.childElementCount);


                            //11. Finding parent in DOM

// console.log(paraContainer5.parentNode);
// console.log(paraContainer5.parentElement);
// console.log(paraContainer5.closest(".container5"));


                        //12. Finding sibling Element in DOM

// let siblingContainer=document.querySelector(".sibling-container");
// console.log(siblingContainer)
        // Any Node
// console.log(siblingContainer.nextSibling);
// console.log(siblingContainer.previousSibling);
        //Any Element 
// console.log(siblingContainer.nextElementSibling);
// console.log(siblingContainer.previousElementSibling);

                    //13. HTML propertie vs Element propeties

// const inputName=document.querySelector(".input-name-container > input");
// console.log(inputName.value);  //-- it is called Element Propeties
// // setAttribute
// inputName.setAttribute("value","22");
// const intValue=parseInt(inputName.value);
// console.log(intValue);

                    // 14. Setting and Getting HTML Attribute 

// let input2=document.querySelector(".input-container2 > input")
// console.log(input2.attributes); 
// console.log(input2.attributes[1].value); 
// console.log(input2.attributes.value.value); 
// console.log(input2.attributes["value"].value);

// console.log("-- set and get Attribute --")

// //setAttribute
// input2.setAttribute("value","22");

// //getAttribute
// console.log(input2.getAttribute("value"));

// //hasAttribute
// console.log(input2.hasAttribute("value"));
// console.log(input2.hasAttribute("heello"));

// //removeAttribute
// input2.removeAttribute("place")
// console.log(input2.dataset) //custom attribute name like "data-place "  call input.dataset


//                         // 15.  Setting and Getting inline style  
// // 1.setAttribute
// let styleContainerButton=document.querySelector(".style-container6 >button")
// styleContainerButton.setAttribute("style","padding:6px 10px; border:none; color:white; background-color:royalblue;");

// // 2.Direct Prpoerty access
// styleContainerButton.style.fontWeight="bold";
// styleContainerButton.style.fontFamily="cursive";

// // 3.cssText  -->it is override all style 
//     //  += to append the style 
//    console.log( styleContainerButton.style.cssText+="font-size:20px;");
   
// // 4.ClassList  --> prefferred
// styleContainerButton.classList="style-container-button";


//                             // 16.  Setting and Getting  class styles  

// let styleContainer=document.querySelector(".style-container7");
// // className    -it is override the previous class name
//                  //  += to append the style 
// styleContainer.className+=" newclass1";

// //classList 
// styleContainer.classList.add("newclass2");              //-add class name 
// console.log(styleContainer.classList.replace("newclass1","3class")); //-replace class name
// console.log(styleContainer.classList.contains("3class")); //-check the class name
// console.log(styleContainer.classList.remove("3class")); //-check the class name
// console.log(styleContainer.classList.toggle("3class")); //-you know this

// console.log(styleContainer.className) 



//                    // Button text change mini project 
// let styleContainer7Button=document.querySelector(".style-container7 > button");
// styleContainer7Button.addEventListener("click",()=>{

//     styleContainer7Button.classList.toggle("showmenu");

//     if(styleContainer7Button.classList.contains("showmenu")){
//         styleContainer7Button.innerText="Reset"
//         styleContainer7Button.style.backgroundColor="red";
        
        
//     }else{
//           styleContainer7Button.innerText="Submit"
//            styleContainer7Button.style.backgroundColor="green"
//     }
   
// })



                        //17. Adding Event Listeners Event Object  

/*

1. Keyboard Events
2. Mouse Events
3. Pointer Events
4. Forms Events

DOMContentLoaded    -use
         A                   
cancel          
canplay
canplaythrough
change
click               -use
close
compositionend
compositionstart
compositionupdate
contextlost
contextmenu         -use  -it anyplace to click
contextrestored
copy                -use - can't copy the text - event.preventDefault
cuechange 
        B
dblclick             -use
drag
dragend
dragenter
dragleave
dragover
dragstart
drop
durationchange
        E
emptied
ended
error
        M
mousedown        -use
mouseenter       -use
mouseleave       -use
mousemove        -use
mouseout         -use
mouseover        -use
mouseup          -use 
        K
keydown
keypress
keyup



        -- other --
{capture:true} -default false
{once:true} -default false
{passive:true}
event.stopPropagation()
event.stopImadiatePropagation()
event.preventDefault()
return false

*/

// let eventContainer=document.querySelector(".event-container8 > button");
// let handler= ()=>{
//     console.log("hello world ");
// // removeEventListener
//     eventContainer.removeEventListener("click",handler);
// }
// // addEventListener
// eventContainer.addEventListener("click",handler);
// // eventContainer.addEventListener("click",handler,{once:true}); // once default -false


//                             // 18.  Event Bubbling and Capturing 


// let formEl=document.querySelector(".event-container9 > form");
// let divEl=document.querySelector(".event-container9  div");
// let pEl=document.querySelector(".event-container9  p");

//                                 //Catch capturing and Bubbling 
// formEl.addEventListener("click",(event)=>{
    
//     alert("form")

// //  catch capturing
//    },{capture:true})
// divEl.addEventListener("click",(event)=>{

//     alert("div")
//     // event.stopPropagation() // until div only stopPropagation 
//     // event.stopImmediatePropagation() //  div stopImmediatePropagation

// })
// pEl.addEventListener("click",()=>{
//     alert("p")
// })

// // same div another event
// divEl.addEventListener("click",(event)=>{

//     alert("this another div")

// })

                            // Best Example
// for(let ele of document.querySelectorAll("form,form *")){

//     ele.addEventListener("click",()=>{
//         console.log("capturing phase:",ele.tagName);
        
//     },true);

//     ele.addEventListener("click",()=>{
//         console.log("Bubbling phase:",ele.tagName);

        
//     });

// }


//                             // 19. Preventing Browser Default Action 
// // preventDefault()
// const preventButton=document.querySelector(".prevent-container10 > a");
// const checkbox=document.querySelector("input[type='checkbox']");
// console.log(checkbox)
// preventButton.addEventListener("click",(event)=>{
//     event.preventDefault()
// })


                        // 20  Event Delegation  Dynamic Events  

// const tableEl=document.querySelectorAll(".event-delegation-container11 form li ");
// // Way - 1  Getting group of data
// for(ele of tableEl){
//     console.log(ele.innerText)
// }

// // Way - 2  Getting group of data
// tableEl.forEach((ele)=>{
//     console.log(ele);
//     ele.addEventListener("click",()=>{
//         console.log(ele.remove())
//     })
// })


// // Event Delegation 
//  tableEl=document.querySelector(".event-delegation-container11 table");
// let selectedTr;
// console.log(selectedTr)
// tableEl.addEventListener("click",(event)=>{

//     if(event.target.tagName.toLowerCase()==="th"){
//         return;
//     }
    
//      closestTr=event.target.closest("tr");

//      closestTr.classList.add("selectedtr");
     
//      if(selectedTr != undefined){
       
//      selectedTr.classList.remove("selectedtr");
//         }
//        else{
//            selectedTr = closestTr; 

//        }

 
// })


                                //21. Mouse Events  

/* 
        M
mousedown        -use    click
mouseenter       -use    entering
mouseleave       -use    leaving 
mousemove        -use    moving 
mouseout         -use    change mouse element that is mouseout
mouseover        -use    hover you know 
mouseup          -use    unclick

which = 1 -Left click 
which = 2 -Middle click 
which = 3 -Right click 
which = 4 -Invalid key click 
which = 5 -Invalid key click 

*/

// // mousedown
// const mouseDown=document.querySelector(".mouse-event-container12");
// mouseDown.addEventListener("mousedown",()=>{
//     console.log("mousedown")
// })
// //mouseup
// const mouseUp=document.querySelector(".mouse-event-container12");
// mouseUp.addEventListener("mouseup",()=>{
//     console.log("mouseup")
// })
// //copy
// const copyText=document.querySelector(".mouse-event-container12 > h3");
// mouseDown.addEventListener("copy",(event)=>{
//     event.preventDefault()
//     console.log("copy prohibited");
// })


                             // 22. Keyboard Event

/* 
        K
keydown
keypress -depegrated -feature remove
keyup

*/

// // keydown
// const keyDown=document.querySelector(".keyboard-event-input");
// keyDown.addEventListener("keydown",()=>{
//  console.log("keyDown");
// })
// // keyup
// const keyUp=document.querySelector(".keyboard-event-input");
// keyUp.addEventListener("keyup",(event)=>{
//  console.log("keyUp",event);
// })

                             // Key Enter to add ! important
// const keyEnter=document.querySelector(".keyboard-event-input");
// keyEnter.addEventListener("keyup",(event)=>{
//     if(event.key==="Enter"){

//         console.log("KeyEnter",keyEnter.value);
//     }
//     //undo operation 
//     else if(event.key.ctrlKey=true ==="keyZ"){
//         keyEnter.value=""; 
//     } 
    
// })
