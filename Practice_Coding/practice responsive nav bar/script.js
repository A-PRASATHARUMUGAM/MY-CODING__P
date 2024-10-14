const headerLinks=document.querySelector(".header-links");
const headerShowmenu=document.querySelector(".header-showmenu");

headerShowmenu.addEventListener('click',()=>{
    headerLinks.classList.toggle("hshowmenu");
    headerShowmenu.classList.toggle("Ahmenu");

   
})

const headerLinks2=document.querySelector(".header-links > li:first-child");
const navbarContainer=document.querySelector(".navbar-container");

headerLinks2.addEventListener("click",()=>{
navbarContainer.classList.toggle("navbarAnimation");
})