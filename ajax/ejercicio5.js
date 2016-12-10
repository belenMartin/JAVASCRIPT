function myCorreo(){
    var xmlhttp;
    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }else{
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }        
    
    verCorreo = function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
           var myTabla = document.createElement("table");
           myTabla.setAttribute("border","1");
           myTabla.setAttribute("width","500");           
           
           var miFila = document.createElement("tr");
           var celda1 = document.createElement("th");
           var celda2 = document.createElement("th");
           var celda3 = document.createElement("th");
           
           var texto1 = document.createTextNode("Remitente");
           var texto2 = document.createTextNode("Destinatario");
           var texto3 = document.createTextNode("Asunto");
           
           celda1.appendChild(texto1);
           celda2.appendChild(texto2);
           celda3.appendChild(texto3);
           
           miFila.appendChild(celda1);
           miFila.appendChild(celda2);
           miFila.appendChild(celda3);
           
           myTabla.appendChild(miFila);
           
           var otraFila = document.createElement("tr");
           var celda4 = document.createElement("td");
           var celda5 = document.createElement("td");
           var celda6 = document.createElement("td");
           
           for(var i = 0; i<xmlhttp.responseXML.getElementsByTagName("remitente").length; i++){
               var txt1 = xmlhttp.responseXML.getElementsByTagName("remitente")[0].innerHTML;
               var txt2 = xmlhttp.responseXML.getElementsByTagName("remitente")[1].innerHTML;
               
           }
           for(var i = 0; i<xmlhttp.responseXML.getElementsByTagName("destinatario").length; i++){
               var txt3 = xmlhttp.responseXML.getElementsByTagName("destinatario")[0].innerHTML;
               var txt4 = xmlhttp.responseXML.getElementsByTagName("destinatario")[1].innerHTML;
           }
           for(var i = 0; i<xmlhttp.responseXML.getElementsByTagName("asunto").length; i++){
               var txt5 = xmlhttp.responseXML.getElementsByTagName("asunto")[0].innerHTML;
               var txt6 = xmlhttp.responseXML.getElementsByTagName("asunto")[1].innerHTML;
           }
           
           var rem1 = document.createTextNode(txt1);
           var rem2 = document.createTextNode(txt2);
           var des1 = document.createTextNode(txt3);
           var des2 = document.createTextNode(txt4);
           var asu1 = document.createTextNode(txt5);
           var asu2 = document.createTextNode(txt6);
           
           var linea1 = document.createElement("hr");
           var linea2 = document.createElement("hr");
           var linea3 = document.createElement("hr");
           
           celda4.appendChild(rem1);
           celda4.appendChild(linea1);
           celda4.appendChild(rem2);
           celda5.appendChild(des1);
           celda5.appendChild(linea2);
           celda5.appendChild(des2);
           celda6.appendChild(asu1);
           celda6.appendChild(linea3);
           celda6.appendChild(asu2),
           
           otraFila.appendChild(celda4);
           otraFila.appendChild(celda5);
           otraFila.appendChild(celda6);
           
           myTabla.appendChild(otraFila);
           
           document.getElementById("correos").appendChild(myTabla);
           //setTimeout(verCorreo,1000);
       }
    };
    
    xmlhttp.onreadystatechange = verCorreo;
    
    xmlhttp.open("get","correo.xml",true);   
    
    xmlhttp.send();          
}
myCorreo();