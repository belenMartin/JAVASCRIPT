//window.onload lo inicializo a una referencia a la funcion que me muestra la tarea principal del ejercicio
window.onload = muestraEjercicio;

//Esta funcion me ordena un array de numeros y me ordena otro array de letras
function ejercicio7(){
    var apartadoHA = [10,9,8,7,6,5,4,3,2,1];
    var apartadoHa = ["zyx","rst","lmk","abc"];
    var ordenarHA = apartadoHA.sort(function(a,b){return a-b});
    var ordenarHa = apartadoHa.sort();
    var resultado1 = "";
    var resultado2 = "";
    for(var i = 0; i < ordenarHA.length; i++){
        resultado1 += ordenarHA[i]+" ";
    }
    for(var i = 0; i < ordenarHa.length; i++){
        resultado2 += ordenarHa[i]+" ";
    }
    //Devuelvo en la funcion la variable resultado donde almaceno cada uno de los arrays ordenado
    return resultado1+"<br>"+resultado2;
}

//Esta funcion me muestra la llamada a la funcion que hace la tarea principal del ejercicio
function muestraEjercicio(){
    document.getElementById("ejercicioSiete").innerHTML = ejercicio7();
}
