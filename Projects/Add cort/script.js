const headerLinks=document.querySelector(".header-links"); 
const hamurgerMenu=document.querySelector(".hamburger-menu");

const cartRemoveEl=document.querySelector(".remove-icon");
const quantEl=document.querySelectorAll("input");

const  cartProfile=document.querySelector("figure");

 
quantEl.forEach((input)=>{

   input.addEventListener("click",quantfunction)

})
function quantfunction(){

        if(isNaN(this.value) || this.value< 1 ){
            this.value=1
        }
         

       
}

hamurgerMenu.addEventListener("click",()=>{
    headerLinks.classList.toggle("header-links-active")
    hamurgerMenu.classList.toggle("Ahmenu")
    cartAdd.classList.add("cart-box-active");


})
cartRemoveEl.addEventListener("click",()=>{
    cartAdd.classList.remove("cart-box-active");

    
})
const  addCartButton=document.querySelectorAll(".add-cart");

addCartButton.forEach((btn)=>{
   btn.addEventListener("click",addCart)

})
// cartprofile
function addCart(){

          let mainContainer=this.parentElement;
let personname=mainContainer.querySelector(".cart-title").innerHTML;
let img=mainContainer.querySelector("img").src;
let price=mainContainer.querySelector(".price").innerHTML;

let newele=sideCart(personname,img,price)
let newelement=document.createElement("div");
newelement.innerHTML=newele;
const cartBox=document.querySelector(".cart-box");
  cartBox.append(newelement)
  console.log(cartBox)
} 
  

function sideCart(personName,image,price){

return `


<div class="cart-title">cart items</div>

<div class="cart-items-container">

<div class="cart-title">${personName}</div>
 <div class="price">${price}</div>
<img src="${image}" alt="">
<span class="remove-icon">X</span> 
    <input type="number" value="1" >
</div> 



`
}

let mainContainer=document.querySelector(".main-container");
mainContainer.addEventListener("click",(event)=>{
    
    if(event.target.className==="add-cart"){

        let figure=event.target.parentElement;
        let price=figure.querySelector(".price").innerHTML;
        console.log(price);
        

          
    }else{

        console.log(event.target.tagName);
        
    }

})