function BolaJuego(cx,cy,r,stroke,strokeWidth,fill){
    this.creameBola = function(){
      var svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
      var circle = document.createElementNS("http://www.w3.org/2000/svg","circle");
      circle.setAttribute("cx",cx);
      circle.setAttribute("cy",cy);
      circle.setAttribute("r",r);
      circle.setAttribute("stroke",stroke);
      circle.setAttribute("stroke-width",strokeWidth);
      circle.setAttribute("fill",fill);
      svg.setAttribute("id","panel");
      circle.setAttribute("id","bola");
      svg.setAttribute("width","800");
      svg.setAttribute("height","600");
      svg.appendChild(circle);
      document.getElementById("bolita").appendChild(svg);
      return svg;
    };
    
    this.moverBola = function(){
      var self = this;
      var miBola = document.getElementById("bola");
      var x = parseInt(miBola.getAttribute("cx"));
      var y = parseInt(miBola.getAttribute("cy"));
      var dimension = {ancho:parseInt(document.getElementById("panel").getAttribute("width")),alto:parseInt(document.getElementById("panel").getAttribute("height"))};
      
      miBola.setAttribute("cx",x+10);
      miBola.setAttribute("cy",y+10);            
        
      if(x == dimension.ancho){
          document.getElementById("bola").setAttribute("cx",x-500);
      }else if(y == dimension.alto){
          document.getElementById("bola").setAttribute("cy",y-500);
      }else if(x == 580){
          document.getElementById("bola").setAttribute("cx",x-120);
      }else if(y == 580){
          document.getElementById("bola").setAttribute("cy",y-120);
      }
      
      for(var i = 1; i<=30; i++){
         if(x == 50*i){
             document.getElementById("panel").removeChild(document.getElementById("ladrillo"+i));
         }else if(y == 50*i){
             document.getElementById("panel").removeChild(document.getElementById("ladrillo"+i));
         }
      }
      
      setInterval(self.moverBola,1000);
      
      return dimension;
      
    };        
}
var miJuego = new BolaJuego(10,10,10,"green",0.5,"green");
miJuego.creameBola();
miJuego.moverBola();

function Ladrillo(){
    this.Ladrillo = function(){
        var rect = document.createElementNS("http://www.w3.org/2000/svg","rect");
        rect.setAttribute("x","580");
        rect.setAttribute("y","580");
        rect.setAttribute("stroke","grey");
        rect.setAttribute("stroke-width","0.5");
        rect.setAttribute("fill","grey");
        rect.setAttribute("id","ladrillo");
        rect.setAttribute("width","100");
        rect.setAttribute("height","10");
        document.getElementById("panel").appendChild(rect);
        return rect;
   };
    this.creameLadrillo = function(){
      for(var i = 1; i<=30; i++){
          var misLadrillos = document.createElementNS("http://www.w3.org/2000/svg","rect");
          misLadrillos.setAttribute("x",50*i);
          misLadrillos.setAttribute("y",50*i);
          misLadrillos.setAttribute("stroke","maroon");
          misLadrillos.setAttribute("stroke-width","0.5");
          misLadrillos.setAttribute("fill","maroon");
          misLadrillos.setAttribute("id","ladrillo"+i);          
          misLadrillos.setAttribute("width","100");
          misLadrillos.setAttribute("height","10");
          document.getElementById("panel").appendChild(misLadrillos);
      }
      return misLadrillos;
    };
}
var miLadrillo = new Ladrillo();
miLadrillo.Ladrillo();
miLadrillo.creameLadrillo();