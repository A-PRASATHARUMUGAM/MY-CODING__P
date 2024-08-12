const searchButton=document.querySelector("#searchbtn");

searchButton.addEventListener('click',()=>{
  const  searchWords=document.querySelector(".search").value;
  window.find(searchWords);

}) 
 