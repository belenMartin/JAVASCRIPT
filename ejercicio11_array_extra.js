//window.onload lo inicializo a una referencia a la funcion que realiza la tarea principal del ejercicio
window.onload = muestraEjercicio;

//Esta funcion encuentra los nombres que empiezan con J y los ordena todos ellos incluidos los que no empiezan alfabeticamente
function ejercicio11(){
    var apartadoL = ["Julia","Jimena","Isabella"];
    var patron = /^J/g;
    var resultado = [];
    var resultadoOtro = "";
    for(var k = 0; k < apartadoL.length; k++){
        if(apartadoL[k].match(patron)){
          resultado.push(apartadoL[k].match(patron)+apartadoL[k].charAt(1)); 
        }else{
          resultado.push(apartadoL[k].charAt(0));
        }
    }
    resultado.sort();
    //Este bucle for me recorre el array ordenado alfabeticamente por las iniciales del nombre
    for(var k = 0; k < resultado.length; k++){
        resultadoOtro += resultado[k]+" ";
    }
    //Devuelvo en la funcion la variable resultadoOtro que almacena las iniciales de los nombres del array ordenadas alfabeticamente
    return resultadoOtro;
}

//Esta funcion me muestra la llamada a la funcion que realiza la tarea principal del ejercicio
function muestraEjercicio(){
    document.getElementById("ejercicioOnce").innerHTML = ejercicio11();
}
