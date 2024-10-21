//                         // API Application Programming Interface 


// // fetch 1

// fetch('https://dog.ceo/api/breeds/image/random')
// .then((res)=>res.json())
// .then((msg)=>{
//       console.log(msg); 
    
//        let img=document.createElement("img");
//        img.src=msg.message;
//        let fetchcontainer=document.querySelector(".fetch-container");
//        fetchcontainer.appendChild(img);
       
       
// })


// //fetch 2

// fetch('https://cat-fact.herokuapp.com/facts')

// .then(res=>res.json())
//  .then(msg=>{
//     console.log(msg[0].text)
//  })
// .catch((err)=>{
//      console.log(err)
// })



// // fetch 3

// fetch('https://jsonplaceholder.typicode.com/todos',{
// method:'POST',
// headers:{'content-type':'application/json'},
// body:JSON.stringify({
//     userId:22, 
//     id:456,
//     title:'test',
//     competed:true

// })

// })
// .then((res)=>res.json())
// .then((msg)=>{
//     console.log(msg);
// })


// let arr=[1,2,3,4] 

// localStorage.setItem("ds",JSON.stringify(arr));

// window.onload=()=>{
//     let data=localStorage.getItem("ds")
//     console.log(data)
//     console.log("hello")
// }
