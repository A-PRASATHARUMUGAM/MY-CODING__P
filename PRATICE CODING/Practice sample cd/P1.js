

reducedata=array.reduce((accumulator,currentvalue)=>{

    result=accumulator+currentvalue;
   
     return result;     
},{});

console.log(reducedata);
// result : a:1 b:2 c:3