function puzzle(ancho,alto){   
    this.creaTablero = function(){
      var tabla = "<table width='100' height='500'>";
      tabla += "<tr>";
      for(var i = 1; i<=ancho; i++){
          tabla += "<td>&nbsp;</td>";
      }
      tabla += "</tr>";
      tabla += "<tr>";
      for(var i = 1; i<alto; i++){         
          tabla += "<td>&nbsp;</td>";
      }
      tabla += "<td>&nbsp;</td>";
      tabla += "</tr>";
      tabla += "</table>";
      return tabla;
    };
    
    this.ponerPiezas = function(){
      var celdas = document.getElementsByTagName("td");
      for(var i = 0; i<celdas.length-1; i++){
         celdas[i].setAttribute("id",i);
         if(celdas[celdas.length-1]){
            celdas[celdas.length-1].setAttribute("id","vacio");
         }
         if(ancho == 3 && alto == 3){
            document.getElementById(i).innerHTML = "<img src='./3x3/pieza"+(i+1)+".PNG'>";
         }
         if(ancho == 4 && alto == 4){
            document.getElementById(i).innerHTML = "<img src='./4x4/pieza"+(i+1)+".PNG'>";
         }
      }
      return celdas;
    };
    
    this.moverPieza = function(){
      if(ancho == 3 && alto == 3){
        document.getElementsByTagName("img")[0].setAttribute("id","13");
        document.getElementsByTagName("img")[1].setAttribute("id","23");
        document.getElementsByTagName("img")[2].setAttribute("id","33");
        document.getElementsByTagName("img")[3].setAttribute("id","43");
        document.getElementsByTagName("img")[4].setAttribute("id","53");
        document.getElementsByTagName("img")[0].setAttribute("draggable","true");
        document.getElementsByTagName("img")[1].setAttribute("draggable","true");
        document.getElementsByTagName("img")[2].setAttribute("draggable","true");
        document.getElementsByTagName("img")[3].setAttribute("draggable","true");
        document.getElementsByTagName("img")[4].setAttribute("draggable","true");        
        
        document.getElementById("13").addEventListener("dragstart",function(event){event.dataTransfer.setData("text",event.target.id);});
        document.getElementById("23").addEventListener("dragstart",function(event){event.dataTransfer.setData("text",event.target.id);});
        document.getElementById("33").addEventListener("dragstart",function(event){event.dataTransfer.setData("text",event.target.id);});
        document.getElementById("43").addEventListener("dragstart",function(event){event.dataTransfer.setData("text",event.target.id);});
        document.getElementById("53").addEventListener("dragstart",function(event){event.dataTransfer.setData("text",event.target.id);});
        document.getElementById("vacio").addEventListener("dragstart",function(event){event.dataTransfer.setData("text",event.target.id);}); 
        
        for(var i = 0; i<document.getElementsByTagName("td").length; i++){
           document.getElementsByTagName("td")[i].addEventListener("dragover",function(event){event.preventDefault();});
        }

        for(var i = 0; i<document.getElementsByTagName("td").length; i++){
            document.getElementsByTagName("td")[i].addEventListener("drop",function(event){event.preventDefault();var data = event.dataTransfer.getData("text");event.target.appendChild(document.getElementById(data));});  
        }
      }
        
      if(ancho == 4 && alto == 4){
        document.getElementsByTagName("img")[0].setAttribute("id","14");
        document.getElementsByTagName("img")[1].setAttribute("id","24");
        document.getElementsByTagName("img")[2].setAttribute("id","34");
        document.getElementsByTagName("img")[3].setAttribute("id","44");
        document.getElementsByTagName("img")[4].setAttribute("id","54");
        document.getElementsByTagName("img")[5].setAttribute("id","64");
        document.getElementsByTagName("img")[6].setAttribute("id","74");
        document.getElementsByTagName("img")[0].setAttribute("draggable","true");
        document.getElementsByTagName("img")[1].setAttribute("draggable","true");
        document.getElementsByTagName("img")[2].setAttribute("draggable","true");
        document.getElementsByTagName("img")[3].setAttribute("draggable","true");
        document.getElementsByTagName("img")[4].setAttribute("draggable","true");
        document.getElementsByTagName("img")[5].setAttribute("draggable","true");
        document.getElementsByTagName("img")[6].setAttribute("draggable","true");          

        document.getElementById("14").addEventListener("dragstart",function(event){event.dataTransfer.setData("text",event.target.id);});
        document.getElementById("24").addEventListener("dragstart",function(event){event.dataTransfer.setData("text",event.target.id);});
        document.getElementById("34").addEventListener("dragstart",function(event){event.dataTransfer.setData("text",event.target.id);});
        document.getElementById("44").addEventListener("dragstart",function(event){event.dataTransfer.setData("text",event.target.id);});
        document.getElementById("54").addEventListener("dragstart",function(event){event.dataTransfer.setData("text",event.target.id);});
        document.getElementById("64").addEventListener("dragstart",function(event){event.dataTransfer.setData("text",event.target.id);});
        document.getElementById("74").addEventListener("dragstart",function(event){event.dataTransfer.setData("text",event.target.id);});
        document.getElementById("vacio").addEventListener("dragstart",function(event){event.dataTransfer.setData("text",event.target.id);}); 
        
        for(var i = 0; i<document.getElementsByTagName("td").length; i++){
           document.getElementsByTagName("td")[i].addEventListener("dragover",function(event){event.preventDefault();});
       }
       
       for(var i = 0; i<document.getElementsByTagName("td").length; i++){
          document.getElementsByTagName("td")[i].addEventListener("drop",function(event){event.preventDefault();var data = event.dataTransfer.getData("text");event.target.appendChild(document.getElementById(data));}); 
      }
    }
    };
    
     this.terminarJuego = function(){
      
      var resultado = "";  

      if(ancho == 3 && alto == 3){
          
      }      
      
      if(ancho == 4 && alto == 4){
              
      }
      return resultado;
     };
     
     function addZero(i){
         if(i < 10){
             i = "0"+i;
         }
         return i;
     }
     var cont = 100;
     function controlTiempo(){
       document.getElementById("tiempo").innerHTML = "Tiempo: "+cont;
       cont--;
       var a = setTimeout(controlTiempo,1000);
       if(cont == 0){
           clearTimeout(a);
           alert("Se agotó el tiempo");
       }       
       return cont;
     };     
     controlTiempo();
     
     this.numeroMovimientos = function(){
       var contador = 0;       
       var celdas = document.getElementsByTagName("td");
        
        for(var i = 0; i < celdas.length; i++){
           celdas[i].ondrop = contador++; 
        }       
       return contador;
     };
}
var juego = new puzzle(3,3);
document.getElementById("puzzle").innerHTML = juego.creaTablero();
juego.ponerPiezas();
juego.moverPieza();
document.getElementById("texto").innerHTML = juego.terminarJuego();
document.getElementById("texto").innerHTML += "<br>Numero movimientos: "+juego.numeroMovimientos();
