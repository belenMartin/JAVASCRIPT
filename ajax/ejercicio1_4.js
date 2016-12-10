function usuarioDisponible(){
    var xmlhttp;
    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }else{
        xmlhttp = ActiveXObject("Microsoft.XMLHTTP");
    }
    
    mostrarDisponibilidad = function(){
      if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
        document.getElementById("salida").innerHTML = xmlhttp.responseText;    
      }  
    };
    
    xmlhttp.onreadystatechange = mostrarDisponibilidad;
    xmlhttp.open("get","ejercicio1_4.php",true);
    xmlhttp.send();
}
