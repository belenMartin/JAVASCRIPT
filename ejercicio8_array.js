//window.onload lo inicializo a una referencia a la funcion que me muestra la funcion principal del ejercicio
window.onload = muestraEjercicio;

function ejercicio8(){
    //La variable numeroAleatorio1 la inicializo a su valor por defecto
    var numeroAleatorio1 = "";
    //La variable numeroAleatorio2 la inicializo a su valor por defecto
    var numeroAleatorio2 = "";
    //La variable dosDados la inicializo a un array vacio
    var dosDados = [];
    //La variable numeros la inicializo a su valor por defecto
    var numeros = "";
    //Esta serie de variables las inicializo a 0
    var unoUno = 0;
    var unoDos = 0;
    var unoTres = 0;
    var unoCuatro = 0;
    var unoCinco = 0;
    var unoSeis = 0;
    var dosUno = 0;
    var dosDos = 0;
    var dosTres = 0;
    var dosCuatro = 0;
    var dosCinco = 0;
    var dosSeis = 0;
    var tresUno = 0;
    var tresDos = 0;
    var tresTres = 0;
    var tresCuatro = 0;
    var tresCinco = 0;
    var tresSeis = 0;
    var cuatroUno = 0;
    var cuatroDos = 0;
    var cuatroTres = 0;
    var cuatroCuatro = 0;
    var cuatroCinco = 0;
    var cuatroSeis = 0;
    var cincoUno = 0;
    var cincoDos = 0;
    var cincoTres = 0;
    var cincoCuatro = 0;
    var cincoCinco = 0;
    var cincoSeis = 0;
    var seisUno = 0;
    var seisDos = 0;
    var seisTres = 0;
    var seisCuatro = 0;
    var seisCinco = 0;
    var seisSeis = 0;        
    
    //Este bucle for me recorre 36000 simulaciones de lanzamientos de dos dados
    for(var i = 0; i <= 35999; i++){
        //La variable numeroAleatorio1 la inicializo a un numero aleatorio entre 1 y 6
        numeroAleatorio1 = Math.round(Math.random()*6)+1;
        //La variable numeroAleatorio2 la inicializo a un numero aleatorio entre 1 y 6
        numeroAleatorio2 = Math.round(Math.random()*6)+1;
        //La variable numeros la inicializo a los dos numeros aleatorios generados anteriormente y a la suma de ellos
        numeros = "<br>Tirada "+(i+1)+": "+numeroAleatorio1+" - "+numeroAleatorio2+" -->"+(numeroAleatorio1+numeroAleatorio2)+"<br>";
        //Añado la variable numeros al array dosDados mediante el metodo push
        dosDados.push(numeros);
        //Esta estructura if la hago para contar el numero de combinaciones que aparece en los dos dados
        if(numeroAleatorio1 == 1 && numeroAleatorio2 == 1){
            unoUno++;
        }else if(numeroAleatorio1 == 1 && numeroAleatorio2 == 2){
            unoDos++;
        }else if(numeroAleatorio1 == 1 && numeroAleatorio2 == 3){
            unoTres++;
        }else if(numeroAleatorio1 == 1 && numeroAleatorio2 == 4){
            unoCuatro++;
        }else if(numeroAleatorio1 == 1 && numeroAleatorio2 == 5){
            unoCinco++;
        }else if(numeroAleatorio1 == 1 && numeroAleatorio2 == 6){
            unoSeis++;
        }else if(numeroAleatorio1 == 2 && numeroAleatorio2 == 1){
            dosUno++;
        }else if(numeroAleatorio1 == 2 && numeroAleatorio2 == 2){
            dosDos++;
        }else if(numeroAleatorio1 == 2 && numeroAleatorio2 == 3){
            dosTres++;
        }else if(numeroAleatorio1 == 2 && numeroAleatorio2 == 4){
            dosCuatro++;
        }else if(numeroAleatorio1 == 2 && numeroAleatorio2 == 5){
            dosCinco++;
        }else if(numeroAleatorio1 == 2 && numeroAleatorio2 == 6){
            dosSeis++;
        }else if(numeroAleatorio1 == 3 && numeroAleatorio2 == 1){
            tresUno++;
        }else if(numeroAleatorio1 == 3 && numeroAleatorio2 == 2){
            tresDos++;
        }else if(numeroAleatorio1 == 3 && numeroAleatorio2 == 3){
            tresTres++;
        }else if(numeroAleatorio1 == 3 && numeroAleatorio2 == 4){
            tresCuatro++;
        }else if(numeroAleatorio1 == 3 && numeroAleatorio2 == 5){
            tresCinco++;        
        }else if(numeroAleatorio1 == 3 && numeroAleatorio2 == 6){
            tresSeis++;
        }else if(numeroAleatorio1 == 4 && numeroAleatorio2 == 1){
            cuatroUno++;
        }else if(numeroAleatorio1 == 4 && numeroAleatorio2 == 2){
            cuatroDos++;
        }else if(numeroAleatorio1 == 4 && numeroAleatorio2 == 3){
            cuatroTres++;
        }else if(numeroAleatorio1 == 4 && numeroAleatorio2 == 4){
            cuatroCuatro++;
        }else if(numeroAleatorio1 == 4 && numeroAleatorio2 == 5){
            cuatroCinco++;
        }else if(numeroAleatorio1 == 4 && numeroAleatorio2 == 6){
            cuatroSeis++;
        }else if(numeroAleatorio1 == 5 && numeroAleatorio2 == 1){
            cincoUno++;
        }else if(numeroAleatorio1 == 5 && numeroAleatorio2 == 2){
            cincoDos++;
        }else if(numeroAleatorio1 == 5 && numeroAleatorio2 == 3){
            cincoTres++;
        }else if(numeroAleatorio1 == 5 && numeroAleatorio2 == 4){
            cincoCuatro++;
        }else if(numeroAleatorio1 == 5 && numeroAleatorio2 == 5){
            cincoCinco++;
        }else if(numeroAleatorio1 == 5 && numeroAleatorio2 == 6){
            cincoSeis++;
        }else if(numeroAleatorio1 == 6 && numeroAleatorio2 == 1){
            seisUno++;
        }else if(numeroAleatorio1 == 6 && numeroAleatorio2 == 2){
            seisDos++;
        }else if(numeroAleatorio1 == 6 && numeroAleatorio2 == 3){
            seisTres++;
        }else if(numeroAleatorio1 == 6 && numeroAleatorio2 == 4){
            seisCuatro++;
        }else if(numeroAleatorio1 == 6 && numeroAleatorio2 == 5){
            seisCinco++;
        }else if(numeroAleatorio1 == 6 && numeroAleatorio2 == 6){
            seisSeis++;
        }
    }        
    //Devuelvo en la funcion la variable dosDados de tipo array y las variables que almacenan cada una de las combinaciones posibles
    return "Números del dado: <br>"+dosDados+"<br><br>1 - 1: "+unoUno+" veces<br>1 - 2: "+unoDos+" veces<br>1 - 3: "+unoTres+" veces<br>1 - 4: "+unoCuatro+" veces<br>1 - 5: "+unoCinco+" veces<br>1 - 6: "+unoSeis+" veces<br>2 - 1: "+dosUno+" veces<br>2 - 2: "+dosDos+" veces<br>2 - 3: "+dosTres+" veces<br>2 - 4: "+dosCuatro+" veces<br>2 - 5: "+dosCinco+" veces<br>2 - 6: "+dosSeis+" veces<br>3 - 1: "+tresUno+" veces<br>3 - 2: "+tresDos+" veces<br>3 - 3: "+tresTres+" veces<br>3 - 4: "+tresCuatro+" veces<br>3 - 5: "+tresCinco+" veces<br>3 - 6: "+tresSeis+" veces<br>4 - 1: "+cuatroUno+" veces<br>4 - 2: "+cuatroDos+" veces<br>4 - 3: "+cuatroTres+" veces<br>4 - 4: "+cuatroCuatro+" veces<br>4 - 5: "+cuatroCinco+" veces<br>4 - 6: "+cuatroSeis+" veces<br>5 - 1: "+cincoUno+" veces<br>5 - 2: "+cincoDos+" veces<br>5 - 3: "+cincoTres+" veces<br>5 - 4: "+cincoCuatro+" veces<br>5 - 5: "+cincoCinco+" veces<br>5 - 6: "+cincoSeis+" veces<br>6 - 1: "+seisUno+" veces<br>6 - 2: "+seisDos+" veces<br>6 - 3: "+seisTres+" veces<br>6 - 4: "+seisCuatro+" veces<br>6 - 5: "+seisCinco+" veces<br>6 - 6: "+seisSeis+" veces";
}

function muestraEjercicio(){
    //Imprimo por pantalla la llamada a la funcion
    document.getElementById("ejercicioOcho").innerHTML = ejercicio8();
}
