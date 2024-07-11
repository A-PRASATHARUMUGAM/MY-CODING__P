const menu=document.querySelector(".menu");
const menu2=document.querySelector(".showmenu1")
const menuList=document.querySelector(".navbar ul")

menu2.addEventListener('click',()=>{
   menuList.classList.toggle("showmenu");
});


