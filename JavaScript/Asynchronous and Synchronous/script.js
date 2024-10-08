                                // Synchronous and Asynchronous
                                
// 1. synchronous -- it is blocking - because 1 execution is finish and move next execution 
// 2. Asynchronous -- it is non-blocking - because not waiting for execution setTimeout to continously executing 

console.log("Hello..."); // f1

function sync(){  

    console.log("step 1") // f3 
    console.log("step 2") // f4 
    console.log("step 3") // f5 
}

sync() // f2

console.log(" using setTimeout ") // f6

setTimeout(()=>console.log("step 1"),2000) // f7        //--> minimum time 
setTimeout(()=>console.log("step 2"),1000) // f8
setTimeout(()=>console.log("step 3"),1000) // f9 



setInterval(()=>console.log('hello sabari '),5000)// again and again print 






