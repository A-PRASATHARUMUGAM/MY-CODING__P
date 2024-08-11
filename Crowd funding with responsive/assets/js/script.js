const showmenu=document.querySelector(".header");
const menu=document.querySelector(".menu");
const closebutton=document.querySelector(".close-btn");

 
const hamburgermenu=menu.addEventListener('click',()=>{
   showmenu.classList.toggle("showmenu");
   
})  

closebutton.addEventListener('click',()=>{
   showmenu.classList.toggle("showmenu");
})   