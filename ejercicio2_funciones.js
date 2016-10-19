//window.onload lo inicializo a una referencia a la funcion que me muestra la funcion principal del ejercicio
window.onload = muestraFuncion;

function lanzamiento(){
    //Inicializo la variable numeroAleatorio a 0 donde voy a almacenar un numero aleatorio en 1 y 6
    var numeroAleatorio = 0;
    for(var i = 1; i <= 6; i++){
        
        //La variable numeroAleatorio se inicializa otra vez para almacenar ahora sí el numero aleatorio entre 1 y 6
        numeroAleatorio = Math.floor(Math.random() * 6) + 1;
    }
    
    //Devuelvo en la funcion la variable numeroAleatorio
    return numeroAleatorio;
}

function muestraFuncion(){
    //Imprimo la llamada a la funcion
    document.getElementById("numeroAleatorio").innerHTML = "Tirada del dado: "+lanzamiento();
}