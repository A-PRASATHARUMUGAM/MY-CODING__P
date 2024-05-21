// Bitwise operation  examples partice 

function convert3(){
let a=Number(document.getElementById("bitinput1").value);
let b=Number(document.getElementById("bitinput2").value);
bitresult=document.getElementById("bitresult");
bitresult.innerHTML= "and"+(a&b)+"<br>"+"or"+(a|b);

}



