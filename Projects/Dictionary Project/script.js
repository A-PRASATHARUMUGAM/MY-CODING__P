// search words inputs
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

// add words inputs
const englishWords=document.querySelector(".english-input");
const tamilWords=document.querySelector(".tamil-input");
const addButton=document.querySelector(".add-button");
const wordsContainer=document.querySelector(".words-container");

addButton.addEventListener("click",()=>{
    Ewords=englishWords.value;
    Twords=tamilWords.value;
    wordsContainer.appendChild `<p class="words-english">${Ewords}: <span class="words-tamil">${Twords}</span></p>`;
    
})

