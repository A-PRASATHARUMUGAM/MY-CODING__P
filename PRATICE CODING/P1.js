


function convert(){

    let a = Number( document.getElementById("input1").value);
    let b = Number( document.getElementById("input2").value);
     let c= a+b;
     let d= a-b;
     let e= a*b;
     let f= a/b;
     let g= a%b;
     let result=document.getElementById("result");
      result.innerHTML= "Addition " + c +" <br> subtraction "+d+"<br> Multiplication "+e+"<br> Division "+f+ 
      "<br> Modular Division" +g;
                     
 }
 