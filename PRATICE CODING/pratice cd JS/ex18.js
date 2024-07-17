                    //Returning Function and closure

//Returning function: it means heigher order function

//lexical scoping : inner function can access outer variable 

//Closure : Outer function is already runout but inner function is binding value

// // way 1
// function outer(){
//     let outervariable="outer scope"

//     function inner(){
//         let innervariable="inner scope"
//         console.log(outervariable)      
//         console.log(innervariable)
//     }
//    return  inner
// }
// let inner=outer(); 
// inner() 



// //way 2
// console.log("    lexical scoping           ")

// function outer2(name){
//     let outervariable="outerscope"

//     return function (){
//        let innervariable="innerscope"
//        console.log(outervariable)  //--> lexical scoping
//        console.log("hello",name)
//     }
// }

// let inner2=outer2("Prasath");
 
// inner2()      //--> Closure

// console.log("      closure         ")

// let inner3=outer2("sabari")
// inner3()

// console.log("      closure         ")

// inner2()


// // Best Example for closure 
// console.log("      Best Example for closure ");

// function mixadd(x){

//     return function(y){
//         return x+y;
//     }
// }

// let add5=mixadd(5)

// console.log(add5(10));

// let add100=mixadd(5)
// console.log(add100(100));


// console.log(add5(10)); //---> binding value retrun it is closure 




