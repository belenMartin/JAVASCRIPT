//window.onload lo inicializo a una referencia a la funcion que me muestra la funcion principal del ejercicio
window.onload = muestraFuncion;

function calculaFactorial(){
    
    //caso base para parar la recursividad
    //if(numero == 1 || numero == 0){
        //return 1;
    //}else{
        //Llamada recursiva modificando el parametro
       // return numero * calculaFactorial(numero - 1);
    //}
    
    //Estas sentencias inicializando la variable tabla me imprimen una tabla con el factorial de los numeros del 1 al 10
    var tabla = "<table border='1' width='300'>";
    tabla += "<tr>";
    for(var i = 1; i <= 10; i++){
        tabla += "<td>"+i+"</td>";
    }
    tabla += "</tr>";
    tabla += "<tr>";
    for(var i = 1; i <= 10; i++){
        //caso base para parar la recursividad
        if(i == 1){
            tabla += "<td>"+1+"</td>";
        }else{
            //Llamada recursiva modificando el parametro
            tabla += "<td>"+i * (i - 1)+"</td>";
        }
    }
    tabla += "</tr>";
    tabla += "</table>";
    
    return tabla;
}

function muestraFuncion(){
    //La variable numero almacena la entrada de usuario de un numero
    //var numero = parseInt(prompt("Introduce un numero"));
    
    //Imprimo la llamada a la funcion
    document.getElementById("factorial").innerHTML = calculaFactorial();       
}