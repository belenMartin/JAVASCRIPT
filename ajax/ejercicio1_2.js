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
    xmlhttp.open("get","ejercicio1_2.php",true);
    xmlhttp.send();
}
