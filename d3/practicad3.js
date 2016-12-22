var datos = [3,40,1];
var grafico = d3.select("body").selectAll("div")
            .data(datos);
grafico.style({
   width:function(d,i){return d+"px";},
   height:"20px",
   "background-color":"skyblue" 
});
