const lengthcontainer=document.querySelector(".length-container");
const lengthinput=document.querySelector(".length-input");
const convertbutton=document.querySelector(".convert-button")
const result=document.createElement("div");

convertbutton.addEventListener('click',()=>{
   let cmval=lengthinput.value;
    inches=cmval/2.56;
    lengthcontainer.appendChild(result);
    result.textContent=inches;

})