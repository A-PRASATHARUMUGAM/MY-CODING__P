function convert2(){

let mark=document.getElementById("mark-input").value;
let markgrade=(mark>=90?"Grade A":mark>=80?"Grade B":"Grade C");
let  markresult=document.getElementById("mark-result");
    markresult.innerHTML = markgrade;

}