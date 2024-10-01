                                // Promise 
// // Type - 1 
// const bookingticket =new Promise(data)

// function data(reslove,reject){

//     let booking=true;
//     if(booking){
//         reslove()
//     }else{
//         reject()
//     }
    
// };


// bookingticket.then(success)
// bookingticket.catch(fail)

// function success(){
//     console.log("success")
// }
// function fail(){
//     console.log("fail")
// }


// // Type - 2      --> it is prefered 

// function ticketbooking(){

// return new Promise((resolve,reject)=>{

//     let booking=true;  

//     if(booking){
//         resolve(100)
//     }else{
//         reject()
//     }
// });
 
// }

// ticketbooking().then((amt)=>{
//     console.log("verified",amt);
// })
// // create more " then " using to check condition  
// .then(()=>{
//     console.log("again verified")
// })
// .catch(()=>{
//     console.log("unverified");
// });




// Example -1


// function tossCoin(){
//     return new Promise((resolve,reject)=>{
//     let rand=Math.floor(Math.random()*2)
//     // 0-head     1-tail
//       if(rand==0){
//           resolve()
//       }else{
//         reject()

//       }  

//     });
// }
// tossCoin().then(()=>console.log("head"))
// .catch(()=>console.log("tail"))


/*                   --- Promise Method --- > it static method

                    Promise-state -> pending, resolved, rejcted

1.Promise.all([reachA,reachB,reachC])    -- like AND  
    -- TTT= it timing to return  all T
    -- TTF= it not timing return first F
    -- FFF= it not timing return first F
    -- FFT= it not timing return first F

2.Promise.allSettled()                   -- all printed  (resolve or reject --> Settled) 
Output :
        (3) [{…}, {…}, {…}]
    0: {status: 'rejected', reason: 'kandhan not reached 1'}
    1: {status: 'fulfilled', value: 'sabari reached 2'}
    2: {status: 'fulfilled', value: 'prasath reached 3'}
    length:3


3.Promise.any()                          -- like OR  
    -- TTT= it timing to return  first T
    -- TTF= it timing return first T
    -- FFF= no return all Promise were rejected 
    -- FFT= it timing return first T

4.Promise.race()                          -- like AND 
    -- TTT= it timing to return  first only T 
    -- TFF= it not timing return first F 
    -- FFF= it not timing return first F 
    -- FTT= it not timing return first F 

*/

// let reachA=new Promise((resolve,reject)=>{
//      reached=false;
//      if(reached){ 
//         setTimeout(resolve,1000,"kandhan reached 1");

//      }else{
//         reject("kandhan not reached 1")
//      }
     
// })

// let reachB=new Promise((resolve,reject)=>{
//      reached=true;
//      if(reached){
//         setTimeout(resolve,2000,"sabari reached 2");

//      }else{
//         reject("sabari not reached 2")
//      }
     
// })

// let reachC=new Promise((resolve,reject)=>{
//      reached=true;
//      if(reached){
//         setTimeout(resolve,3000,"prasath reached 3");

//      }else{
//         reject("prasath not reached 3")
//      }
     
// }) 


// Promise.allSettled([reachA,reachB,reachC])

// .then((message)=>{
//     console.log(message)
// })
// .catch((message)=>{
//     console.log(message);
// })



