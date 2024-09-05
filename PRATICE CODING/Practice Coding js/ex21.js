                                    //1. get and set Method 
 
/*
1.get --> it is use to get the private varibale to access other name  
2.set --> it is use to set the value to private varibale  
*/


class Temperature{
        temp1=24
        constructor(temp2){
          this._temp=temp2; // private variable declare to (  _variableName )
        }
        // get and set as same name beacuse get value and set value 
        get temp3(){  
            return this._temp;
        } 
        set temp3(temp){
          this._temp =temp;
        }
        
}

let tempObject=new Temperature(100)

                                console.log("       -- Before call object  -- ")
console.log(tempObject);
                                console.log("")


tempObject._temp=200; // you not assign private variabel --> using get method
console.log("Directly change private variable :",tempObject._temp); // you not access private variabel directly 
console.log(tempObject);
                                console.log("")


tempObject.temp3=300; // set value 
console.log("set method to change private variable :",tempObject.temp3);//get value 
console.log(tempObject);




