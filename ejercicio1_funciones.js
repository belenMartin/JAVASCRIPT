//window.onload lo inicializo a una referencia a la funcion que me muestra la funcion principal del ejercicio
window.onload = muestraFuncion;

function maximo(){
    //Inicializo la variable numero a 0 donde voy a almacenar los cuatro valores
    var numeros = 0;
    
    //Inicializo la variable total a 0 donde voy a almacenar el numero maximo con la funcion Math.max()
    var total = 0;
    for(var i = 1; i <= 4; i++){
        //La variable numero se inicializa otra vez a la entrada de usuario segun las vueltas que dé el bucle
        numeros = parseInt(prompt("Introduce un numero"));
        
        //La variable total almacena el numero maximo con la funcion Math.max()
        total = Math.max(numeros);
    }
    
    //Devuelvo en la funcion la variable total
    return total;
}

function muestraFuncion(){    
    //Imprimo la llamada a la funcion   
    document.getElementById("numeroMaximo").innerHTML = "El numero mas grande de los introducidos es: "+maximo();
}