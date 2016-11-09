function inicializa(){
    var saludo = "";
    var color = "";
    var colorP = "";
    if(!document.cookie){        
        var usuario = prompt("Como te llamas?");
        var colorFondo = prompt("Introduce el color de fondo");
        switch(colorFondo){            
            case "azul":
                        color = "blue";
                        break;
                 
            case "verde":
                        color = "green";
                        break;
                        
            case "rojo":
                        color = "red";
                        break;
                        
            case "naranja":
                        color = "orange";
                        break;
                   
            case "rosa":
                        color = "pink";
                        break;
                        
            case "morado":
                        color = "purple";
                        break;
                        
            case "lila":
                        color = "violet";                                    
                        
        }
        var colorParrafo = prompt("Introduce el color de parrafo");
        switch(colorParrafo){            
            case "azul":
                        colorP = "blue";
                        break;
                 
            case "verde":
                        colorP = "green";
                        break;
                        
            case "rojo":
                        colorP = "red";
                        break;
                        
            case "naranja":
                        colorP = "orange";
                        break;
                   
            case "rosa":
                        colorP = "pink";
                        break;
                        
            case "morado":
                        colorP = "purple";
                        break;
                        
            case "lila":
                        colorP = "violet";                                    
                        
        }
        var tamanoLetra = parseInt(prompt("Introduce el tamaño de la letra"));
        var aplicarFondo = document.getElementById("cuerpo").style.backgroundColor = color;
        var aplicarParrafo = document.getElementById("cuerpo").style.color = colorP;
        var tamanioTexto = document.getElementById("cuerpo").style.fontSize = tamanoLetra;
        var fecha = new Date();
        fecha.setMinutes(fecha.getMinutes()+5);
        document.cookie = "nombreUsuario="+usuario+";color_fondo="+aplicarFondo+";color_parrafo="+aplicarParrafo+";tam_letra="+tamanioTexto+";expires="+fecha.toUTCString()+";";
        var cookies = document.cookie = "nombreUsuario="+usuario+";color_fondo="+aplicarFondo+";color_parrafo="+aplicarParrafo+";tam_letra="+tamanioTexto+";";        
        var misCookies = cookies.split(";");
        saludo = "Hola "+misCookies[0].substring(14);        
    }else{
        saludo = "Hola "+misCookies[0].substring(14);
    }
    return saludo;
}

function closeSesion(){
    var cookies = document.cookie="nombreUsuario=;expires=Thu, 01 Jan 1970 00:00:00 UTC";
    if(cookies){
        document.getElementById("cuerpo").style.backgroundColor = "white";
        document.getElementById("cuerpo").style.color = "black";
        document.getElementById("cuerpo").style.fontSize = "";
        document.getElementById("cookies").innerHTML = "Ha cerrado la sesion";
    }
}

document.getElementById("cookies").innerHTML = inicializa();