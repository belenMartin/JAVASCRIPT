//Este bloque me crea los divs de la pagina 
var data = [10, 20, 30, 40];
var divs = d3.select('body')
  .selectAll('div')
  .data(data);
divs.enter()
  .append('div');
divs.on('click', function(d,i) {
  d3.select(this)
    .style('background-color','#42efef')
    .style('padding','5px')
    .text(d)
})
    .style({
      width:'20px',
      height:function(d) { return d + 'px' },
      margin:'15px',
      float:'left',
      'background-color':'#25B0B0'
    });


//Este otro bloque ...
newData = [50, 100];

//Select all the divs  selecciono todos los divs de la pagina
var myDivs = d3.select('body').selectAll('div');
//Bind the newData array to the div elements le enlazo los datos y no le pongo punto y coma
myDivs.data(newData)
//Remove the extra div elements le concateno la sentencia anterior por el simple hecho de no tener punto y coma
.exit().remove();
//Style the elements using the new data values le pongo estilo
myDivs.style({
  width:function(d){return d+'px'},
  height:function(d){return d+'px'},
  'background-color':function(d){return '#'+d+d+00}
});
