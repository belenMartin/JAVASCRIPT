function inicializa(){
   var botonFile = document.createElement("input");
   botonFile.setAttribute("type","file");
   document.getElementById("cuerpo").appendChild(botonFile);
   
   var botonUno = document.createElement("input");
   botonUno.setAttribute("type","button");
   botonUno.setAttribute("value","Adjuntar otro fichero");
   botonUno.setAttribute("onclick","function aniadirFichero(){var miBoton = document.createElement('input');miBoton.setAttribute('type','file');document.getElementById('cuerpo').appendChild(miBoton);}aniadirFichero();");
   document.getElementById("cuerpo").appendChild(botonUno);
   
   var botonDos = document.createElement("input");
   botonDos.setAttribute("type","button");
   botonDos.setAttribute("value","Enviar");
   document.getElementById("cuerpo").appendChild(botonDos);
   
}
inicializa();
