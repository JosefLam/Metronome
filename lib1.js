// timeser
console.log("Setting up timeser");
const txt1 = document.getElementById("txt1");
const txt2 = document.getElementById("txt2");
var answer = 0;

txt1.onchange = function (e) {
    num1 = parseInt(txt1.value);
    num2 = parseInt(txt2.value);
    answer = num1 * num2;
    console.log(answer)
    document.getElementById("display").value = parseStr(answer.value);
    
}

txt2.onchange = function (e) {
    num1 = parseInt(txt1.value);
    num2 = parseInt(txt2.value);
    answer = num1 * num2;
    console.log(answer)
    document.getElementById("display").value = parseStr(answer.value);

}
