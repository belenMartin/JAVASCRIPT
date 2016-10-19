//window.onload lo inicializo a una referencia a la funcion que me muestra la tarea principal del ejercicio
window.onload = muestraEjercicio;

//Esta funcion me une dos arrays con la funcion concat
function ejercicio6(){
    var apartadoGA = [1,2,3,4,5,6,7,8,9,10];
    var apartadoGAa = ["abc","def","ghi","jkl"];
    var union = apartadoGA.concat(apartadoGAa);
    var resultado = "";
    for(var i = 0; i < union.length; i++){
       resultado += union[i]+" "; 
    }
    //Devuelvo en la funcion la variable resultado que almacena el contenido de ambos arrays junto
    return resultado;
}

//Esta funcion muestra por pantalla la llamada a la funcion que realiza la tarea principal del ejercicio
function muestraEjercicio(){
    document.getElementById("ejercicioSeis").innerHTML = ejercicio6();
}
