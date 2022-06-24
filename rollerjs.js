function dota() {
    const element = document.getElementById("calc");
    element.scrollIntoView(false);
}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var Jopa = Math.floor(Math.random() * (max - min + 1) + min);
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

function updateOp(val) {
    var numero = parseInt(getRandomIntInclusive(1, 6));
    if (val === "+") {

        document.getElementById("result").innerHTML = "Your result: "+ (10 + numero);

    }
    else if (val === "*"){
        document.getElementById("result").innerHTML = "Your result: "+ (numero * 10);
    }
}