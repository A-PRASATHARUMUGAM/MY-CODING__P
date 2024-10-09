                        // getElementByClassName




let softwareRequirement=document.getElementsByClassName("req");

console.log(softwareRequirement[0].innerText = "CPU");




// other way to access it means --> softwareContainer > child access 
// 1. the container to put ID to access 
let softwareContainer=document.getElementById("software-container");

let softwareItems =softwareContainer.getElementsByClassName("req");
console.log(softwareItems[2].innerText ="Processor")