
//            // ---- Types of Functions in JavaScirpt

// // Function Declaration
// function normalFunction(){
//     console.log("1. Function Declaration")
// }
// normalFunction();

// //Function as Expression (or) Variable Function
// const functionExpression=function(){
//     console.log("2. Function as Expression")
// }
// functionExpression();

// // Arrow Function
// const arrowFunction=()=>{
//     console.log("3. Arrow Function")
// }

// arrowFunction();

// // Function with return
// function functionWithReturn(){

//     return console.log("4. Function with return "); 
// }
// functionWithReturn(); 

// // Arbitrary Function   

//  function sum(){
    
//     let total=0;
//     for(i=0;i<arguments.length;i++)
//         {
//             total+=arguments[i];
//         }                        
//         // console.log(arguments);   // arguments keyword is not working in arrow function 

//         return total 
//  }  
// console.log(sum(10,10,10 ));



//                                 // Function before calling and after calling 
                                    //hoistion 
// hell1();        
// function hell1(){           //call  before and after
//    console.log("normal function ")
// }


// hell2();           
// const hell2=function(){   //call  after only 
//     console.log("function expression ")
//    }


   
// hell3();
// const hell3=()=>{      //call  after only
//     console.log("arrow function ")
// }

//                                     // Default Parameter

// function  my2funciton(name="sabari"){
//     console.log("hi",name);
//   }
//   my2funciton("prasath");
//   my2funciton();

//                                     // Recursion --function calling itself 
// function factorial(n){
     
//   if(n==1){

//       return 1
//   }
//   return n*factorial(n-1);
// }
// console.log(factorial(5)); 

//                              // callback function 


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


// //                             //forEach --method

//forEach   -it is method
console.log("**********using forEach***********")

let array=['prasath','sabari','laptop']

array.forEach((values,index,array)=>{
    console.log("values :",values);
    console.log("index :",index);
    console.log("Array ",array)
}) 

array.forEach((values,index,array)=>{
    array[index]=values.toUpperCase();
});
console.log(array)    

 //for of   -it is looping
 console.log("**********using for of ***********")
 for(val2 of array){
    console.log(val2);
 }



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
// let sum1=0;
// const sumofarry=(arr)=>{
//   for(let val of arr){
//      sum1+=val;
//   }
// return sum1 
// }
// console.log(sumofarry(arr));
   


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

// function arg(){
//         let sum4=0;
//         for(i=0;1<arguments.length;i++){
//             sum4+=arguments[i];
//         }
//         return sum4
// }

// console.log(arg(1,2,3));     


  