google.charts.load("current",{"packages":["corechart"]});
google.charts.setOnLoadCallback(dibujarGrafico);

function dibujarGrafico(){
    var unidosPodemos = 71;
    var ciudadanos = 32;
    var pnv = 5;
    var ccaPnc = 1;
    var ercCatalunya = 9;
    var ehBildu = 2;
    var pp = 137;
    var psoe = 85;    
    var data = new google.visualization.DataTable;
       data.addColumn("string","partidos");
       data.addColumn("number","votos");
       data.addRows([
          ["unidos podemos",unidosPodemos],
          ["ciudadanos",ciudadanos],
          ["pnv",pnv],
          ["cca-pnc",ccaPnc],
          ["erc-catalunya",ercCatalunya],
          ["eh bildu",ehBildu],
          ["pp",pp],
          ["psoe",psoe]
       ]);
       
       var options = {
         title:"Últimas elecciones generales",
         width:800,
         height:600
       };
       
       var grafico = new google.visualization.PieChart(document.getElementById("grafico"));
       
       grafico.draw(data,options);
       
       setTimeout(function(){unidosPodemos++;ciudadanos++;pnv++;ccaPnc++;ercCatalunya++;ehBildu++;pp++;psoe++;},10000);
}
