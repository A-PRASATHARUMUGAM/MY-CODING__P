//                         // Object in JavaScript 

                            // //Creating object 
// //  Type 1   --it is prefered 
// let items={
//    name:'phone',
//    price:25000,
//    quantity:1

// }
// console.log(items);
// console.table(items);

// // Type 2
//  let items2= new Object();
//  items2.name='charger';
//  items2.price=800;
//  items2.quantity=1;
 
//  console.log(items2);
//  console.table(items2);

                                        //  //Accessing Object

// //1. dot notation  ---it is prefered
// //accessing 
//  console.log(items.price);
// //change the value 
// items.price=4500; 
// console.log(items.price); 

// //add the properties in object  way 1
// items.model="z1"; 
// console.log(items);


// //2. square bracket notation 
// // accessing 
// console.log(items['price']);
// //change the value 
// items['price']=200; 
// console.log(items['price']);

// //add the properties in object way 2
// items['weight']='2kg';
// console.table(items); 


// //3. variable to change the propertie value
// let price="price"
// items[price]=45;
// console.log(items.price);
// console.table(items);

// // variable to add new the properties
// let key="key"
// items[key]=45;
// console.log(items.price);
// console.table(items);



                    //   function create inside the object

newuser={
    name:"prasath",
    age:20, 
    add: function(a,b){           //--> way 1 
        console.log("add")
      
    },
    sub(){
        console.log("sub")       // way 2
    }
};

newuser.add();
newuser.sub(); 








                    
// // Example creating users object to accessing, modifing, add new value.
// users={
//     username:"prasath",
//     id:1122,
//     email:"prasatharumugam011@gmail.com"
// }
// console.table(users);  
// console.log(users.username); //accessing
// users.username="kandhan";   // modifing
// users.phno=9894629002;      //add new value
// console.table(users)


// //clone the object 
// const obj1={a:1,b:2}
// const obj2={c:3,d:4}
// obj3=Object.assign({},obj1,obj2);  
// obj3.b=7; 
// console.log(obj3) 
// console.log(obj1)
// console.log(obj2)

  
