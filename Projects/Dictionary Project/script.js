const searchInput=document.querySelector(".searchInput");
const searchButton=document.querySelector(".searchButton");


searchInput.addEventListener("keypress",(event)=>{
    if (event.key === "Enter") {

        const words=searchInput.value;
         window.find(words)
    
      }
     
})

searchButton.addEventListener("click",()=>{
    const words=searchInput.value;
    window.find(words)
    
 });



