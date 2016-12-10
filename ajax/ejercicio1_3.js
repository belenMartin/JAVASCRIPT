function enviaParametros(){
    var xmlhttp;
    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }else{
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    miParametro = function(){
        
    if(xmlhttp.readyState == 0 || xmlhttp.readyState == 1 || xmlhttp.readyState == 2 || xmlhttp.readyState == 3){    
        document.getElementById("salida").innerHTML = "<img src=\"preload.gif\" width='100' height='100' alt='preload' title='preload'>";
    }
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
        document.getElementById("salida").innerHTML = xmlhttp.responseText;  
      }  
    };
    
    xmlhttp.onreadystatechange = miParametro;
    xmlhttp.open("get","ejercicio1_1.php",true);
    xmlhttp.send();
}
