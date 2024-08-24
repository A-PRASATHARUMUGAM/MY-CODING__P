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
const totalwords=englishWords+tamilWords;


addButton.addEventListener("click",()=>{
    const Ewords=englishWords.value;
    const Twords=tamilWords.value;
    const words=document.createElement('p');
    words.className="words-english";
    words.innerHTML=`${Ewords} : <span class="words-tamil">${Twords}</span>`;    
    wordsContainer.appendChild(words); 
    
})


