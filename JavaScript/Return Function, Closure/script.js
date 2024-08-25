                            //Returning Function, lexical scoping,  closure

//Returning function: function return the function it means higer order function 

//lexical scoping : inner-function can access outer-variable 

//Closure : Outer-function is already runout but inner-function is binding outervariable to return 



                                    // Returning function
console.log("    --- Returning function      ---      ")
function  outer(){
    let outervariable="outer scope"

    function inner(){
        let innervariable="inner scope"
        console.log(outervariable)      
        console.log(innervariable)
    }
   return  inner
}
let inner=outer(); 
inner() 


                                      // lexical scoping

console.log("    --- lexical scoping      ---      ")

function outer2(name){
    let outervariable="outerscope"

    return function (){
       console.log(outervariable)  // inner function can accessing outer variable it means lexical scoping 
       console.log("hello",name)
    }
}

let inner2=outer2("Prasath");
 
inner2()    

let inner3=outer2("sabari")
inner3()

console.log("     ---  closure    ---      ")

inner2()  //---> Outer-function is already runout but inner-function is binding outervariable to return 




                                             // Best Example for closure 

console.log("     ---  Best Example for closure  --- ");

function mixadd(x){

    return function(y){
        return x+y;
    }
}

let add5=mixadd(5)

console.log(add5(10));

let add100=mixadd(5)
console.log(add100(100));


console.log(add5(10)); //---> Outer-function is already runout but inner-function is binding outervariable to return 



