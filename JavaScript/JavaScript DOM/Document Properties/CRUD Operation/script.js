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

*/



// Create Element
let h2=document.createElement('h2');
h2Text=document.createTextNode("hello world ");
h2.append(h2Text);
let main=document.querySelector(".main-container");
main.append(h2)