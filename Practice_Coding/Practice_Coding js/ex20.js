

//                              // 1 .Create object and classes

// // 1.classes -- It is a template of properties and methods 
// //           -- Provides a simpler and clearer syntax for creating objects and managing inheritance.

// // 2.
//                                 console.log("             ---- Multiple Objects  ----");

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
//      name:'sabari',
//      age:35,
//      login(){
//         console.log("login",this.name)
         
//      },
//      logOut(){
//         console.log("logout",this.name)
//      }
// }
// user2.login()
//                                     //2.create classs



// //class : it is template of properties and methos 
// //        - Base class ,Parent class, super class
// not use ( = ) to create class / not using inside (,) / static variable and method can  access to className.methodName

//                                 console.log("             ---- Class  ----");



                    
// class User{   
//      static numberOfUsers=0;   //-->static variable

//      constructor(name,age){

//       //instance variable
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
//      console.log("Total users ",User.numberOfUsers); 
//   }
// }

// let user1=new User('prasath',20);
// let user3=new User('sabari',30);
// let user4=new User('karthi',35);

// user1.login();     // non static method invoking to object name - 1
// user3.logOut(); 

// //  Static variable    ---> can access to " classname.static varibale Name ""
// console.log("Number of objects", User.numberOfUsers); 

// // Static Method       ---> it invoking to classname.methodname
// User.staticMethod(); 


//                             console.log("             ---- Inheritance  ----");
//                      //inheritance : acquiring properties to base class
//                      //              - it is dervied class, child class, sub class 

// class Paiduser extends User{  

//     constructor(name,age){
//         super(name,age);   // Call the base class constructor
//         this.storage='100gb';
//     }

//      message(){
//         console.log("you get 100gb memory");
//      }
     
//      //overriding
//      login(){ 
//         console.log("Overriding the base class method ");
//         return this  //-- method chaining to use " return this " --> Object 
//      }
// } 

// let paidusers=new Paiduser("sandy",21); 
 
// paidusers.login();  //--> derived class  method access to base class method  because using (inheritance)


//                     console.log("             ----  Method chaining   ----");
// //method chaining 
// paidusers.login().message(); 


//                                         //3. Old type to create the class
//                                 console.log("   ----  Old type to create the class    ----");

// function User2(name,age){
//     this.name=name;
//     this.age=age;

//     //out side method
//     this.login=function(){
//         console.log("your login ",this.name)
//     }
// }

// let userone=new User2('prasath',20);

// userone.login(); 
 
// // inside the prototype method
// User2.prototype.login=function(){
//     console.log("your are login inside prototype",this.name );
// }

// console.log(userone);


                                                        // others 

// // wrapped class to store the premitive data types
// let user5=new String("rray")
// console.log(user5);
// console.log(user5.length);

