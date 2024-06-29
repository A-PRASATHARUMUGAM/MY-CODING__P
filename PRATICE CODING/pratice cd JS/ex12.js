//                       // Arbitrary Function in JavaScript  

//  function sum(){
    
//     let total=0;
//     for(i=0;i<arguments.length;i++)
//         {
//             total+=arguments[i];
//         }                        
//         console.log(arguments);              // arguments is not working in arrow function 

// return total 
//  }  
// console.log(sum(11,2,21,1,1 ));

//                          //  Function as Expression in JavaScript 

// const add=function(a,b){
//     console.log(a+b)
//     return a+b;
// }

// add();
// add(12,15);
// console.log(add(12,15))


//                                     // Arrow function
// const add=()=>{

//     console.log("hello world")
// }

// add();    


//                                     // Default Parameter

// function  my2funciton(name="sabari"){
//     console.log("hi",name);
//   }
//   my2funciton("prasath");
//   my2funciton();

//                                     // Recursion - function calling itself 
// function factorial(n){
     
//   if(n==1)
//   return n*factorial(n-1);
// }
// factorial();

//             // --------------------------- Types of Functions in JavaScirpt


// // Function Declaration
// function normalFunction(){
//     console.log("1. Function Declaration")
// }
// normalFunction();

// // Function with return
// function functionWithReturn(){

//     return console.log("2. Function with return "); 
// }
// functionWithReturn();   

// //Function as Expression (or) Variable Function
// const functionExpression=function(){
//     console.log("3. Function as Expression")
// }
// functionExpression();

// // Arrow Function
// const arrowFunction=()=>{
//     console.log("4. Arrow Function")
// }

// arrowFunction();


//                                 // Function before calling and after calling 

// hell();        
// function hell(){           //call  before and after
//    console.log("normal function ")
// }


// hell2();           
// const hell2=function(){   //call  after only 
//     console.log("function expression ")
//    }


   
// hell3();
// const hell3=()=>{      //call and after only
//     console.log("arrow function ")
// }




//                                  //   Pratice functions

// function isPositive(num){
//     if(num>0){
//         console.log("isPositive");
//     }
//     else{
//         console.log("isNegative");
//     }
// }
// isPositive(1);
// isPositive(-4);


// // Question : get the values in array to sum the values using arrow function 
// let arr=[1,2,3,4,5];
// let sum=0;
// const sumofarry=(arr)=>{
//   for(let val of arr){
//     console.log(val);
//   }

// }
// sumofarry(arr);



// // Question 2 : find the area of the circle;

// const area=r=> Math.PI*r*r
// console.log(area(1)); 

// // Question 3 : Adding the Multiple numbers using arrow function

// let multsum=function(){
// let total=0;
//     for(i=0;i<arguments.length;i++){
//         total+=arguments[i];
//     }
//     return total;

// }
// console.log(multsum(12,12));

//                                               // callback function 


// // callback function    EXAMPLE--1
// const greetconsole=(name)=>{     //funciton create 1
//     console.log("hello ",name);
// }


// const greet=(callback)=>{       // callbacking the function 2
//     callback("prasath")
// }

// greet(greetconsole);          // the fucntion passed as arguments 3
  


// //callback function     EXAMPLE--2
// greet(name=>{                 //passed the function definition 
//     console.log("hello2",name);
// }          
// );

//                                                         //forEach --method

// //forEach   -it is method
// console.log("**********using forEach***********")

// const arr2=['prasath','sabari','Abi'];
 
//  const prat=(val)=>{
//     console.log(val);
//  }
//  arr2.forEach(prat);   //the prat is callback

//  //for of   -it is looping
//  console.log("**********using for of ***********")
//  for(val2 of arr2){
//     console.log(val2);
//  }


  
