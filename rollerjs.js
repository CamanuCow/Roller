function dota() {
    const element = document.getElementById("scrollHere");
    element.scrollIntoView(true);
}
function changeColor(color) {
    if (color === "blue") {
        document.getElementById("fon").style.backgroundColor = "#2b75ff";
        document.getElementById("fon20").style.fill = "#2b75ff";
        document.getElementById("colorSelect").style.backgroundColor = "#2b75ff";
        document.getElementById("numberRolled").style.color = "white"
    }
    if (color === "red") {
        document.getElementById("fon").style.backgroundColor = "#ff007b";
        document.getElementById("fon20").style.fill = "#ff007b";
        document.getElementById("colorSelect").style.backgroundColor = "#ff007b";
    }
    if (color === "green") {
        document.getElementById("fon").style.backgroundColor = "#00ff6a";
        document.getElementById("fon20").style.fill = "#00ff6a";
        document.getElementById("colorSelect").style.backgroundColor = "#00ff6a";
    }
    if (color === "yellow") {
        document.getElementById("fon").style.backgroundColor = "#ffc800";
        document.getElementById("fon20").style.fill = "#ffc800";
        document.getElementById("colorSelect").style.backgroundColor = "#ffc800";
    }
    if (color === "white") {
        document.getElementById("fon").style.backgroundColor = "white";
        document.getElementById("fon20").style.fill = "white";
        document.getElementById("colorSelect").style.backgroundColor = "white";
    }
    
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
function getRandomIntD20(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    Khuy = Math.floor(Math.random() * (max - min + 1) + min);
    document.getElementById("numberRolled").innerHTML = Khuy
    document.getElementById("firstNumber").innerHTML = Khuy
    document.getElementById("end").innerHTML = "Result"
    if (Khuy == 20) {
        document.getElementById("numberRolled").style.textDecoration = "underline"
    }
    else {
        document.getElementById("numberRolled").style.textDecoration = "none"
    }

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
        var numero = parseInt(document.getElementById("firstNumber").innerHTML)
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
function swap() {
    
    if (document.getElementById("btn").checked ) {
        document.getElementById("d20").style.left = "0"
        document.getElementById("throw").style.left = "0"
        document.getElementById("throw").style.transform = "translateX(-50%) scale(0.4)"
        document.getElementById("throw").style.opacity = "0.5"
        document.getElementById("d20").style.transform = "translateX(-65%) scale(1.1)"
        document.getElementById("d20").style.opacity = "1"
        document.getElementById("additionalRoll").setAttribute("onclick", "getRandomIntD20(1, 20)")
    }
    else {
        document.getElementById("throw").style.left = "22%"
        document.getElementById("d20").style.left = "22%"
        document.getElementById("throw").style.transform = "scale(1) translateX(0)"
        document.getElementById("throw").style.opacity = "1"
        document.getElementById("d20").style.transform = "translateX(0) scale(0.48)"
        document.getElementById("d20").style.opacity = "0.5"
        document.getElementById("additionalRoll").setAttribute("onclick", "getRandomIntInclusive(1, 6)")


    }
        
}
function hideInfo() {
    var hidden = document.getElementById("instructions");
    if (hidden.style.display === "none") {
      hidden.style.display = "block";
    } else {
      hidden.style.display = "none";
    }
  }

