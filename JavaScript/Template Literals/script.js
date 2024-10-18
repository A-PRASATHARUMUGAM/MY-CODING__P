                // Template Literals

let first_name="prasath";
let last_name="sabari"
let full_name;

// using ( + ) operator
full_name=first_name+" "+last_name;
console.log("using + operator :"+full_name)

// using backtick
full_name=`${first_name} ${last_name}`
console.log("using backtick :"+full_name);  
 

                // Long literal string 

//Method -- 1   print the one line 
let longString="variable is placeholder "+"it is hold the value from variable name"
+" agian using to assign the values to calculate then reassigining the values and that"
+" is a main reason to using"
+" the variable i  programming language";
console.log(longString);

//Method -- 2    print the one line 
longString="variable is placeholder \ it is hold \
the value from variable name \
agian using to assign the values to calculate then reassigining the values and that \
is a main reason to using \
the variable i  programming language";
console.log(longString);
 
//Method --3   print the below format
longString=`variable is placeholder
it is hold the value from variable name
agian using to assign the values to calculate then reassigining the values and that
is a main reason to using
the variable i  programming language`;
console.log(longString);

// Print the ASCII value 
let ASCII;
ASCII=String.fromCharCode(65,66,67); 
console.log("It is return ascii value ",ASCII);

 