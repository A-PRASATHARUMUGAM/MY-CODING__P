function myfunction() {

    let mark = document.getElementById("input1").value;
    let Grade=mark>=90?"Grade A":mark>=80?"Grade B":"Grade C"
    let result = document.getElementById("result");
    result.innerHTML = Grade;


}
