                                        // querySelectorAll
// Element select
let ElementSelect=document.querySelectorAll("h2");
console.log(ElementSelect[0].style.color ="yellow");

// Id select    --> using (#)
let IdSelect=document.querySelectorAll("#data");
console.log(IdSelect[0].style.color="Hotpink");

// class select --> usign (.)
let ClassSelect=document.querySelectorAll(".data")
console.log(ClassSelect[1].style.color="orange");

// specific select - 1 
let specificSelect1=document.querySelectorAll(".data-container >  h1");
console.log(specificSelect1[1].style.color="blue");

// specific select - 2
let specificSelect2=document.querySelectorAll(".data-container > h1:last-child");
console.log(specificSelect2[0].style.color="yellow");






