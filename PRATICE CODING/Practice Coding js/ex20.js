
export default class Book{
    constructor(data){
        this.name=data;
        this.author=data;
        this.age=data;
    }
     book1(){
        console.log("book1",this.age)
     }
}

let reader1=new Book()
reader1.name="sabari"
reader1.author="prasath"
reader1.age=24;


export function data(){
    console.log("hello data function ")
}

