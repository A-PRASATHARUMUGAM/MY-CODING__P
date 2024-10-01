let buttonlen=document.getElementById("btnlen");

buttonlen.addEventListener('click',()=>{
    let lentext=document.getElementById("lenbox").value; 
    let words=lentext.length;
    console.log(words)
  let totallen=document.querySelector('#totalwords')
  totallen.innerHTML= words;
}); 
  