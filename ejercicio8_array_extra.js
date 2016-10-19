//window.onload lo inicializo a una referencia a la funcion que me muestra la tarea principal del ejercicio
window.onload = muestraEjercicio;

//Esta funcion me elimina, con el metodo shift, el primer elemento del array
function ejercicio8(){
    var apartadoI = ["esta","palabra","es","mia"];    
    var resultado1 = "";
    var resultado2 = "";
    for(var i = 0; i < apartadoI.length; i++){
        resultado1 += apartadoI[i]+" ";
    }
    apartadoI.shift();
    for(var i = 0; i < apartadoI.length; i++){
        resultado2 += apartadoI[i]+" ";
    }
    //Devuelvo en la funcion la variable resultado1 que almacena el array sin modificar y el resultado2 que almacena el array con el primer elemento extraido
    return resultado1+"<br>"+resultado2;
}

//Esta funcion me muestra la llamada a la funcion que realiza la tarea principal del ejercicio
function muestraEjercicio(){
    document.getElementById("ejercicioOcho").innerHTML = ejercicio8();
}
