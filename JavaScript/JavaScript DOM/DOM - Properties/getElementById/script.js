const foodContainer =document.getElementById("input-food-container");
const inputFood=document.getElementById("input-food");
const inputFoodButton=document.getElementById("input-food-button")



inputFoodButton.addEventListener('click',()=>{

  let yourFood=inputFood.value;
  const result =document.createElement("p");
  result.innerText=yourFood;
  foodContainer.append(result)


  
result.addEventListener("click",()=>{
result.classList="striketext";

result.addEventListener("dblclick",()=>{
  result.remove()
});

})

})
