//window.onload lo inicializo a una referencia a la funcion que me muestra la tarea principal del ejercicio
window.onload = muestraEjercicio;

//Esta funcion almacena en una variable los numeros pares y en otra variable los numeros impares
function inicializa(){
    var apartadoCD = [1,2,3,4,5,6,7,8,9,10];
    var resultadoPar = "";
    var resultadoImpar = "";
    for(var i = 0; i < apartadoCD.length; i++){
       if(apartadoCD[i] % 2 == 0){
           resultadoPar += apartadoCD[i]+" ";
       }else{
           resultadoImpar += apartadoCD[i]+" ";
       }
    }
    //Devuelvo en la funcion los numeros pares y los numeros impares
    return "Numeros pares: "+resultadoPar+"<br>Numeros impares: "+resultadoImpar+"<br>";
}

//Esta funcion me muestra la llamada a la funcion que hace la tarea principal del ejercicio
function muestraEjercicio(){
   document.getElementById("ejercicioTres").innerHTML = inicializa();
}
