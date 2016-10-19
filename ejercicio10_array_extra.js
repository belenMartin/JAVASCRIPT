//window.onload lo inicializo a una referencia a la funcion que me muestra la tarea principal del ejercicio
window.onload = muestraEjercicio;

//Esta funcion me reemplaza un elemento del array por una cadena
function ejercicio10(){
    var apartadoK = [1,2,3,4,5,6,7,8,9,10];
    var aCadena = apartadoK.toString();
    var resultado1 = "";
    var resultado2 = "";
    for(var i = 0; i < aCadena.length; i++){
       resultado1 += aCadena[i]+" "; 
    }
    var res = aCadena.replace(8,"gafas");
    for(var i = 0; i < res.length; i++){
        resultado2 += res[i]+" ";
    }
    //Devuelvo en la funcion la variable resultado1 donde almaceno el array convertido a cadena sin modificar y la variable resultado2 donde almaceno el array convertido a cadena ya con el elemento reemplazado
    return resultado1+"<br>"+resultado2;
}

//Esta funcion me muestra la llamada a la funcion que realiza la tarea principal del ejercicio
function muestraEjercicio(){
    document.getElementById("ejercicioDiez").innerHTML = ejercicio10();
}
