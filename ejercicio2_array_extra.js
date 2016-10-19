//window.onload lo inicializo a una referencia a la funcion que me muestra la tarea principal del ejercicio
window.onload = muestraEjercicio;

//Esta funcion me dice qué palabra es más larga de una cadena convertida en array
function inicializa(){
    var apartadoB = "ese,jardin,television,revista";
    var palabras = apartadoB.split(",");
    var cadenaMasLarga = 0;
    var resultado = "";
    var resultado2 = "";
    for(var i = 0; i < palabras.length; i++){        
        if(palabras[i].length > cadenaMasLarga){
            resultado2 = palabras[i];
            resultado = palabras[i].length+" letras";
            cadenaMasLarga = palabras[i].length;
        }else{
            resultado = cadenaMasLarga+" letras";
        }
    }
    //Devuelvo en la funcion la variable resultado en la que almaceno la palabra mas larga de las cadenas que se almacenan en el array
    return resultado+" --> "+resultado2;
}

//Esta funcion me muestra la tarea principal del ejercicio
function muestraEjercicio(){
    document.getElementById("ejercicioDos").innerHTML = "La cadena mas larga es: "+inicializa();
}