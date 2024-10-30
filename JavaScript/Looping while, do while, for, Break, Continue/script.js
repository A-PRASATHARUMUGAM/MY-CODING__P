// Looping
/*
1. while 
2. do while
3. for loop
4. Nested  for loop
5. for of -- it is using to get the values from Array
6. for in -- it is using to get the values from  Object  
*/

/* 
1. while  loop

        SYNTAX----

    while(Condition){

        Repeating statement 

    }

*/ 
    
// EXAMPLE----

let i=0;

while(i<=5){

    console.log(i);
    i++;

    }


/*
2. do while  

    SYNTAX---
do{
 Repeating Statement

}while(Condition)
*/

// EXAMPLE---

table=2,limite=5, i=0;
do{
console.log(table+" X "+i+" = "+(table*i)); 
i++;

}while(i<=5)



/*3. for loop

    SYNTAX---

for(initialize value; condition ; statement ){

    Repeation Statement 

}

*/


// EXAMPLE---

for(let i=1;i<=5;i++){

console.log(i)

}

// for loop to store the value in array 

let arr=[];

for(let i=0;i<100;i++){
arr.push(i);

}
console.log(arr[50]); 



//4.Nested for loop

   /*   SYNTAX--
for(initialize value;condition - 2; statement - 2){

    for(initialize value ; condition - 2 ;statement - 2 )

}
*/

// EXAMPLE-- 
let  nums=[];
for(let i=0;i<3;i++){
    nums.push([]);
for(let j=0;j<3;j++){
     nums[i].push(j);
} 

} 
console.table(nums)



// 5. for of loop in js 

    // EXAMPLE--
 
let names=["prasath","sabari","arun","logic first"]
for(i=0;i<names.length;i++){
console.log(names[i]);
} 

console.log("-------------------------for of loop :::")

for(fname of names){
console.log(fname);  
}   




//6. for in loop in js 

// EXAMPLE--

let user1={
fname:"Prasath",
age:20,
gender:"Male"
};

for (let data in user1 ){
console.log(data,user1[data]); 
 
}




//  Object to converting array using  for loop

let user={
fname:"Prasath",
age:20,
gender:"Male"
};
// Using in-built function  

// Object.keys
let arr_key=Object.keys(user)
console.table(arr_key); 
// Object.values
let arr_values=Object.values(user)
console.table(arr_values); 

for(i=0;i<arr_key.length;i++){
console.log(arr_key[i]+":"+arr_values[i]);
}





//  Break Statement 

for(i=1;i<=10;i++){
console.log(i)
if(i==4){
break;
}
}
// Continue Statement
console.log("----------------------------")
for(i=1;i<=10;i++){
if(i==4){
continue;
} 
console.log(i) 
}

