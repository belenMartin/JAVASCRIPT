function inicializa(){
    
    var j = 0;
    
    var miDiv = document.createElement("div");
    miDiv.setAttribute("id","caja");    
    document.getElementById("cuerpo").appendChild(miDiv);
    
    document.getElementById("caja").innerHTML = "Contador = "+j;
    
    document.getElementById("cuerpo").innerHTML += "<br><br>";
    
    var boton = document.createElement("input");
    boton.setAttribute("type","button");
    boton.setAttribute("value","Contador");
    boton.setAttribute("onclick","function cuenta(){var i = 0;document.getElementById('caja').innerHTML = 'Contador = '+(i+1);}cuenta();");
    document.getElementById("cuerpo").appendChild(boton);
    
    
    
}
inicializa();
