function enviaParametros(){
    var xmlhttp;
    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }else{
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    miParametro = function(){
      if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
        document.getElementById("salida").innerHTML = xmlhttp.responseText;  
      }  
    };
       
    xmlhttp.onreadystatechange = miParametro;
    var datos = "fechaNacimiento="+document.getElementById("fechaNacimiento").value+"&codigoPostal="+document.getElementById("codigoPostal").value+"&telefono="+document.getElementById("telefono").value;
    xmlhttp.open("post","ejercicio1_1.php",true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    //xmlhttp.setRequestHeader("Content-length",datos.length);
    //xmlhttp.setRequestHeader("Connection","close");    
    xmlhttp.send(datos);
}
