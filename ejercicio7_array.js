//window.onload lo inicializo a una referencia a la funcion que me muestra la funcion principal del ejercicio
window.onload = muestraEjercicio;

//Esta funcion del apartado A me inicializa un array de diez elementos puestos a 0
function apartadoA(){
    var miArray = [];
    for(var i = 0; i <= 9; i++){
        miArray.push(0);
    }
    return miArray;
}

//Esta funcion del apartado B me añade 1 a cada uno de los diez elementos del array
function apartadoB(){
    var miArray = [];
    for(var i = 0; i <= 9; i++){
        miArray.push(0+1);
    }
    return miArray;
}

//Esta funcion del apartado C muestra los valores del array separados por espacios
function apartadoC(){
    var miArray = [];
    var contenidoArray = "";
    for(var i = 0; i <= 9; i++){
        miArray.push(0+1);
    }
    
    for(var i = 0; i < miArray.length; i++){
        contenidoArray += miArray[i]+" ";
    }
    return contenidoArray;    
}

function muestraEjercicio(){
    //Imprimo por pantalla las llamadas a las funciones apartadoA, apartadoB y apartadoC
    document.getElementById("ejercicioSiete").innerHTML = apartadoA()+"<br>"+apartadoB()+"<br>"+apartadoC();
}
