
// 1. Set object : -it collection of the value 
//              -Values are unique

// 2. Map object : -it collection of the key-value pairs
//              -Values are unique



// array=[1,2,3,4,4,5,5];

// // Normal object 
// let obj=new Object(array)

// console.log("Object :",obj);
// console.table(obj);


// // 1.Set object   --> Avoid the repeating value
// myset=new Set(array)

// console.log("Set Object:",myset);
// console.table(myset);

// console.log("               Example for Set")

// // Example 
// myset2=new Set();
// myset2.add(2)
// myset2.add(2)
// myset2.add(2)
// myset2.add("prasath")
// myset2.add(4)
// console.log(myset2);
// console.log(myset2.delete(4));  //--> delete 4

// myset2.add({a:1,b:2}); //--> object repeating because
// myset2.add({a:1,b:3}); //   -it is " Reference Type "
// console.log(myset2);

// console.log(myset2.size);
// console.log(myset2.has(2));  

// arr2=Array.from(myset2)  //-->it convert to array
// console.log("changed array",arr2);




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


                                        // //4. Old type to create the class
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