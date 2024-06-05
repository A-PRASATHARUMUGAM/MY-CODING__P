function status(){
    let citys=document.getElementById("ex8-select").value;
    let result=document.getElementById("result");
  
    switch(citys)
    {
        case "Villupuram":
            result.innerHTML = "Good villupuram";
            break;`
        case "Chennai":`
            result.innerHTML = "Good Chennai";
            break;
        case "Madhuri":
            result.innerHTML = "Good Madhuri";
            break;
        default:
            result.innerHTML ="City is not found the give value "
            break;
    }
}
 

