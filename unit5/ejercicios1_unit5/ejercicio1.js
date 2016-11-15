function inicializa(){
    var numEnlaces = document.getElementsByTagName("a").length;
    var penultimoEnlace = document.getElementsByTagName("a")[document.getElementsByTagName("a").length-2].href;
    var contador = 0;
    var otroContador = 0;
    
    var enlaces = document.getElementsByTagName("a");
    
    for(var i = 0; i < enlaces.length; i++){
       if(enlaces[i].href == "http://www.google.es/"){
         contador++;  
       } 
    }
    
    var numEnlacesParrafo = document.getElementById("parrafoTres").childNodes;
    
    for(var i = 0; i < numEnlacesParrafo.length; i++){
        if(numEnlacesParrafo[i].nodeName == "A"){
            otroContador++;
        }
    }
    
    return "Numero de enlaces: "+numEnlaces+"<br>Penultimo Enlace: "+penultimoEnlace+"<br>Enlaces que apuntan a google: "+contador+" enlaces<br>Numero de enlaces del tercer parrafo: "+otroContador+"<br>";
}

document.getElementById("resultado").innerHTML = inicializa();
