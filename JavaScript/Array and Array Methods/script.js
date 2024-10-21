                             //Array In JavaScirpt


// find the index in Array
let arr=['a','b','c','d'];

console.log("indexvalue 1:",arr[1]);

console.log("indexOf b :",arr.indexOf("b"));

// lastElement in Array
console.log("lastIndexOf d:",arr.lastIndexOf("d"));

// other way to find the last element in array 
console.log("length -1 :",arr.length-1);

//2d array
let  arr2=['a','b','c','d',[3,4,5]];
console.log("2d array",arr2[4][2])   //--> arr2[indexvalue][indexvalue 2nd array]

//matrix form  array
let matrix=[[1, 2, 3],[4, 5, 6],[7, 8, 9]]
console.log("Matrxi form array",matrix[1][2]);



                                // Array Methods


 arr.push('f')  // add back
console.log(arr) 
 arr.pop()      // rmv back
console.log(arr) 
 arr.shift()    // rmv start
console.log(arr) 
 arr.unshift('p') //add start 
console.log(arr)  


arr=['p','r','a','s','a','t','h'];

// push --> It add the element form Array End
arr.push('f');      //It is return new lenght
console.log("push :",arr);    



// pop --> It remove the element form Array End
arr.pop();       //It is return removed element
console.log("pop :",arr);


//shift --> It is remove element from array start
arr.shift();        //It is return removed element  
console.log("shift :",arr);  

//unshift--> It is add the element form Array Start
arr.unshift("p")    //It is return new lenght
console.log("unshift :",arr);  
 

//delete  --> It is not using mostly because it is delete the element empty/undefined
 delete arr["2"];
console.log("delete :",arr);  
                                //This Method to Insert, Delete, Replace
                                //splice(from start index, delected count ,n no replace )

//splice(from start index, deleted count) --> starting the element index to from number of count delete
arr.splice(1,2)
console.log("splice remove:",arr); 

//splice(from start index, deleted count ,replace element "n")
arr.splice(0,2,'z','z');
console.log("splice replace :",arr); 

//splice(from start index, deleted count ,n no replace element)
arr.splice(0,2,'p','r','a','s'); //It is return  remove value arry format
console.log("splice add:",arr); 

 

//slice (start,end)
arr.slice(1,2)
console.log("slice :",arr);  //ending index not included

//reverse --> It is reverse the Array
arr.reverse();
console.log("reverse :",arr);

//join --> It is join the string format in array 
let str=arr.join('');
console.log("join :",str);
 

//split     string  to array 
let fname="prasath";
f=fname.split(' ').reverse().join();
console.log(f)   





                        
                                      // Finally Array Method 
/*
1.forEach()
2.map()
3.filter()
4.reduce()
5.sort() 
6.find()
7.fill()
8.flat()
9.every()
10.some()
 */


 //1.forEach()                                   
console.log("                   foreach       get the element one by one but return undefine ");
  
 array=[1,2,3,4,5,'string '] 
                //Value retrun 
 result=array.forEach(callfunction);    //Callback function 

 function callfunction(arrayvalue){
        return arrayvalue
};  
console.log("Return :",result) 
 

                //Condition  
array.forEach((arrayvalue)=>{
    console.log("condition",arrayvalue>1);

});  



                //Calculation      
array.forEach((arrayvalue)=>{
    console.log("calculation ",arrayvalue+1);
});



// 1.map(current value,index,original array)
console.log("                   map              get the element one bye one return the value to array format")

                //Value retrun 
result=array.map((arrayvalue)=>{
    return arrayvalue;
});
console.log("map return ",result);

                //Condition
result=array.map((arrayvalue)=>{
    return arrayvalue>3;
});
console.log("map condition",result); 

                //Calculation      
result=array.map((arrayvalue)=>{
    return arrayvalue+1;
});
console.log("map calculation",result); 


//2.filter(current value,index,original array)
console.log("                   filter                                    condition to filter the value")


                //Value retrun 
result=array.filter((arrayvalue)=>{
    return arrayvalue;
});
console.log("filter return ",result);


                //condition
result=array.filter((arrayvalue)=>{
    return arrayvalue>3;
});
console.log("filter condition",result);

                //Calculation
result=array.filter((arrayvalue)=>{
    return arrayvalue+1; 
});
console.log("filter calculation",result); 


//3. reduce(function(accumulator,currentvalue,currentindex,array){},initialize value);
console.log("                   reduce   calculation ---> add the element in single value  ")


                //Value retrun 
result=array.reduce((accumulator,currentvalue)=>{
    return accumulator+currentvalue;
});
console.log("reduce return ",result);


                //condition
result=array.reduce((accumulator,currentvalue)=>{
    return accumulator+currentvalue>3;
});
console.log("reduce condition",result);
 
                //Calculation
result=array.reduce((accumulator,currentvalue)=>{
    return accumulator+currentvalue+1;
});
console.log("reduce calculation",result); 


//5. sort()
console.log("                            sort                                  ASCII  Value to sorting");


                //first array sort 
array=[1,5,4,3,2,'a']
console.log("orginal array ",array)
result=array.sort()
console.log("sort first array ",result);

console.log("                       ")

                 //second array sort 
array=[65,78,12,34,4]
console.log("orginal array ",array)
result=array.sort()
console.log("sort second array",result);



//6. find()
console.log("                           find                   it is return the first element ");
array=[1,2,3,4,5,6,7];

                //value return 
result=array.find((arrayvalue)=>{
    return arrayvalue;
});
console.log("find return ",result);


                //condition
result=array.find((arrayvalue)=>{
    return arrayvalue>2;
});
console.log("find condition",result);

                //Calculation
result=array.find((arrayvalue)=>{
    return arrayvalue+1; 
});
console.log("find calculation",result); 



//7. fill(value,start,end)
console.log("                           fill                   fill the values");

// FI-P1
array=[1,2,3,4,5,6];
array.fill(20)
console.log(array);

//way 2 
array=[1,2,3,4,5,6];
array.fill(20,2,4); 
console.log(array);  



// 8.flat()  it is using to combain the 2d,3d imensional array
console.log("                           flat       it is using to combain the 2d,3d array");

 array=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
]
result =array.flat()
console.log(result);



//9.every()  it is find the all element are true the condition is true like(AND)
console.log("                  every      it is find the all element are true the condition is true like(AND)");

array=[2,2,2,2,2,2]
result=array.every((value)=>{
     return value>1;

})
console.log("every :",result);



// 10.some() it is find the either one element is true the condition is true link(OR)
console.log("           some   it is find the either one element is true the condition is true link(OR)");

array=[1,1,1,2,1,1,1]
result=array.some((value)=>{
     return value>1;
  
})
console.log("some :",result);





                                // EXAMPLE for Array main method

console.log("                                       ")
console.log("                                           EXAMPLE FOR ARRAY MAIN METHODS")


// 1.forEach one line     --> foreach is return undefined


//  FE-P1
let priceUSD=[20,12,18]
let priceINR=priceUSD.forEach(val=>val * 8);   
console.log(priceINR);

                    // Using forEach Double line
                    priceINR=priceUSD.forEach((val)=>{   // --> foreach is return undefined
                             return val*8 ;                 
                    });  
                    console.log(priceINR); 

                                                //Example map

// 1.map(Current_value,index,orginal_array)   --> it is return value in new array format


//  M-P1 Simple transformation
priceINR=priceUSD.map(x=>x * 8);   //--Arrow function is automatically return the values using one line
console.log(priceINR);        

                    // Arrow Double line
                    priceINR=priceUSD.map((x)=>{
                             return x*8 ;
                    });  
                    console.log(priceINR);

//  M-P2 Change toUpperCase to orginal array
array=['mouse','keyboard','monitor']
let map=array.map((arrval,arrindex,orgarr)=>{
  return orgarr[arrindex]=arrval.toUpperCase();      //return stored (new array format)
});
console.log("orginal array",array); 
console.log("map",map);


//  M-P3 Combining Array 
let fruits=['apple','lemon']
let color=['red','yellow']
 
fruitscolors=fruits.map((fvalue,findex)=>{
      return fvalue+"-"+color[findex];
}); 
console.log(fruitscolors) 


//  M-P4 Print Even Number
array=[1,2,3,4,5]

let evennum=array.map(eveval=>{
   return eveval%2==0;
});

console.log(evennum);


//  M-P5 Extracting  Array of Object
let users=[{fname:'prasath',age:20},{fname:'karthi',age:23}];

let totalusers=users.map((usrvalu)=>{
     
       return { 
         fname:usrvalu.fname,
         age:usrvalu.age+1,
       };
         
      });
console.log(totalusers)
   
                                                //Example filter

// 2. filter(Current_value,index,Original_array ) --it checking condition true then store value. it return in array format

//  F-P1
priceUSD=[20,12,18]
priceINR=priceUSD.filter((val)=>{
    return  val;
     
    });    
console.log(priceINR);


//  F-P2 Greater than value
totalusers=users.filter((usrvalu)=>{ 
         return usrvalu.age>20
  
      });
console.log(totalusers)


//  F-P3 Find the four letter word
array=['cat','dog','elephant','fish','lion'];

animals=array.filter((anvalue,anindex,anarray)=>{
 
   return  anvalue.length==4;  
})   
console.log(animals);  


//  F-P4  filter the fruits
array=[
   {fname:'apple',category:'fruits'},
   {fname:'carret',category:'vegitable'}
]

let fruitsandveg=array.filter(fvalue=>{
         return fvalue.category==='vegitable';
})  
console.log(fruitsandveg); 


//  F-P5  pick the start letter "e"
array=['cat','dog','elephant','fish','lion','Eagle'];

let startletter=array.filter(stvalue=>{
    return stvalue.startsWith('e'); 
 
}) 
 
console.log(startletter);


//  F-P6 checking the product
 fruitsandveg=[
   {fname:'apple',category:'fruits',price:100},
   {fname:'carret',category:'vegitable',price:20},
   {fname:'staberry',category:'fruits',price:130},
   {fname:'lemon',category:'vegitable',price:10},
   {fname:'orange',category:'fruits',price:80},
]

let foodcart=fruitsandveg.filter(fvalue=>{
      return fvalue.category==='fruits' && fvalue.price<100;
 
      })  
  
console.log(foodcart);      

//  F-P7 checking the books

// bending


                                                         //Example reduce

//3. reduce(function(accumulator,currentvalue,currentindex,array){},initialize value);

// R-P1
priceUSD=[20,12,18]
priceINR=priceUSD.reduce((val,el)=>{
        return val+el
       });    
console.log(priceINR); 

//  R-P2 Flattening Array
let nestedarray=[[1,2,3],[4,5,6],[7,8,9]];
priceUSD=[20,12,18]
flattedvalue=nestedarray.reduce(flattedfun)

function flattedfun(acc,currvalue){
     return acc.concat(currvalue);
}
console.log(flattedvalue); 



//   R-P3 Find the color project 
let colors=['red','blue','green','orange','blue','red'];

totalcolors=colors.reduce((acc,currvalue)=>{
            if(currvalue in acc){
               acc[currvalue]++;
            }else{
               acc[currvalue]=1;
            }
            return acc 
},{});   

console.log(totalcolors)

                                  
//R-P4  Find the largest no 
array=[1,3,4,5,5,10];

largestvalue=array.reduce(largestno);
function largestno(acc,crrvalue){
     return Math.max(acc,crrvalue);
}
console.log(largestvalue); 
 



//every-P1
users=[
     {fname:"prasath",age:20},
     {fname:"sabari",age:35},
     {fname:"karthi",age:22},
     {fname:"subash",age:18},];

totaluser=users.every((userval)=>{
         return  userval.age>=18;
    
});
console.log(totaluser);  








 
// Multiple ways to clone an array in JavaScript

// way-1
console.log("       using ...spread operator to clone")
orgarray=[1,2,3,4,5];
// clonearray=orgarray;
clonearray=[...orgarray];
clonearray.push(4);

console.log("org array",orgarray); 
console.log("clone array",clonearray);


// way-2
console.log("                   using slice() to clone")

clonearray=orgarray.slice();
clonearray.push(4); 

console.log("org array",orgarray); 
console.log("clone array",clonearray);

// way-3
console.log("                   using concat() to clone")

clonearray=[].concat(orgarray);
clonearray.push(4);  

console.log("org array",orgarray); 
console.log("clone array",clonearray);



// way-4
console.log("       using Array.from() method to clone")

clonearray=Array.from(orgarray);
clonearray.push(4);  

console.log("org array",orgarray); 
console.log("clone array",clonearray);


// way-5
console.log(" using JSON.prase() and JSON.stringify  method to clone")

clonearray=JSON.parse(JSON.stringify(orgarray));
clonearray.push(4);  
 
console.log("org array",orgarray); 
console.log("clone array",clonearray);


// -----------------------------------------------others---------------


// Use of const for Creating Arrays in JavaScript
console.log(" using const to modifing array not reassign")

const newarray=[1,2,3,4,5];
// newarray=[1] --->it is error because reassign
console.log("orgarray",newarray);
newarray.push(6); // --> it is modified 
console.log("Modified array",newarray);



// Use of const for Creating Object in JavaScript
console.log(" using const to modifing object not reassign")

const newuser={name:"prasath",age:20};
//  newuser={name:"sabari"}; --> it is error

console.log("org object",newuser)

newuser.name="sabari"; 
console.log("Modified object",newuser)

 

 
     