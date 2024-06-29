//                             // Array In JavaScirpt

// // find the index in Array
// let arr=['a','b','c','d'];

// console.log("indexvalue 1:",arr[1]);

// console.log("indexOf b :",arr.indexOf("b"));

// // lastElement in Array
// console.log("lastIndexOf d:",arr.lastIndexOf("d"));

// console.log("length -1 :",arr.length-1);

// //2d array
// let  arr2=['a','b','c','d',[3,4,5]];
// console.log("2d array",arr2[4][1])   //--> arr2[indexvalue][indexvalue 2nd array]

// //matrix form  array
// let matrix=[[1, 2, 3],[4, 5, 6],[7, 8, 9]]
// console.log("Matrxi form array",matrix[1][1]);



//                                 // Array Methods

// arr=['p','r','a','s','a','t','h'];

// // push --> It add the element form Array End
// arr.push('f');      //It is return new lenght
// console.log("push :",arr);   


// // pop --> It remove the element form Array End
// arr.pop();       //It is return removed element
// console.log("pop :",arr);


// //shift --> It is remove element from array start
// arr.shift();        //It is return removed element  
// console.log("shift :",arr);  

// //unshift--> It is add the element form Array Start
// arr.unshift("p")
// console.log("unshift :",arr); 
 

// //delete  --> It is not using mostly because it is delete the element empty/undefined
//  delete arr["2"];
// console.log("delete :",arr);  
//                                 //This Method to Insert, Delete, Replace
//                                 //splice(from start index, delected count ,n no replace )

// //splice(from start index, deleted count) --> starting the element index to from number of count delete

// console.log("splice remove:",arr.splice(1,2));

// //splice(from start index, deleted count ,replace element "n")
// arr.splice(0,2,'z','z');
// console.log("splice replace :",arr); 

// //splice(from start index, deleted count ,n no replace element)
// arr.splice(0,2,'p','r','a','s'); //It is return  remove value arry format
// console.log("splice add:",arr); 





// //slice (start,end)
// console.log("slice :",arr.slice(1,2));  //ending index not included

// //reverse --> It is reverse the Array
// arr.reverse();
// console.log("reverse :",arr);

// //join --> It is join the array in string format
// let str=arr.join();
// console.log("join :",str);

 
// //split     string  to array 
// fnamr="prasath";
// f=fnamr.split('').reverse().join();
// console.log(f)   


 

let lentext=document.querySelector('#lenbox').value; 
let buttonlen=document.querySelector('#btnlen');

buttonlen.addEventListener('click',()=>{
     let words=lentext.length;
     console.log(words)
   let totallen=document.querySelector('#totalwords').innerHTML=words;
});


     