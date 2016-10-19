//window.onload lo inicializo a una referencia a la funcion que me muestra la funcion principal del ejercicio
window.onload = muestraFuncion;

function calculaPotencia(base,exponente){
    
    //caso base para parar la recursividad
    if(exponente == 1){
        return base;
    }else{
        //Llamada recursiva modificando el parametro
        return base * calculaPotencia(base, exponente-1);
    }
}

function muestraFuncion(){
    //Las variables numero1 y numero2, respectivamente almacenan la entrada de usuario de un numero
    var numero1 = parseInt(prompt("Introduce un numero"));
    var numero2 = parseInt(prompt("Introduce otro numero"));
    
    //Imprimo la llamada a la funcion
    document.getElementById("potencia").innerHTML = numero1 +" elevado a "+numero2+" es: "+calculaPotencia(numero1,numero2);
}