
let calbutton=document.querySelector(".calbutton");
let calresult=document.createElement('div');
calresult.id="calresult";
let calbox=document.querySelector('.calbox').appendChild(calresult);

calbutton.addEventListener('click',()=>{
    let calinput=document.querySelector(".calinput").value;
    calresult.innerHTML=calinput;
   

    

    
}); 



 
     