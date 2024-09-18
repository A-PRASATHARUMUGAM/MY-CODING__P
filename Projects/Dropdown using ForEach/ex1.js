arr=['ECE','IT','CSC','EEE']


arr.forEach(print)
function print(val,index){

const opt=document.createElement('option')
opt.value=val;
opt.textContent=val; 
const dropdowndata=document.querySelector(".dropdown-box").appendChild(opt)
console.log(dropdowndata)
} 
    