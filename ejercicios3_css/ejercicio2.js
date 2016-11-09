var font = 15;
function incrementarFuente(){
    font += 0.1;
    document.getElementById("uno").style.fontSize = font+"px";
    document.getElementById("dos").style.fontSize = font+"px";
    document.getElementById("tres").style.fontSize = font+"px";
    document.getElementById("cuatro").style.fontSize = font+"px";
}

function decrementarFuente(){
    font -= 0.1;
    document.getElementById("uno").style.fontSize = font+"px";
    document.getElementById("dos").style.fontSize = font+"px";
    document.getElementById("tres").style.fontSize = font+"px";
    document.getElementById("cuatro").style.fontSize = font+"px";
}

function tamanoDefecto(){
    document.getElementById("uno").style.fontSize = 15;
    document.getElementById("dos").style.fontSize = 15;
    document.getElementById("tres").style.fontSize = 15;
    document.getElementById("cuatro").style.fontSize = 15;
}

function alinearIzquierda(){
    document.getElementById("uno").style.textAlign = "left";
    document.getElementById("dos").style.textAlign = "left";
    document.getElementById("tres").style.textAlign = "left";
    document.getElementById("cuatro").style.textAlign = "left";
}

function alinearJustificado(){
    document.getElementById("uno").style.textAlign = "justify";
    document.getElementById("dos").style.textAlign = "justify";
    document.getElementById("tres").style.textAlign = "justify";
    document.getElementById("cuatro").style.textAlign = "justify";
}