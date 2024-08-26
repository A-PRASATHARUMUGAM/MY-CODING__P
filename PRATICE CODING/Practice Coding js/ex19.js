
// 1. Set object : -it collection of the value 
//                   -Values are unique it means --> Avoid the repeating value

// 2. Map object : -it collection of the key-value pairs to store 
//                  -Values are unique it means --> Avoid the repeating value



array=[1,2,3,4,4,5,5];

// Normal object 
let obj=new Object(array)

console.log("Object :",obj);
console.table(obj);


// 1.Set object   --> Avoid the repeating value
                            console.log("                       -- new Set --")
                            
let createSet=new Set(array)
console.log("Set Object:",createSet);
console.table(createSet);

                // Set methods

/*  1.add()     -- it is add value to set
    2.delete()  -- delete the value to set
    3.has()     -- check the value to set 
    4.size()    -- check the size to set 
    5.clear()   -- not sure 
    6.entries() -- not sure
    7.forEach() -- get one by one value element,index,array
    8.keys()    -- it using to get keys     
    9.values()  -- it using to get value 
*/ 

                                console.log("                   -- add value --")
let myset=new Set();
myset.add(2)
myset.add(2)
myset.add(2)
myset.add("prasath")
myset.add(4)
console.log(myset);

                                console.log("                   -- add object --")

myset.add({a:1,b:2});  //--> object repeating because
myset.add({a:1,b:3}); //    -it is " Reference Type "
console.log(myset);

                                console.log("                   -- delete 4 --");
console.log(myset.delete(4));  //--> delete 4
console.log(myset);

                                console.log("                   -- checking value in the set has(2) --");
console.log(myset.has(2));  //checking 2 in the set object  it true 

                              
                                console.log("                   -- checking size  --");
console.log(myset.size); // checking total size of set object

                               
                                console.log("                   -- convert to array --");
arr2=Array.from(myset)  //-->it convert to array
console.log("changed array",arr2);




// //2. Map Object --> collection of key-value pairs
// console.log("                   Map"); 


// let map1=new Map();
// map1.set('a',1);  //--> syntax: ('key any', value any)
// map1.set('b',2);  
// map1.set('c',3);  
// map1.set('d',4);  

// console.table(map1); 
// console.log(map1); 

// console.log(map1.size);
// console.log(map1.has('a',1));   

// map1.delete('d')
// console.log("delete d ",map1) 
 

// // Example
// console.log("       for");

// //for
// for(let i of map1){
//     console.log(i)
// }


// // way 2
// for(let [k,v] of map1){
//     console.log("key",k,"value",v);
// }

// // way 3
// for(let k of map1.keys()){
//     console.log("key",k);
// }

// for(let k of map1.values()){
//     console.log("value",k); 
// }



// //forEach
// console.log("       forEach");

// map1.forEach((v,k)=>{
//     console.log("key",k,"value",v);
// })



// //2d array to map
// console.log("       2d Array");

// arr2d=[['a',1],['b','2']];

// map2=new Map(arr2d);
// console.log(map2);
// console.log(...map2); //--> spread operation to convert Array




//                              // 3 .create object and classes

// let user={
//      name:'prasath',
//      age:20,
//      login(){
//         console.log("login",this.name)
         
//      },
//      logOut(){
//         console.log("logout",this.name)
//      }
// }
 
// user.login()

// let user2={
//      name:'karthi',
//      age:35,
//      login(){
//         console.log("login",this.name)
         
//      },
//      logOut(){
//         console.log("logout",this.name)
//      }
// }
// user2.login()

// //class : it is template of properties and methos 
// //        - Base class ,Parent class, super class
// console.log("                 class                  ")

// class User{   
//      static numberOfUsers=0;   //-->static variable
//     //instance variable
//     constructor(name,age){
//         this.name=name;
//         this.age=age;    
//         User.numberOfUsers++;
//     }
//     login(){
//         console.log("login",this.name)
         
//      }
//      logOut(){
//         console.log("logout",this.name)
//      }
//      static staticMethod(){    //---> static Method
//     console.log("Total users ",User.numberOfUsers); 
//   }
// }

// let user1=new User('prasath',20);
// let user3=new User('karthi',30);
// let user4=new User('sabari',35);

// user1.login();  // not static method invoking to  object name - 1
// user3.logOut();

// // Static variable 
// console.log("Number of objects",User.numberOfUsers); 

// // Static Method
// User.staticMethod();  // static method invoking to class name - 2



//                                 //inheritance : acquiring properties to base class
//                                 //              - it is dervied class, child class, sub class 

// class paiduser extends User{  
//     constructor(name,age){
//         super(name,age);
//         this.storage='100gb';
//     }
//      message(){
//         console.log("you get 100gb memory")
//      }
     
//      //overriding
//      login(){ 
//         console.log("login 2");
//         return this //-- method chaining to use " return this 
//      }
// } 

// let paidusers=new paiduser("sandy",21); 
 
// paidusers.login();  //--> base class method to access the derived class because using (inheritance)


// //method chaining 
// paidusers.login().message(); 


//                                         //4. Old type to create the class
// function User2(name,age){
//     this.name;
//     this.age;
//     this.login=function(){
//         console.log("loging")
//     }
// }
// let users=new User2('prasath',20);
// users.login(); 
 

// // wrapped class to store the premitive data types
// let user5=new String("rray")
// console.log(user5);
// console.log(user5.length);


// //5. Bending set and get 
// //6. import and export  


