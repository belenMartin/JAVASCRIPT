function Bola(cx,cy,r,stroke,strokeWidth,fill){    
   this.miBola = function(){
       var svg = document.createElementNS("http://www.w3.org/2000/svg","svg");       
       var circulo = document.createElementNS("http://www.w3.org/2000/svg","circle");
       circulo.setAttribute("cx",cx);
       circulo.setAttribute("cy",cy);
       circulo.setAttribute("r",r);
       circulo.setAttribute("stroke",stroke);
       circulo.setAttribute("stroke-width",strokeWidth);
       circulo.setAttribute("fill",fill);
       circulo.setAttribute("id","bola");
       svg.setAttribute("width","800");
       svg.setAttribute("height","600");
       svg.setAttribute("id","panel");
       svg.appendChild(circulo);
       document.getElementById("cuerpo").appendChild(svg);
       return svg;
   };
   
   this.creaLadrillos = function(){
      var svg = document.getElementById("panel");      
      for(var i = 1; i <= 90; i++){
          var rect = document.createElementNS("http://www.w3.org/2000/svg","rect");
          rect.setAttribute("x",10*i);
          rect.setAttribute("y",10*i);
          rect.setAttribute("fill","maroon");
          rect.setAttribute("stroke","maroon");
          rect.setAttribute("stroke-width","0.5");
          rect.setAttribute("width","50");
          rect.setAttribute("height","10");
          rect.setAttribute("id",i);
          svg.appendChild(rect);
      }
      return svg;
    };
   
   this.moverBola = function(){
      var self = this;
      var posXBola = parseInt(document.getElementById("bola").getAttribute("cx"));
      var posYBola = parseInt(document.getElementById("bola").getAttribute("cy"));
      document.getElementById("bola").setAttribute("cx",posXBola+10);
      document.getElementById("bola").setAttribute("cy",posYBola+10);
      if(posYBola == 600){
        document.getElementById("bola").setAttribute("cy",posYBola-500);  
      }else if(posXBola == 800){
          document.getElementById("bola").setAttribute("cx",posXBola-500);
      }
      for(var i = 1; i<=90; i++){
          if(posXBola == 10*i && posYBola == 10*i){
                document.getElementById("panel").removeChild(document.getElementById("panel").childNodes[i]);
          } 
       } 
      setInterval(self.moverBola,1000);
   };   
   
   this.detectarColisionesCon = function(panel){
       var dimension = {ancho:parseInt(panel.getAttribute("width")),alto:parseInt(panel.getAttribute("height"))};
       var posXBola = parseInt(document.getElementById("bola").getAttribute("cx"));
       var posYBola = parseInt(document.getElementById("bola").getAttribute("cy"));       
       
       if(posXBola == dimension.ancho){
         document.getElementById("bola").setAttribute("cx",posXBola-500);  
       }else if(posYBola == dimension.alto){
         document.getElementById("bola").setAttribute("cy",posYBola-500);  
       }
       return panel;
   };
}
var juego = new Bola(10,10,10,"orange",0.5,"orange");
juego.miBola();
juego.creaLadrillos();
juego.moverBola();
juego.detectarColisionesCon(document.getElementById("panel"));
