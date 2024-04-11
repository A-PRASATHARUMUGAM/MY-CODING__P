function convert(){

  const c=Number(document.getElementById("input1").value)
  const f=(c * 9/5)+32+"F";
  const result=document.getElementById("result");
  result.innerHTML= f ;
}

var a=Symbol();
let b=Symbol();
console.log(typeof (a))
console.log(typeof (b))

if(a==b)
{

  console.log(true);
}
