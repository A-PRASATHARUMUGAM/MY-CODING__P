                        // JSON - JavaScript Object Notation 

/*  1. JSON  -JavaScript Object Notation 
    2. You can create object in Json include key to string format
    3. Default Json format is array of object
        {"employee":[
            {"firstname":"prasath" ,"lastname":"Arumugam"}
            {"firstname":"prasath" ,"lastname":"Arumugam"}
            {"firstname":"prasath" ,"lastname":"Arumugam"}
        ]}
    4. JSON.parse(object)  -- it is string to array of object convert
       JSON.strigify(object)  -- it is array of object to string convert

  */ 
                        


// // 1.create JSON 

// // String 
// let json1="sabari";

// // Number
// let json2=32;

// // Boolean
// let json3=true;

// // Array
// let json4=[1,2,3,4,5];

// // Object         --> include (" ") in key and value
// let json5={
//     "name":"prasath",
//     "age":21
// }
// // 2.  JSON Data seperate array of object 
// let json= ` [
//     {"name":"prasath","age":35},
//     {"name":"sabari","age":21},
//     {"name":"kandhan","age":22} 
// ]`;
// console.log(json);

// //JSON.parse() string  to array of object   
// let jsonparse=JSON.parse(json);
// console.log(jsonparse);

// //JSON.stringify() array of object  to string    
// let jsonstrignify=JSON.stringify(jsonparse);
// console.log(jsonstrignify)