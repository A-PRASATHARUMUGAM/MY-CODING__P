// Looping
/*
1. while 
2. do while
3. for loop
4. Nested  for loop
*/

/* 
1. while  loop

        SYNTAX----

    while(Condition){

        Repeating statement 

    }

        EXAMPLE----

    

    let i=0;

    while(i<=5){

        console.log(i);
        i++;

        }
 
    */
   
/*
2. do while  

        SYNTAX---
 do{
     Repeating Statement

 }while(Condition)

        EXAMPLE---


let table=2,limite=5, i=0;
do{
    console.log(table+" X "+i+" = "+(table*i)); 
    i++;

}while(i<=5)

*/

/*

3. for loop

        SYNTAX---

for(initialize value; condition ; statement ){

        Repeation Statement 

}

        EXAMPLE---




for(let i=1;i<=5;i++){

    console.log(i)

}
// for loop to store the value in array 

let arr=[];

for(let i=0;i<100;i++){
  arr.push(i);

}
console.log(arr[50]); 

*/

/* 
 4.Nested for loop

        SYNTAX--
for(initialize value;condition - 2; statement - 2){

        for(initialize value ; condition - 2 ;statement - 2 )

}

        EXAMPLE-- 
let  nums=[];
for(let i=0;i<=3;i++){
        nums.push([]);
    for(let j=0;i<=3;j++){
         nums[i].push(j);
    } 

} 
  */