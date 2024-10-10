                            // CRUD Operations


/*
    1. createAttribute ()       - use
    2. createAttributeNS()
    3. createCDATASection()
    4. createComment()          - use
    5. createDocumentFragment()
    6. createElement()          - use
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





