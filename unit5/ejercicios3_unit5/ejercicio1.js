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
       var rect = document.createElementNS("http://www.w3.org/2000/svg","rect");
       rect.setAttribute("fill","grey");
       rect.setAttribute("stroke-width","0.5");
       rect.setAttribute("stroke","grey");
       rect.setAttribute("x","100");
       rect.setAttribute("y","100");
       rect.setAttribute("width","120");
       rect.setAttribute("height","10");
       rect.setAttribute("id","ladrillito");
       svg.appendChild(rect);
       document.getElementById("cuerpo").appendChild(svg);
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
        document.getElementById("bola").setAttribute("cx",posXBola-500);
      }else if(posXBola == 800){
        document.getElementById("bola").setAttribute("cx",posXBola-500);  
        document.getElementById("bola").setAttribute("cy",posYBola-500);
      }else if(posXBola == 100 && posYBola == 100){
         document.getElementById("panel").removeChild(document.getElementById("panel").childNodes[1]);
      }
      
      setInterval(self.moverBola,1000);
   };   
   
   this.detectarColisionesCon = function(panel){
       panel = {width:parseInt(document.getElementById("panel").getAttribute("width")),height:parseInt(document.getElementById("panel").getAttribute("height"))};
       var posXBola = parseInt(document.getElementById("bola").getAttribute("cx"));
       var posYBola = parseInt(document.getElementById("bola").getAttribute("cy"));
       
       if(posXBola == panel.width){
         document.getElementById("bola").setAttribute("cx",posXBola-panel.width);
       }else if(posYBola == panel.height){
         document.getElementById("bola").setAttribute("cy",posYBola-panel.height);
       }       
       return panel;       
   };
}
var juego = new Bola(10,10,10,"orange",0.5,"orange");
juego.miBola();
juego.moverBola();
juego.detectarColisionesCon("panel");

function Ladrillo(){
    this.miLadrillo = function(){
      var svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
      var rect = document.createElementNS("http://www.w3.org/2000/svg","rect");
      rect.setAttribute("fill","grey");
      rect.setAttribute("stroke-width","0.5");
      rect.setAttribute("stroke","grey");
      rect.setAttribute("x","100");
      rect.setAttribute("y","100");
      rect.setAttribute("width","120");
      rect.setAttribute("height","10");
      rect.setAttribute("id","ladrillo");
      svg.setAttribute("id","contenedor");
      svg.appendChild(rect);
      document.getElementById("cuerpo").appendChild(svg);      
      return svg;
    };
    
    this.detectarColisionesCon = function(){
       var posXBola = parseInt(document.getElementById("bola").getAttribute("cx"));
       var posYBola = parseInt(document.getElementById("bola").getAttribute("cy"));
       var posXLadrillo = parseInt(document.getElementById("ladrillo").getAttribute("x"));
       var posYLadrillo = parseInt(document.getElementById("ladrillo").getAttribute("y"));
       
       if(posXLadrillo == posXBola){
         document.getElementById("ladrillo").setAttribute("x",posXLadrillo-posXBola);  
         document.getElementById("contenedor").removeChild(document.getElementById("contenedor").childNodes[0]);
       }else if(posYLadrillo == posYBola){
         document.getElementById("ladrillo").setAttribute("y",posYLadrillo-posYBola);         
         document.getElementById("contenedor").removeChild(document.getElementById("contenedor").childNodes[0]);
       }
    };
}
var juego2 = new Ladrillo();
juego2.miLadrillo();
juego.detectarColisionesCon();