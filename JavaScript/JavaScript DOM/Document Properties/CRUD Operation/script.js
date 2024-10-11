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
    15. createTextNode()          - use
    16. createTreeWalker()



    
1. setAttribute()
2. setAttributeNS()
3. setAttributeNode()
4. setAttributeNodeNS()
5. setHTMLUnsafe()
6. setPointerCapture()

7. getAnimations()
8. getAttribute()
9. getAttributeNS()
10. getAttributeNames()
11. getAttributeNode()
12. getAttributeNodeNS()
13. getBoundingClientRect()
14. getClientRects()

15. releasePointerCapture()
16. remove()
17. removeAttribute()
18. removeAttributeNS()
19. removeAttributeNode()
21. removeChild()
22. removeEventListener()
23. replaceChild()
24. replaceChildren()
25. replaceWith()
26. requestFullscreen()
27. requestPointerLock()



*/


                                //1.Create DOM Elements 
// createElement
let textNode1=document.createTextNode("hello world ");
let h2=document.createElement('h2');
h2.append(textNode1);  // --> only one time store the textNode
let main=document.querySelector(".main-container");
main.append(h2)
main.prepend(h2)
 
// createComment
let comment=document.createComment("DOM via comment");
main.append(comment);

// createTextNode
let textNode2=document.createTextNode("Every day is a chance to be the best");
let para1=document.createElement('p');
para1.append(textNode2);    // --> only one time store in the textNode
main.prepend(para1);

                        // !important
// text=document.textContent="hello"; --> you can store multiple time in the text



                            //2. add class and remove                             
// className
para1.className="prasath";

//classList.add()
para1.classList.add("kandhan")

//classList.toggle()
para1.addEventListener('click',()=>{
    para1.classList.toggle("checkclass"); //-- recursively add and remove classname
})

// remove()
para1.addEventListener('click',()=>{
    para1.remove()    //-- click the para1
})


                                //3. how to get / set Text via DOM
            // get text
// // innerText
// console.log(main.innerText)   //-avoid space to print text 


// // innerHTML
// console.log(main.innerHTML)  //-print element+text

// // textContent
// console.log(main.textContent) //-actual print link <para>

//                      //set text
// //innerText
// let para2=document.querySelector(".para2");
// para2.innerText="<strong>Every day is a chance to be the best </strong>";
// console.log(para2.innerText)// or createTextNode 
  
// //innerHTML
// para2.innerHTML="<strong>Every day is a chance to be the best</strong>";
// console.log(para2.innerHTML)  // or  createElement 


// //textContent
// para2.textContent="<strong>Every day is a chance to be the best </strong>";
// console.log(para2.textContent)// or createTextNode   



                        // 4. createDocumentFragment()  

let fragmentContainer=document.querySelector(".fragment-container");
console.time("normal way ")
for(let i=0;i<=2;i++){
    
    let para4=document.createElement("p")
    para4.innerText=`fragment ${i}`
    fragmentContainer.append(para4)
}
console.timeEnd("normal way ")


// fragment way
let framgment=document.createDocumentFragment()
console.time("DocumentFragment way ")
for(let i=0;i<=2;i++){
    
    let para4=document.createElement("p")
    para4.innerText=`fragment ${i}`
    framgment.append(para4)
}
fragmentContainer.append(framgment)
console.timeEnd("DocumentFragment way ")



                    // 4. inserting DOM Element 

//append
let container2=document.querySelector(".container2");
let newelement=document.createElement("p");
newelement.innerText="para-append";
newelement.style.color="red";
container2.append(newelement);


//prepend
let newelement2=document.createElement("p");
newelement2.innerText="para-prepend";
newelement2.style.color="yellow";
container2.prepend(newelement2);






