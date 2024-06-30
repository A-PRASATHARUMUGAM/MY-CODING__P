
let calbutton=document.querySelector(".calbutton");
let calresult=document.createElement('div');
calresult.id="calresult";
let calbox=document.querySelector('.calbox').appendChild(calresult);

calbutton.addEventListener('click',()=>{
    let calinput=Number(document.querySelector(".calinput").value);
    calresult.innerHTML="";
    
});

let calculator="10+11";
add=calculator.split('+');
if(calculator.includes("+")){
    for(val of add){
        add1=Number(val[0]);
         console.log(add1);
    }
}
   

    