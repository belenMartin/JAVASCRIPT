//window.onload lo inicializo a una referencia a la funcion que me muestra la tarea principal del ejercicio
window.onload = muestraEjercicio;

//Esta funcion me dice las palabras del array que contienen los caracteres 'is'
function ejercicio4(){
    var miArray = ["isquiosis","semillas","santoral","celebrar","this is a string"];
    var patron = /is/g;
    var resultado = "";
    for(var i = 0; i < miArray.length; i++){
       if(patron.test(miArray[i])){
           resultado += miArray[i]+" -- ";
       } 
    }
    //Devuelvo en la funcion la variable resultado donde almaceno las palabras que contienen los caracteres 'is'
    return resultado;
}

//Esta funcion me muestra la llamada a la funcion que realiza la tarea principal del ejercicio
function muestraEjercicio(){
    document.getElementById("ejercicioCuatro").innerHTML = "Palabras que contienen los caracteres 'is': "+ejercicio4();
}