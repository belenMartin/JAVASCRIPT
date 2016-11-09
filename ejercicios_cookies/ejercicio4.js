function CrearCookie(id,valor,exdays){
    var fecha = new Date();
    var expires = fecha.setTime(fecha.getTime()+(exdays * 24 * 60 * 60 * 1000));
    var cookies = document.cookie = id+"="+valor+";expires="+expires+";";
    var cook = cookies.split(";");
    var resultado = "";
    if(cookies){
      resultado = cook[0].substring(9);
    }else{
      resultado = "No hay cookie";  
    }
    return resultado;
}
document.getElementById("cookies").innerHTML = "La cookie es "+CrearCookie("miCookie","prueba",1);

function LeerCookie(id){
    var fecha = new Date();
    var expires = fecha.setTime(fecha.getTime()+(1 * 24 * 60 * 60 * 1000));
    var cook = document.cookie = id+"=prueba;expires="+expires+";";
    var cookies = cook.split(";");
    var resultado = "";
    if(cook){
        resultado = cookies[0].substring(9);
    }else{
        resultado = "NULL: no hay cookie";
    }
    return resultado;
}
document.getElementById("cookies").innerHTML += "<br>La cookie es "+LeerCookie("miCookie");

function BorrarCookie(){
    var fecha = new Date();
    var expires = fecha.setTime(fecha.getTime()+(1 * 24 * 60 * 60 * 1000));
    var cook = document.cookie = "id=prueba;expires="+expires+";";
    if(cook){
      document.cookie = "id=;expires = Thu 01 Jan 1970 00:00:00 UTC";  
    }
    return "Ha borrado la cookie";
}
document.getElementById("cookies").innerHTML += "<br>"+BorrarCookie();
