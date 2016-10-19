//window.onload lo inicializo a una referencia a la funcion que realiza la tarea principal del ejercicio
window.onload = muestraEjercicio;

//Esta funcion me dice los numeros de un array que son divisibles por 3
function ejercicio5(){
    var numeros = [1,2,3,4,5,6,7,8,9,10];
    var resultado = "";
    for(var i = 0; i < numeros.length; i++){
       if(numeros[i] % 3 == 0){
           resultado += numeros[i]+" ";
       }       
    }
    //Devuelvo en la funcion la variable resultado que almacena los numeros del array que son divisibles por 3
    return resultado;
}

//Esta funcion me muestra la llamada a la funcion que realiza la tarea principal del ejercicio
function muestraEjercicio(){
    document.getElementById("ejercicioCinco").innerHTML = "Múltiplos de 3: "+ejercicio5();
}
