window.onload = inicializa;

//Esta funcion me crea la tabla pequeña con celdas de 100x100 simulando un canvas
function inicializa(){
    var tabla = "<table border='1' id='myCanvas'>";
    tabla += "<tr>";
    tabla += "<td width='100' height='100' id='uno' onmousemove=\"dibujar(event)\" onclick=\"borraLineas()\" oncontextmenu=\"borrarCanvas()\">&nbsp;</td>";
    tabla += "<td width='100' height='100' id='dos' onmousemove=\"dibujar(event)\" onclick=\"borraLineas()\" oncontextmenu=\"borrarCanvas()\">&nbsp;</td>";
    tabla += "<td width='100' height='100' id='tres' onmousemove=\"dibujar(event)\" onclick=\"borraLineas()\" oncontextmenu=\"borrarCanvas()\">&nbsp;</td>";
    tabla += "</tr>";
    tabla+= "<tr>";
    tabla += "<td width='100' height='100' id='cuatro' onmousemove=\"dibujar(event)\" onclick=\"borraLineas()\" oncontextmenu=\"borrarCanvas()\">&nbsp;</td>";
    tabla += "<td width='100' height='100' id='cinco' onmousemove=\"dibujar(event)\" onclick=\"borraLineas()\" oncontextmenu=\"borrarCanvas()\">&nbsp;</td>";
    tabla += "<td width='100' height='100' id='seis' onmousemove=\"dibujar(event)\" onclick=\"borraLineas()\" oncontextmenu=\"borrarCanvas()\">&nbsp;</td>";
    tabla += "</tr>";
    tabla += "</table>";    
    document.getElementById("canvas").innerHTML = tabla;        
}

//Esta funcion me dibuja el canvas de rojo si pulso la tecla control, si pulso la tecla shift me lo dibuja de azul
// y si pulso cualquier otra tecla me lo dibuja de blanco
function dibujar(event){
           if(event.ctrlKey){               
             event.target.style.backgroundColor = "red";
           }else if(event.shiftKey){
             event.target.style.backgroundColor = "blue";
           }else{
             event.target.style.backgroundColor = "white";
           }
}

//Esta funcion pone borde de color blanco a las celdas de la tabla
function borraLineas(){
       document.getElementById("uno").style.backgroundColor = "white";
       document.getElementById("dos").style.backgroundColor = "white";
       document.getElementById("tres").style.backgroundColor = "white";
       document.getElementById("cuatro").style.backgroundColor = "white";
       document.getElementById("cinco").style.backgroundColor = "white";
       document.getElementById("seis").style.backgroundColor = "white"; 
       
       document.getElementById("uno").style.borderWidth = "0px";
       document.getElementById("dos").style.borderWidth = "0px";
       document.getElementById("tres").style.borderWidth = "0px";
       document.getElementById("cuatro").style.borderWidth = "0px";
       document.getElementById("cinco").style.borderWidth = "0px";
       document.getElementById("seis").style.borderWidth = "0px";
}

//Esta funcion borra por completo el canvas
function borrarCanvas(){
       document.getElementById("uno").style.backgroundColor = "white";
       document.getElementById("dos").style.backgroundColor = "white";
       document.getElementById("tres").style.backgroundColor = "white";
       document.getElementById("cuatro").style.backgroundColor = "white";
       document.getElementById("cinco").style.backgroundColor = "white";
       document.getElementById("seis").style.backgroundColor = "white";
       
       document.getElementById("uno").style.borderWidth = "0px";
       document.getElementById("dos").style.borderWidth = "0px";
       document.getElementById("tres").style.borderWidth = "0px";
       document.getElementById("cuatro").style.borderWidth = "0px";
       document.getElementById("cinco").style.borderWidth = "0px";
       document.getElementById("seis").style.borderWidth = "0px";
       
       document.getElementById("uno").style.borderHeight = "0px";
       document.getElementById("dos").style.borderHeight = "0px";
       document.getElementById("tres").style.borderHeight = "0px";
       document.getElementById("cuatro").style.borderHeight = "0px";
       document.getElementById("cinco").style.borderHeight = "0px";
       document.getElementById("seis").style.borderHeight = "0px";
             
      document.getElementById("myCanvas").style.borderWidth = "0px";
      document.getElementById("myCanvas").style.borderHeight = "0px";
}
