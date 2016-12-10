function mostrarContenido(xmlhttp){
    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }else{
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    muestraContenido = function(){
      if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
          document.getElementById("practica").innerHTML = xmlhttp.responseText;
      }  
    };
    
    xmlhttp.onreadystatechange = muestraContenido;
    
    xmlhttp.open("get","pagina.html",true);
    xmlhttp.send();        
}