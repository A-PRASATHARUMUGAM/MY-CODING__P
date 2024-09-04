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


// // Way - 2

// function ticketbooking(){

// return new Promise((resolve,reject)=>{

//     let booking=false; 

//     if(booking){
//         resolve()
//     }else{
//         reject()
//     }
// });
 
// }

// ticketbooking().then(()=>{
//     console.log("verfied");
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
// tossCoin()
// .then(()=>console.log("head"))
// .catch(()=>console.log("tail"))


/*                   --- Promise Method --- > it static method

                    Promise - pending, resolved, rejcted

1.Promise.all([reachA,reachB,reachC])    -- like AND  -> return - false
2.Promise.allSettled()                   -- all printed  (resolve or reject --> Settled) 
3.Promise.any()                          -- like or  -> return - false
3.Promise.race()                         -- first resolve print

*/