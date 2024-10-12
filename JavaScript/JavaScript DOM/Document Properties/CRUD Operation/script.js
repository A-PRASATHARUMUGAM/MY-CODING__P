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

23. replaceChild()          -use   - old way to replace
24. replaceChildren()       -use   - it multiple children to replace 
25. replaceWith()           -use   - new way it one child replace

26. requestFullscreen()
27. requestPointerLock()


28. insertAdjacentElement() -use    beforebegin, beforeend, afterbegin, afterend
29. insertAdjacentHTML()    -use    
30. insertAdjacentText()    -use
31. insertBefore()          -use


//1. Create DOM Elements 
//2. add class and remove 
//3. how to get / set Text via DOM                    
//4. createDocumentFragment() 
//5. inserting DOM Element 
//6. inserting DOM Strign Template
//7. Replacing DOM Elements
//8. Cloning DOM Elements




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

//                       //set text
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



                        // 5. inserting DOM Element 

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

// before
let newelement3=document.createElement("p")
newelement3.innerText="para-before";
newelement3.style.color="lightblue"
container2.before(newelement3)

//after
let newelement4=document.createElement("p")
newelement4.innerText="para-after"
newelement4.style.color="hotpink";
container2.after(newelement4); 

// old way to use before()
container2.parentElement.insertBefore(newelement3,fragmentContainer);

// old way to use after()
container2.parentNode.insertBefore(newelement4,fragmentContainer.nextSibling);


                        // 6.inserting DOM Strign Template
/* how will be insert 

    -- > beforebegin
    -- > before()
<container>
    -- > afterbegin

    -- > append()
    <p1>
    <p2>
    <p3>
    -- > prepend()
    
    -- > beforeend
   <container>
    -- > after()
    -- > afterend
  
  */

//insertAdjacentHTML() - afterbegin ->after container2 begin
container2.insertAdjacentHTML("afterbegin","<h4>afterbegin</h4>");

//insertAdjacentText() - afterend   ->after container2 end
container2.insertAdjacentText("afterend","afterend");

//insertAdjacentText() - beforebegin   ->before container2 begin
container2.insertAdjacentHTML("beforebegin","beforebegin");

//insertAdjacentText() - beforeend   ->before container2 end
container2.insertAdjacentHTML("beforeend","beforeend");


                        //7. Replacing DOM Element
 
//1. replaceWith()  -- > new way  -  preferred
let container3=document.querySelector(".container3");
let container3para=document.querySelector(".container3 :first-child")
// createElement
let newpara1=document.createElement("p");
newpara1.textContent="kandhan"
newpara1.className="#hello world";
newpara1.style.backgroundColor="red"; 
newpara1.style.color="black";
// replaceWith()
container3para.replaceWith(newpara1)

//2. replaceChild()   --> old way
newpara1.style.backgroundColor="springgreen"; 
// container3para.parentNode.replaceChild(newpara1,container3para); --some problem


//3. replaceChildren() 
// container3.replaceChildren(newpara1)



                        //8. Cloning DOM Elements

const container4=document.querySelector(".container4");
console.log("normal",container4);

// cloneNode()   - default false - it clone only current node 
const cloneNode=container4.cloneNode() 
console.log("cloneNode()",cloneNode);


// cloneNode(true)  // -it clone include childrens nodes
const cloneNodeTrue=container4.cloneNode(true)
console.log("cloneNode(true)",cloneNodeTrue);