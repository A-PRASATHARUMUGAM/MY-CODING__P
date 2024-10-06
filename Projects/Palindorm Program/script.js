
function palindrom(string){
    reverseString=string.split("").reverse().join('');
    if(reverseString==string){
        console.log("It is palindrom :"+reverseString);
    }
    else{

        console.log("It is not palindrom :"+reverseString);
    }
 
}
palindrom(prompt("enter your string"));