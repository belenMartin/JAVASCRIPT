window.onload = inicializa;

//Esta funcion hace uso de event.screenX y event.screenY para mostrar en un elemento HTML la posicion X e Y respecto a la pantalla
function inicializa(event){
    var x = event.screenX;
    var y = event.screenY;
    var resultado = "X: "+x+", Y: "+y;
    document.getElementById("pos").innerHTML = resultado;
}