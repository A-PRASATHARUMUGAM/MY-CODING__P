const searchInput=document.querySelector(".searchInput");
const searchButton=document.querySelector(".searchButton");

searchButton.addEventListener('click',()=>{
   const words=searchInput.value;
   window.find(words)
})


