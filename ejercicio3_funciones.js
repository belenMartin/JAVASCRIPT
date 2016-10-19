//window.onload lo inicializo a una referencia a la funcion que me muestra la funcion principal del ejercicio
window.onload = muestraFuncion;

function lanzamiento(){
    //Inicializo la variable numeroAleatorio a su valor por defecto 
    var numeroAleatorio = "";
    
    //Inicializo las variables uno, dos, tres, cuatro, cinco y seis; respectivamente a su valor por defecto
    var uno = 0;
    var dos = 0;
    var tres = 0;
    var cuatro = 0
    var cinco = 0;
    var seis = 0;
    
    for(var i = 1; i <= 6000; i++){
        //La variable numeroAleatorio se inicializa otra vez con un numero aleatorio del 1 al 6 simulando 6000 tiradas de un dado con un bucle for        
        numeroAleatorio = Math.floor(Math.random() * 6) + 1;
        
        //Esta estructura if me indica si el numero aleatorio es uno o si es dos o si es tres o si es cuatro o si es cinco o si es seis se incrementa en uno las variables del uno al seis inicializadas a 0 anteriormente
        if(numeroAleatorio == 1){
            uno++;
        }else if(numeroAleatorio == 2){
            dos++;
        }else if(numeroAleatorio == 3){
            tres++;
        }else if(numeroAleatorio == 4){
            cuatro++;
        }else if(numeroAleatorio == 5){
            cinco++;
        }else if(numeroAleatorio == 6){
            seis++;
        }
    }
    
    //Devuelvo en la funcion el numero de ocurrencias de los numeros del 1 al 6 que han salido como numeros aleatorios en el bucle for simulando 6000 tiradas de un dado
    return "El numero 1 aparece "+uno+" veces<br>El numero 2 aparece "+dos+" veces<br>El numero 3 aparece "+tres+" veces<br>El numero 4 aparece "+cuatro+" veces<br>El numero 5 aparece "+cinco+" veces<br>El numero 6 aparece "+seis+" veces<br>";
}

function muestraFuncion(){
    //Imprimo la llamada a la funcion
    document.getElementById("muchasTiradas").innerHTML = lanzamiento();
}