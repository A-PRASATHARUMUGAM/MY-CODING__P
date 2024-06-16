function myfunction() {

    let mark = document.getElementById("input1").value;
    let Grade=mark>=90?"Grade A":mark>=80?"Grade B":"Grade C"
    let result = document.getElementById("result");
    result.innerHTML = Grade;


}

let nums=[];
for(let i=0;i<3;i++){
    nums.push([]);
    for(let j=0;j<3;j++){
        nums[i].push(j);
    }

}
console.table(nums)