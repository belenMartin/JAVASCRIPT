function inicializa(){   
    var i = 1;
    
    var imagen = document.createElement("img");
    imagen.setAttribute("src","imagen1.jpg");
    imagen.setAttribute("width","100");
    imagen.setAttribute("height","100");
    imagen.setAttribute("id","imagenes");
    document.getElementById("cuerpo").appendChild(imagen);
    
    document.getElementById("cuerpo").innerHTML += "<br><br>";
    
    var siguiente = document.createElement("input");
    siguiente.setAttribute("type","button");
    siguiente.setAttribute("value","Siguiente");
    siguiente.setAttribute("onclick","function avanza(){document.getElementById('imagenes').src = 'imagen"+(i+1)+".jpg';if("+i+" == 6){document.getElementById('imagenes').src = 'imagen1.jpg';}}avanza();");
    document.getElementById("cuerpo").appendChild(siguiente);
    
    document.getElementById("cuerpo").innerHTML += "&nbsp;&nbsp;";
    
    var anterior = document.createElement("input");
    anterior.setAttribute("type","button");
    anterior.setAttribute("value","Anterior");
    anterior.setAttribute("onclick","function retrocede(){document.getElementById('imagenes').src = 'imagen"+(i-1)+".jpg';if("+i+" == 1){document.getElementById('imagenes').src = 'imagen6.jpg';}}retrocede();");
    document.getElementById("cuerpo").appendChild(anterior);        
    
}
inicializa();
