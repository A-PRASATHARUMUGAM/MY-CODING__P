const headerLinks=document.querySelector(".header-links");
const headerShowmenu=document.querySelector(".header-showmenu");

headerShowmenu.addEventListener('click',()=>{
    headerLinks.classList.toggle("hshowmenu");
    headerShowmenu.classList.toggle("Ahmenu");

})
