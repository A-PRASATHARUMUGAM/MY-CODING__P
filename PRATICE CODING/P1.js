function goTo() {
  let c = document.getElementById("input1").value;

  let  f=c[Math.floor(Math.random()*6)+1]; 
  let r = document.getElementById("result");
  r.innerHTML =f;


}
fname="prasath"
lname="arumugam"

console.log(fname +" "+ lname);

console.log(`${fname} ${lname}`);