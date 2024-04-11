function convert(){

  const c=Number(document.getElementById("input1").value)
  const f=(c * 9/5)+32+"F";
  const result=document.getElementById("result");
  result.innerHTML= f ;
}

let a=false;
a=Number(a);
console.log(a,typeof(a));
