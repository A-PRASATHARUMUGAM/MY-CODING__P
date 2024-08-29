
let fdInput=document.querySelector(".fd-input");
let fdButton=document.querySelector(".fd-button");
let fdResult=document.querySelector(".fd-result");
fdResult.style.marginTop="10px";

fdButton.addEventListener("click",()=>{
    let fdMonth=fdInput.value;
    let fdIntrest

    if(fdMonth<3){
        fdIntrest="5.8%"
        fdResult.innerText= fdIntrest;
    }else if(fdMonth>=3 && fdMonth<=6){
        fdIntrest="6.5%"
        fdResult.innerText= fdIntrest;

    }else if(fdMonth>=7 && fdMonth<=7){ 
        fdIntrest="6.8%"
        fdResult.innerText= fdIntrest;

    }else{
        fdIntrest="7%"
        fdResult.innerText= fdIntrest;
    }
    
})
