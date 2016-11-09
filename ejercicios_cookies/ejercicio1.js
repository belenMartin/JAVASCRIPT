function inicializa(){
    var saludo = "";    
    if(!document.cookie){
        var usuario = prompt("Como te llamas?");
        var fecha = new Date();
        fecha.setMinutes(fecha.getMinutes()+5);
        document.cookie = "nombreUsuario="+usuario+";expires="+fecha.toUTCString()+";";
        var cookies = document.cookie = "nombreUsuario="+usuario+";";        
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
        document.getElementById("cookies").innerHTML = "Ha cerrado la sesion";
    }
}

document.getElementById("cookies").innerHTML = inicializa();