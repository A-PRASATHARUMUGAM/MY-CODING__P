//   const name2="sabari"

// function greetconsole(name ){
//     const name1="prasath"
//     console.log(name+" hello")
//     console.log(name2);

// }
// console.log(name1);



function greetdocument(){
      name2="sabari"  //outer function 

    let print=document.getElementById("parentElement")
    print.innerHTML= name + " hello"

    return function greet(name){
        const name1="prasath" // inner function 
        console.log(name2)


    }
 
}


inner=greetdocument();
console.log(inner);


