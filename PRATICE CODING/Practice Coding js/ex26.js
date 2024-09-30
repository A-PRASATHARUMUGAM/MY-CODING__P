                                // Promise 
// // Way - 1 
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


// // Way - 2  -- it is preffered 

// function ticketbooking(){

// return new Promise((resolve,reject)=>{

//     let booking=true; 

//     if(booking){
//         resolve()
//     }else{
//         reject()
//     }
// });
 
// }

// // create more " then " using to check condition 
// ticketbooking().then(()=>{
//     console.log("verified");
// })
// .then(()=>{
//     console.log("again verified")
// })
// .catch(()=>{
//     console.log("unverified");
// });




// // Example -1


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

                    Promise -> pending, resolved, rejcted

1.Promise.all([reachA,reachB,reachC])    -- like AND  -> return - false
2.Promise.allSettled()                   -- all printed  (resolve or reject --> Settled) 
3.Promise.any()                          -- like OR  -> return - true 
4.Promise.race()                         -- first resolve print

*/

// let reachA=new Promise((resolve,reject)=>{
//      reached=true
//      if(reached){
//         setTimeout(resolve,3000,"kandhan reached");

//      }else{
//         reject("kandhan not reached")
//      }
     
// })

// let reachB=new Promise((resolve,reject)=>{
//      reached=false
//      if(reached){
//         setTimeout(resolve,1000,"sabari reached");

//      }else{
//         reject("sabari not reached")
//      }
     
// })

// let reachC=new Promise((resolve,reject)=>{
//      reached=false
//      if(reached){
//         setTimeout(resolve,1000,"prasath reached");

//      }else{
//         reject("prasath not reached")
//      }
     
// })


// Promise.race([reachA,reachB,reachC])

// .then((message)=>{
//     console.log(message)
// })
// .catch((message)=>{
//     console.log(message);
// })


// 3. Promise.race() 
// TTT= first true return
// FFF= first false  return 
// TTF= first false return 

