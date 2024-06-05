/* Control flow statement


1. if
2. if else
3. else if
4. Nested if
5. switch statement



// --------------------------------------------------------------------

1. if

         SYNTAX --------

  if(Condition ){
    Statement
    }

        EXAMPLE ---------

    let age=18;

if(age>=18){
    console.log("You are Eligible to  vote");
}

*/

// --------------------------------------------------------------------

/*

2. if else

        SYNTAX --------

    if(Condition ){

            Statement  True
    }else{

            Statement  False
    }



        EXAMPLE--------


    let age=18;
  if(age>=18){

  console.log("Your Eligible to vote");

  }else{

 console.log("Your Not Eligible to vote");

  }

  */

// --------------------------------------------------------------------


/*

3. else if


        SYNTAX --------

     if(Condition 1 ){

            Statement--1

    }else if(Condition 2)

            Statement--2
    }else{

            Statement--3
    }


        EXAMPLE -------- 1


     mark=102;

        if(mark>=90 && mark<=100){
           console.log("Grade A");
        }
        else if(mark>=80 && mark<=89){
           console.log("Grade B");
        }
       else if (mark>=70 && mark<=79){
           console.log("Grade C");

       }
       else{

           console.log("Grade D");
       }

        EXAMPLE -------- 2

number=-2;

if(number>0){
    console.log("Positive number ");
}
else if (number<0){
    console.log("Negative number");

}
else {
    console.log("Give the number is zero ")
}

   */

// --------------------------------------------------------------------



/*
  4. Nested if 

        SYNTAX -------
     if(Condition ){

        if(Codition){
                                     // <------Nested if 
        }else{

        }
     }
     else{
            statement 
     }
        

 

let tamil=Number(prompt("Enter your  tamil mark"));
let english=Number(prompt("Enter your  english mark"));
let math=Number(prompt("Enter your  maths mark"));

let total =tamil+english+math;

let avg=total/3;
console.log("Total : "+total);
console.log("Average: "+avg.toFixed(2));

if(tamil>=35 && english>=35 && math>=35){ 

    console.log("Result : Pass")

        if(avg>=90 && avg<=100){

                console.log("Grade A")

        }else if(avg>=80 &&avg<=89){
                                                // <------Nested if 
                console.log("Grade B");    
                    
        }else if(avg>=70 && avg<=79){

                console.log("Grade C");

        }else{

                console.log("Grade : Grade D");

        }         
}
else { 

   console.log("Result : Fail")
   console.log("Grade : No Grade ");
}

 */

let alpha=prompt("Enter your alphabetical ");
switch(alpha){

    case 'a':
        console.log("vowles");
    break;

    case 'e':
        console.log("vowles");
    break;

    case 'i':
        console.log("vowles");
    break;

    case 'o':
        console.log("vowles");
    break;

    case 'u':
        console.log("vowles");
    break;

    default:
        console.log("It is not vowles")
    break;
    
}



  
