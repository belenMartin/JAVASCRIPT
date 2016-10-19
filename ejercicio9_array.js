//window.onload lo inicializo a una referencia a la funcion que me muestra la funcion principal del ejercicio
window.onload = muestraEjercicio;

function ejercicio9(){
    //La variable numeroAleatorio1 la inicializo a su valor por defecto
    var numeroAleatorio1 = "";
    //La variable numeroAleatorio2 la inicializo a su valor por defecto
    var numeroAleatorio2 = "";
    //La variable dosDados la inicializo a un array vacio
    var dosDados = [];
    //La variable suma la inicializo a un array vacio
    var suma = [];
    //La variable resultado la inicializo a su valor por defecto
    var resultado = "";
    //Este bucle for me recorre 36000 simulaciones de lanzamientos de dos dados
    for(var i = 0; i <= 35999; i++){
        //La variable numeroAleatorio1 la inicializo a un numero aleatorio entre 1 y 6
        numeroAleatorio1 = Math.round(Math.random()*6)+1;
        //La variable numeroAleatorio2 la inicializo a un numero aleatorio entre 1 y 6
        numeroAleatorio2 = Math.round(Math.random()*6)+1;
        //Añado al array suma la suma de los numeros aleatorios generados anteriormente 
        suma.push(numeroAleatorio1 + numeroAleatorio2);
        //Añado al array dosDados los numeros aleatorios generados anteriormente y con el metodo pop aplicado al array suma extraigo su ultimo elemento
        dosDados.push("<br>Tirada "+(i+1)+": "+numeroAleatorio1 +" - "+numeroAleatorio2+" --> "+suma.pop());
    }
    
    //La variable resultado la inicializo al contenido del array dosDados (dos numeros aleatorios) y al contenido del array suma (la suma de esos dos numeros aleatorios)
    resultado = dosDados+" "+suma;

    //Devuelvo en la funcion la variable resultado
    return resultado;
}

function muestraEjercicio(){
    //Imprimo por pantalla la llamada a la funcion
    document.getElementById("ejercicioNueve").innerHTML = ejercicio9();
}
