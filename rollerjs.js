function dota() {
    const element = document.getElementById("calc");
    element.scrollIntoView(false);
}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    Jopa = Math.floor(Math.random() * (max - min + 1) + min);
    document.getElementById("firstNumber").innerHTML = Jopa
    var img = document.getElementById("cube");
    if (Jopa == 1) {
        img.src = "Res/Side1D6.png";
    }
    else if (Jopa == 2) {
        img.src = "Res/Side2D6.png";
    }
    else if (Jopa == 3) {
        img.src = "Res/Side3D6.png";
    }
    else if (Jopa == 4) {
        img.src = "Res/Side4D6.png";
    }
    else if (Jopa == 5) {
        img.src = "Res/Side5D6.png";
    }
    else if (Jopa == 6) {
        img.src = "Res/Side6D6.png";
    }
    return Jopa;
    
}
//RUN WHEN SELECTED + OR *
function updateOp(val) {
    if (val === "+") {
        document.getElementById("znak").innerHTML = "+"
        sign = "+"
        return sign
       // document.getElementById("result").innerHTML = "Your result: "+ (10 + numero);

    }
    else if (val === "*"){
        document.getElementById("znak").innerHTML = "*"
        sign = "*"
        return sign
       // document.getElementById("result").innerHTML = "Your result: "+ (numero * 10);
    }
}
// RUN WHEN INPUT ENTERED
function changeSecondNumber() {
    var vvod = 10 //user input
    document.getElementById("secondNumber").innerHTML = vvod
}
//RUN WHEN BUTTON FOR RESULT PRESSED
function addValues() {

    if (sign == "+") {
        var numero = Jopa;
        var customNumber = 10//user input
        var gavno = (numero + customNumber);
        document.getElementById("end").innerHTML = gavno}
    if (sign == "*") {
        var numero = Jopa;
        var customNumber = 10 //user input
        var eblan = (numero * customNumber);
        document.getElementById("end").innerHTML = eblan
        }
    }

