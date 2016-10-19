//window.onload lo inicializo a una referencia a la funcion que me muestra la tarea principal de ejercicio
window.onload = muestraEjercicio;

//Esta funcion me dice el numero mas grande del array
function inicializa(){
    var apartadoA = [1,2,3,4,5,6,7,8,9,10];
    var numeroMasGrande = 0;
    var resultado = 0;
    for(var i = 0; i < apartadoA.length; i++){
        numeroMasGrande = apartadoA[i];
        if(apartadoA[i] > numeroMasGrande){
            resultado = apartadoA[i];
        }else{
           resultado = numeroMasGrande; 
        }        
    }
    //Devuelvo en la funcion la variable resultado que almacena el numero mas grande del array
    return resultado;
}

//Esta funcion me imprime por pantalla la llamada a la funcion que me dice el numero mas grande del array
function muestraEjercicio(){
    document.getElementById("ejercicioUno").innerHTML = "El número más grande es: "+inicializa();
}