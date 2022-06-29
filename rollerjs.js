function dota() {
    const element = document.getElementById("rollButtonText");
    element.scrollIntoView(true);
}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    Jopa = Math.floor(Math.random() * (max - min + 1) + min);
    
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
    document.getElementById("firstNumber").innerHTML = Jopa
    document.getElementById("end").innerHTML = "Result"
    return Jopa;
    
}
//RUN WHEN SELECTED + OR *
function updateOp(val) {
    if (val === "+") {
        document.getElementById("znak").innerHTML = "+"
        document.getElementById("end").innerHTML = "Result"
        sign = "+"
        return sign
       // document.getElementById("result").innerHTML = "Your result: "+ (10 + numero);

    }
    else if (val === "*"){
        document.getElementById("znak").innerHTML = "*"
        document.getElementById("end").innerHTML = "Result"
        sign = "*"
        return sign
       // document.getElementById("result").innerHTML = "Your result: "+ (numero * 10);
    }
    else if (val === "null") {
        document.getElementById("znak").innerHTML = "& Operator &"
        document.getElementById("end").innerHTML = "Result"
    }
}
// RUN WHEN INPUT ENTERED
function changeSecondNumber(chislo) {
    vvod = chislo //user input
    document.getElementById("secondNumber").innerHTML = vvod
    document.getElementById("end").innerHTML = "Result"
}
//RUN WHEN BUTTON FOR RESULT PRESSED
function addValues() {

    if (sign == "+") {
        var numero = Jopa;
        var customNumber = parseInt(vvod)//user input
        var gavno = (numero + customNumber);
        document.getElementById("end").innerHTML = gavno}
    if (sign == "*") {
        var numero = Jopa;
        var customNumber = parseInt(vvod) //user input
        var eblan = (numero * customNumber);
        document.getElementById("end").innerHTML = eblan
        }
    }

