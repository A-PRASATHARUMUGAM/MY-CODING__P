

// if(true){
//     const x=9;
//     console.log(x);
// } 
// // console.log(x);     


// function alpha(){
//     var z=9;
//     console.log(z);
// } 
// alpha() 
// console.log(z);   

//  function sum(a,b){
    
//     let total=0;
//     // for(i=0;i<arguments.length;i++)
//     //     {
//     //         total+=arguments[i];
//     //     }
//    arguments.length;
//    console.log(arguments)
//  }  
// console.log(sum());

function palindrom(string){
    reverseString=string.split("").reverse().join('');
    if(reverseString==string){
        console.log("It is palindrom :"+string);
    }
    else{

        console.log("It is not palindrom :"+string);
    }
 
}
palindrom("madam")

let first_name="prasath"
c=[...first_name].reverse().join('');
console.log(c)
c=first_name.split('');
console.log(c)

