const headerLinks=document.querySelector(".header-links"); 
const hamurgerMenu=document.querySelector(".hamburger-menu");
const cartAdd=document.querySelector(".cart-box");
const cartRemoveEl=document.querySelector(".remove-icon");
const quantEl=document.querySelectorAll("input");
quantEl.forEach((input)=>{

   input.addEventListener("change",quantfunction)

})
function quantfunction(){

        if(isNaN(this.value) || this.value< 1 ){
            this.value=1
        }
        
         console.log(this.parentElement);
    
}



// hamurgerMenu.addEventListener("click",()=>{
//     headerLinks.classList.toggle("header-links-active")
//     hamurgerMenu.classList.toggle("Ahmenu")
//     cartAdd.classList.add("cart-box-active");


// })
// cartRemoveEl.addEventListener("click",()=>{
//     cartAdd.classList.remove("cart-box-active");

    
// })

//           <input type="number" value="1" min="1">


