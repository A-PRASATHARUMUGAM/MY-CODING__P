// const menu=document.querySelector(".menu");
// const menu2=document.querySelector(".showmenu1")
// const menuList=document.querySelector(".navbar ul")

// menu2.addEventListener('click',()=>{
//    menuList.classList.toggle("showmenu");
// });



//                               //  pratice Array Methods

// //1. map(current-value,index,orgn-array)   --> it is return value in new array format
// array=['mouse','keyboard','monitor']
// let map =array.map((arrval,arrindex,orgarr)=>{
//   return orgarr[arrindex]=arrval.toUpperCase();      //return stored (new array format)
// });
// console.log("orginal array",array);
// console.log("map",map);

//       //foreach(current-value,index,orgn-array)
// array=['mouse','keyboard','monitor']
// let foreach=array.forEach((arrval,arrindex,orgarr)=>{    
   
//    return arrval.toUpperCase();                        //return not store (undefined)
// }); 
// console.log("forEach",foreach); 


// //2. Practice Combining Array --> map
// let fruits=['apple','lemon']
// let color=['red','yellow']
 
// fruitscolors=fruits.map((fvalue,findex)=>{
//       return fvalue+"-"+color[findex];
// }); 
// console.log(fruitscolors) 

// //3. Practice Print evennum
// array=[1,2,3,4,5]

// let evennum=array.map(eveval=>{
//    return eveval%2==0;
// });

// console.log(evennum)

// //4.Practice   Extracting  Array of Object
// let users=[{fname:'prasath',age:20},{fname:'karthi',age:23}];

// let totalusers=users.map((usrvalu)=>{
     
//        return { 
//          fname:usrvalu.fname,
//          age:usrvalu.age+1,
//        };
         
//       });
// console.log(totalusers)
   
 


// //2.filter(current-value,index,orgn-array) 
// //    P1
// totalusers=users.filter((usrvalu)=>{ 
//          return usrvalu.age>20
  
//       });
// console.log(totalusers)

// // P2
// array=['cat','dog','elephant','fish','lion'];

// animals=array.filter((anvalue,anindex,anarray)=>{
 
//    return  anvalue.length==4;  
// })   
// console.log(animals)   


// //P3  filter the fruits
// array=[
//    {fname:'apple',category:'fruits'},
//    {fname:'carret',category:'vegitable'}
// ]

// let fruitsandveg=array.filter(fvalue=>{
//          return fvalue.category==='vegitable';
// })  
// console.log(fruitsandveg); 


// //P4  pick the start letter "e"
// array=['cat','dog','elephant','fish','lion','Eagle'];

// let startletter=array.filter(stvalue=>{
//     return stvalue.startsWith('e'); 
 
// }) 
 
// console.log(startletter)

//  //P5 checking the product
//  fruitsandveg=[
//    {fname:'apple',category:'fruits',price:100},
//    {fname:'carret',category:'vegitable',price:20},
//    {fname:'staberry',category:'fruits',price:130},
//    {fname:'lemon',category:'vegitable',price:10},
//    {fname:'orange',category:'fruits',price:80},
// ]

// let foodcart=fruitsandveg.filter(fvalue=>{
//       return fvalue.category==='fruits' && fvalue.price<100;
 
//       })  
 
// console.log(foodcart);      



// P6 checking the books


//3. reduce(function(accumulator,currentvalue,array){},initialize value);


array=[1,2,3,4,5]

reduce=array.reduce((accumulator,el)=>{
  
  // console.log(accumulator); 
  console.log(el);

})