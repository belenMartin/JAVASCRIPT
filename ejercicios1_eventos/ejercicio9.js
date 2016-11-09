var pulsado = true;

function arrastrarImagen(event){
    pulsado = true;
    document.getElementById("miImagen").style.position = "absolute";
    document.getElementById("miImagen").style.marginTop = event.screenX;
    document.getElementById("miImagen").style.marginLeft = event.screenY;
    return pulsado;
}

function soltarImagen(){
    pulsado = false;
    document.getElementById("miImagen").style.position = "absolute";
    document.getElementById("miImagen").style.marginTop = "";
    document.getElementById("miImagen").style.marginLeft = "";
}