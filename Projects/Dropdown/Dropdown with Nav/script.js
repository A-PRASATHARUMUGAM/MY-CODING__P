const headerLinks=document.querySelector(".header-links")
const dropDown=document.querySelector(".dropdown");
let selectedTr;

headerLinks.addEventListener("click",(event)=>{

    if(event.target.tagName=="UL"){
        return
    }
    else {
    
          event.target.nextElementSibling.classList.toggle("active")

    }
 

})
