function myfunction(fname){
  user=fname?"hello "+fname:"no name";
  console.log(user);
}
let fname=prompt("Enter your name ? ")
myfunction(fname)   