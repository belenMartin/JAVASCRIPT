//window.onload lo inicializo a una referencia a la funcion que me muestra la tarea principal del ejercicio
window.onload = muestraEjercicio;

//Esta funcion me añade al array una nueva cadena de caracteres con el metodo unshift
function ejercicio9(){
    var apartadoJ = ["esta","palabra","es","mia"];
    var resultado1 = "";
    var resultado2 = "";
    for(var i = 0; i < apartadoJ.length; i++){
       resultado1 += apartadoJ[i]+" ";
    }
    apartadoJ.unshift("hola mundo");
    for(var i = 0; i < apartadoJ.length; i++){
        resultado2 += apartadoJ[i]+" ";
    }
    //Devuelvo en la funcion la variable resultado1 que almacena el array sin modificar y la variable resultado2 que almacena el array con el nuevo elemento añadido al principio
    return resultado1+"<br>"+resultado2;
}

//Esta funcion me muestra la llamada a la funcion que realiza la tarea principal del ejercicio
function muestraEjercicio(){
    document.getElementById("ejercicioNueve").innerHTML = ejercicio9();
}
