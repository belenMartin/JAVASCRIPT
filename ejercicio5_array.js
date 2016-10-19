//window.onload lo inicializo a una referencia a la funcion que me muestra la funcion principal del ejercicio
window.onload = muestraEjercicio;

function paresImpares(){
    //La variable numerosAleatorios la inicializo a su valor por defecto
    var numerosAleatorios = "";
    //La variable contenidoArray la inicializo a su valor por defecto
    var contenidoArray = "";
    //La variable numerosEnArray la inicializo a un array vacio
    var numerosEnArray = [];
    //Este bucle for lo recorro unas cien veces
    for(var i = 0; i <= 99; i++){
        //En esta variable almaceno los numeros aleatorios del 1 hasta el (1000)
        numerosAleatorios = Math.round(Math.random() * 999) + 1;
        //numerosEnArray.push(numerosAleatorios);
        //Esta estructura if la hago para saber si el numero aleatorio almacenado en el array es par, éste se pondría al principio del array y si es impar se pondría al final del array
        if(numerosAleatorios % 2 == 0){
            numerosEnArray.unshift(numerosAleatorios);
        }else{
            numerosEnArray.push(numerosAleatorios);
        }
    }
    //Hago otro bucle for para recorrerme el array de numeros aleatorios
    for(var j = 0; j < numerosEnArray.length; j++){
        //Almaceno en la variable contenidoArray la salida formateada del contenido del array como bien se llama la variable en la que la estoy almacenando
        contenidoArray += "Posicion "+j+": "+numerosEnArray[j]+"<br>";
    }
    //Devuelvo en la funcion la variable contenidoArray
    return contenidoArray;
}

function muestraEjercicio(){
    //Imprimo por pantalla la llamada a la funcion
    document.getElementById("ejercicioCinco").innerHTML = paresImpares();    
}
