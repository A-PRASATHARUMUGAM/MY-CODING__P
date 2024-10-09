                                        // querySelector 

// Element select
let ElementSelect=document.querySelector("h2");
console.log(ElementSelect.style.color="yellow");

// Id select    --> using (#)
let IdSelect=document.querySelector("#data");
console.log(IdSelect.style.color="springgreen");

// class select --> usign (.)
let ClassSelect=document.querySelector(".data")
console.log(ClassSelect.style.color="orange");

// specific select - 1 
let specificSelect1=document.querySelector(".data-container >  h1");
console.log(specificSelect1.style.color="blue");

// specific select - 2
let specificSelect2=document.querySelector(".data-container > h1:last-child");
console.log(specificSelect2.style.color="yellow");




