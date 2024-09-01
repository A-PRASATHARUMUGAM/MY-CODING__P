
// 1. Set object : -it collection of the value 
//                   -Values are unique it means --> remove the repeating value

// 2. Map object : -it collection of the key-value pairs to store 
//                  -Values are unique it means --> remove the repeating value


// Set Object methods

/*  1.add()     -- it is add value to set
    2.clear()   -- remove all element from set
    3.delete()  -- delete the value to set
    4.entries() -- Return an Iterator with the [value,value] pair from a set
    5.forEach() -- get one by one value element,index,array
    6.has()     -- check the value to set 
    7.keys()    -- it using to get keys     
    8.values()  -- it using to get value 
    9.size()    -- check the size to set 
*/ 

// // Normal object 
// array=[1,2,3,4,4,5,5];
// let obj=new Object(array)

// console.log("Object :",obj);
// console.table(obj);


// // 1.Set object   --> remove the repeating value
// console.log("                       -- new Set --")
                            
// let createSet=new Set(array)
// console.log("Set Object:",createSet);
// console.table(createSet);

//                                 console.log("                   -- add  --")
// let myset=new Set(); 
// myset.add(2)            // -- it is add value to set
// myset.add(2)
// myset.add(2)
// myset.add("prasath")
// myset.add(4)
// console.log(myset);

//                                 console.log("                   -- clear --")
// let set2=[1,2,3,4,5];       //-- clear all values
// let myset2=new Set(set2);
// myset2.clear()
// console.log("clear :",myset2)


//                                 console.log("                   -- delete  --");
// console.log(myset.delete(4));  //--> delete 4
// console.log(myset);
                                        
//                                 console.log("                   -- entries  --");
// let entries = myset.entries() //Return Iterator [value,value] to the set 
// console.log("entries:",entries)

                            
//                                 console.log("                   -- forEach  --");
// myset.forEach((element,index,array)=>{
//     console.log(index);         //get the value one by one
// });

//                                     console.log("                   -- has  --");
// console.log(myset.has(2));  //checking value in the set has(2)

//                                     console.log("                   -- keys  --");
// let keysvalues=new Set(entries);
// console.log(keysvalues.keys());//using to the key values

//                                     console.log("                   -- values  --");
// console.log(keysvalues.values());//using to the key values

 

//                                     console.log("                   -- size  --");
// console.log(myset.size); // checking total size of set object



// // other 

//                                     console.log("                   -- add object --")
// myset.add({a:1,b:2});  //--> object repeating because
// myset.add({a:1,b:3}); //    -it is " Reference Type "
// console.log(myset);
                               

//                                 console.log("                   -- convert to array --");
// arr2=Array.from(myset)  //-->it convert to array
// console.log("changed array",arr2);




// //2. Map Object --> collection of key-value pairs
//                                         console.log("                  new Map"); 


// /*  1.set()     -- it is add value key,value pair
//     2.get()     -- you put key and it return value 
//     3.clear()   -- remove all element from set
//     4.delete()  -- delete the value to set
//     5.entries() -- Return an Iterator with the [value,value] pair from a set
//     6.forEach() -- get one by one value element,index,array
//     7.has()     -- check the value to set 
//     8.keys()    -- it using to get keys     
//     9.values()  -- it using to get value 
//     10.size()    -- check the size to set 
// */ 
//                                     console.log("                   -- set  --");
// let mymap=new Map();
// mymap.set('a',1);   //--> syntax: ('key any', value any)
// mymap.set('b',2);  
// mymap.set('c',3);  
// mymap.set('d',4);  

// console.table(mymap); 
// console.log(mymap); 
   
//                                    console.log("                   -- get  --");
// console.log(mymap.get('a'));


//                                 console.log("                   -- delete  --");
// mymap.delete('d')
// console.log("delete d ",mymap) 


//                                 console.log("                       -- has --")
// console.log(mymap.has('d'));   

//                                   console.log("                   -- size  --");                 
// console.log(mymap.size);




//                 // Get the keys and values using ( for of ) 
//                                 console.log("                        -- for  --");

// //for
// for(let i of mymap){
//     console.log(i)
// }


// // way 2
// for(let [k,v] of mymap){
//     console.log("key",k,"value",v);
// }

// // way 3
// for(let k of mymap.keys()){
//     console.log("key",k);
// }

// for(let v of mymap.values()){
//     console.log("value",v); 
// }



// //forEach
// console.log("       forEach");

// mymap.forEach((v,k)=>{
//     console.log("key",k,"value",v);
// })



//             //2d array to map and spread operator to covert array 
// console.log("       2d Array");  //array to object 

// arr2d=[['a',1],['b','2']];

// map2=new Map(arr2d);
// console.log(map2);
// console.log(...map2); //--> spread operation to convert Array




//                              // 3 .create object and classes

// 1.classes -- It is a template of properties and methods 
//           -- Provides a simpler and clearer syntax for creating objects and managing inheritance.

// 2.

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
// not use ( = )to create class / not using inside (,) / static variable access to className.methodname

// console.log("                 class                  ")

// class User{   
//      static numberOfUsers=0;   //-->static variable
//     constructor(name,age){
//     //instance variable
//         this.name=name;
//         this.age=age;    
//         User.numberOfUsers++;   //--> static variable access to classname.static-varibale
//     }
//     login(){
//         console.log("login",this.name)
         
//      }
//      logOut(){
//         console.log("logout",this.name)
//      }
//      static staticMethod(){    //---> static Method it invoking to classname.methodname
//     console.log("Total users ",User.numberOfUsers); 
//   }
// }

// let user1=new User('prasath',20);
// let user3=new User('karthi',30);
// let user4=new User('sabari',35);

// user1.login();  // non static method invoking to  object name - 1
// user3.logOut();

// //  Static variable access to classname.static-varibale
// console.log("Number of objects",User.numberOfUsers); 

// // Static Method  it invoking to classname.methodname
// User.staticMethod();  // static method invoking to class name - 2



//                      //inheritance : acquiring properties to base class
//                      //              - it is dervied class, child class, sub class 

// class paiduser extends User{  
//     constructor(name,age){
//         super(name,age);  // Call the parent class constructor
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
//     this.name=name;
//     this.age=age;
//     this.login=function(){
//         console.log("your login 1")
//     }
// }
// let userone=new User2('prasath',20);
// userone.login(); 
 

// User2.prototype.login=function(){
//     console.log("your are login inside prototype",this.name );
// }
// console.log(userone)




// // wrapped class to store the premitive data types
// let user5=new String("rray")
// console.log(user5);
// console.log(user5.length);

// //5. Bending set and get 



