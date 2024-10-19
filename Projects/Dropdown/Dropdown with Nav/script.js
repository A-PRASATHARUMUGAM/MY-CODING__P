const headerLinks=document.querySelector(".header-links")
const dropDown=document.querySelector(".dropdown");


headerLinks.addEventListener("click",(event)=>{

     
    if(event.target.tagName=="UL"){
        return
    }else{

        console.log(event.target.nextElementSibling.classList.toggle("active"));
        
           
       }

 
 

})
