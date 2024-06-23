                /* MATH FUNCTION */

let a,b,c,d;
// c=Math.round(5.8);
// c=Math.round(5.4);
// c=Math.round(-5.2);
 
// c=Math.floor(5.8);
// c=Math.floor(5.4);
// c=Math.floor(-5.8);
// c=Math.floor(-5.4);

// a=Math.ceil(5.8);
// b=Math.ceil(5.4);
// c=Math.ceil(-5.8);
// d=Math.ceil(-5.4);

// a=Math.trunc(2.20);
// b=Math.trunc(-2.80);

// a=Math.sqrt(90);

// b=Math.abs(5);
// c=Math.abs(-2);

// a=Math.pow(2,4)

// b=Math.min(10,20,30,40,50) 
// c=Math.max(10,20,30,40,50) 

// b=Math.random()
// c=Math.floor(Math.random()*50+1)

// a=Math.cos(45) 
// b=Math.tan(45)
// c=Math.log(45)
// d=Math.log2(45)
// e=Math.log10(45)



// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);


//                         /*STRING FUNCTION  */
// let first_name="prasath";
// let last_name="sabari"

// // concatenation
// c=first_name+" "+last_name;
// console.log("concatenation : "+c);

// // concat
// c=first_name.concat(" ",last_name);
// console.log("concat : "+c);

// // Append
// c="prasath";
// c+=" sabari";
// console.log("Append : "+c);

// // Escaping
// c='She can\'t run';
// console.log("Escaping: "+c);

// // Length
// c=first_name.length;
// console.log("Lenght:" +c);

// // UPPER CASE
// c=first_name.toUpperCase();
// console.log("Uppercase: "+c)

// //Lowercase 
// c=first_name.toLowerCase();
// console.log("Lowercase: "+c);

// // index find

// c=first_name.indexOf("a")
// console.log("indexOf: "+c);

// c=first_name.lastIndexOf("a")
// console.log("lastIndexOf: "+c); 

// //character find 
// c=first_name.charAt(1); //-it is resturn the index value to the character 
// console.log("charAt 1 : "+c)
 
// c=first_name.charCodeAt(1); //-it is return the unicode value to the character
// console.log("charCodeAt 1 : "+c)

// //  String Partitioning 

// // 1.slice
// // 2.substring
// // 3.substr  -it is Depricated function


// first_name="0123456789"

// // 1. slice(start,end)
// c=first_name.slice(1,4); 
// console.log("slice : "+c);

//         // --- slice negative value
// c=first_name.slice(-3); 
// console.log("slice negative value : "+c);



// // 2. substring(start,end)
// b=first_name.substring(1,4); 
// console.log("substring :"+b);

//         // --- substring opposite value 
// b=first_name.substring(4,1); 
// console.log("substring opposite value : "+b);



// // 3. substr(start,length)
// a=first_name.substr(1,4); 
// console.log("substr : "+a); 

// //------------------------------  

// //Split()
// first_name="hello world Iam pratice JS"
 
// c=first_name.split(" ");
// console.log("split using space :"+c);
// console.table(c);

// //trim()          -it is using to remove extra space before and after;
// let name1=" prasath "; 

// // trime (before and after remove space )
// c=name1.trim();
// console.log("trim :"+c);
// //trimStart()
// c=name1.trimStart();
// console.log("trimStart :"+c);
// //trimEnd()
// c=name1.trimEnd();
// console.log("trimEnd :"+c);  

// // padStart(lenght,add value) -it is adding something before 
// let bill="Rs.10";
// a=bill.padStart(7,"0");
// console.log("padStart :"+a); 

// // padEnd(lenght,add value)     -it is adding something after 
// a=bill.padEnd(7,"0");
// console.log("padEnd :"+a); 


// //replace(search value,replace value) 
// console.log("Before Replace :"+first_name);
// c=first_name.replace("world","prasath")
// console.log("After replace :"+c)  
 
 
// // includes     -it is using to find the value in string and return True or False;
// c=first_name.includes("world"); 
// console.log("includes :"+c); 

// //search        -it find the word but return the starting index of the word.
// c=first_name.search("world");
// console.log("search :"+c);
// //search -no words in the string return -1
// c=first_name.search("not");
// console.log("No words search :"+c);


// //startWidth     -it is check the start of word
// first_name="prasath"
// c=first_name.startsWith("p");
// console.log("startsWidth :"+c);

// //endWith        -it is check the end of word
// c=first_name.endsWith("p");
// console.log("endsWith :"+c);



 
 
  

 


             