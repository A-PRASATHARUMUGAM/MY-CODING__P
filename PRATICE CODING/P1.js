function goTo() {
  let c = document.getElementById("input1").value;

  let f = c[Math.floor(Math.random() * 6) + 1];
  let r = document.getElementById("result");
  r.innerHTML = f;


}
console.error("custom Error")
console.warn("custom warning")
console.clear();


console.time("Timer");

for (i = 0; i < 10; i++) {
  console.log()
}
console.timeEnd("Timer");



const student=({"name":"prasath","age":20});
console.table(student);
console.log(student.name);
student.name="sabari";
console.table(student);


var a=Symbol();
var b=Symbol();
console.log(a==b);

var fname="sabari";
console.log("Your name is : "+ fname);
// 

// let   c=[1,2,3,4,5];
//       f=String(c); 
//     console.log(f);


 a=10;
 a=a+10;
 console.log(a);
