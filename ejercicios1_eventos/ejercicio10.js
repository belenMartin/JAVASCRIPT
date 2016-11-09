var pulsado = true;

function arrastrarImagen(event){
    pulsado = true;
    event.target.style.position = "absolute";
    event.target.style.marginTop = event.screenX;
    event.target.style.marginLeft = event.screenY;
    return pulsado;
}

function soltarImagen(event){
    pulsado = false;
    event.target.style.position = "absolute";
    event.target.style.marginTop = "";
    event.target.style.marginLeft = "";
    return pulsado;
}