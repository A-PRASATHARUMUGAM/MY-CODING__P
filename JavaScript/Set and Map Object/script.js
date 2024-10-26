
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

// Normal object   
array=[1,2,3,4,4,5,5];
let obj=new Object(array)

console.log("Object :",obj);
console.table(obj);


// 1.Set object   --> remove the repeating value
console.log("                       -- new Set --")
                            
let createSet=new Set(array)
console.log("Set Object:",createSet);
console.table(createSet);

                                console.log("                   -- add  --")
let myset=new Set(); 
myset.add(2)            // -- it is add value to set
myset.add(2)
myset.add(2)
myset.add("prasath")
myset.add(4)
console.log(myset);

                                console.log("                   -- clear --")
let set2=[1,2,3,4,5];       //-- clear all values
let myset2=new Set(set2);
myset2.clear()
console.log("clear :",myset2)


                                console.log("                   -- delete  --");
console.log(myset.delete(4));  //--> delete 4
console.log(myset);
                                        
                                console.log("                   -- entries  --");
let entries = myset.entries() //Return Iterator [value,value] to the set 
console.log("entries:",entries)

                            
                                console.log("                   -- forEach  --");
myset.forEach((element,index,array)=>{
    console.log(index);         //get the value one by one
});

                                    console.log("                   -- has  --");
console.log(myset.has(2));  //checking value in the set has(2)

                                    console.log("                   -- keys  --");
let keysvalues=new Set(entries);
console.log(keysvalues.keys());//using to the key values

                                    console.log("                   -- values  --");
console.log(keysvalues.values());//using to the key values

 

                                    console.log("                   -- size  --");
console.log(myset.size); // checking total size of set object



// other 

                                    console.log("                   -- add object --")
myset.add({a:1,b:2});  //--> object repeating because
myset.add({a:1,b:3}); //    -it is " Reference Type "
console.log(myset);
                               

                                console.log("                   -- convert to array --");
arr2=Array.from(myset)  //-->it convert to array
console.log("changed array",arr2);




//2. Map Object --> collection of key-value pairs
                                        console.log("                  new Map"); 


/*  1.set()     -- it is add value key,value pair
    2.get()     -- you put key and it return value 
    3.clear()   -- remove all element from set
    4.delete()  -- delete the value to set
    5.entries() -- Return an Iterator with the [value,value] pair from a set
    6.forEach() -- get one by one value element,index,array
    7.has()     -- check the value to set 
    8.keys()    -- it using to get keys     
    9.values()  -- it using to get value 
    10.size()    -- check the size to set 
*/ 
                                    console.log("                   -- set  --");
let mymap=new Map();
mymap.set('a',1);   //--> syntax: ('key any', value any)
mymap.set('b',2);  
mymap.set('c',3);  
mymap.set('d',4);  

console.table(mymap); 
console.log(mymap); 
   
                                   console.log("                   -- get  --");
console.log(mymap.get('a'));


                                console.log("                   -- delete  --");
mymap.delete('d')
console.log("delete d ",mymap) 


                                console.log("                       -- has --")
console.log(mymap.has('d'));   

                                  console.log("                   -- size  --");                 
console.log(mymap.size);




                // Get the keys and values using ( for of ) 
                                console.log("                        -- for  --");

//for
for(let i of mymap){
    console.log(i)
}


// way 2
for(let [k,v] of mymap){
    console.log("key",k,"value",v);
}

// way 3
for(let k of mymap.keys()){
    console.log("key",k);
}

for(let v of mymap.values()){
    console.log("value",v); 
}



//forEach
console.log("       forEach");

mymap.forEach((v,k)=>{
    console.log("key",k,"value",v);
})



            //2d array to map and spread operator to covert array 
console.log("       2d Array");  //array to object 

arr2d=[['a',1],['b','2']];

map2=new Map(arr2d);
console.log(map2);
console.log(...map2); //--> spread operation to convert Array
                            

      