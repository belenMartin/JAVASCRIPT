google.charts.load("upcoming",{"packages":["geochart"]});
google.charts.setOnLoadCallback(dibujarMapa);

function dibujarMapa(){
    var francia = 83.7;
    var estadosUnidos = 74.8;
    var Spain = 65;
    var China = 55.6;
    var italia = 48.6;
    var turquia = 39.80;
    var alemania = 33;
    var reinoUnido = 32.6;
    var rusia = 39.8;
    var mexico = 29.1;
    var data = new google.visualization.DataTable;
    data.addColumn("string","paises");
    data.addColumn("number","numero de visitantes");
    
    data.addRows([
       ["Francia",francia],
       ["Estados Unidos",estadosUnidos],
       ["España",Spain],
       ["China",China],
       ["Italia",italia],
       ["Turquia",turquia],
       ["Alemania",alemania],
       ["Reino Unido",reinoUnido],
       ["Rusia",rusia],
       ["Mexico",mexico]
    ]);
    
    var options = {
      title:"Países más visitados",
      width:800,
      height:600
    };
    
    var grafico = new google.visualization.GeoChart(document.getElementById("grafico"));
    
    grafico.draw(data,options);
    
    setTimeout(function(){francia++;estadosUnidois++;Spain++;China++;italia++;turquia++;alemania++;reinoUnido++;rusia++;mexico++;},10000);
    
}