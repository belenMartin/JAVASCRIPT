function addZero(i){
    if(i<10){
        i="0"+i;
    }
    return i;
}

function tiempoEnGranada(){
    var xmlhttp;
    if(window.XMLHttpRequest){
      xmlhttp = new XMLHttpRequest();  
    }else{
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    verTiempo = function(){
      if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
          var tiempo = JSON.parse(xmlhttp.responseText);
          document.getElementById("granada").innerHTML = "Weather in "+tiempo.city.name+", "+tiempo.city.country;
          document.getElementById("grados").innerHTML = "<img src='./images/nube.png' width='50px' height='50px'>"+Math.round(tiempo.list[0].main.temp)+" &#176;C";
          document.getElementById("nubes").innerHTML = tiempo.list[0].weather[0].description;
          document.getElementById("fecha").innerHTML = "get at "+tiempo.list[0].dt_txt;
          
          var tabla = "<table border='1'>";
          tabla += "<tr>";
          tabla += "<th>Wind</th>";
          tabla += "<td>"+"Calm "+tiempo.list[0].wind.speed+" m/s<br>South-southwest ("+tiempo.list[0].wind.deg+")"+"</td>";
          tabla += "</tr>";
          tabla += "<tr>";
          tabla += "<th>Cloudiness</th>";
          tabla += "<td>"+tiempo.list[0].weather[0].description+"</td>";
          tabla += "</tr>";
          tabla += "<tr>";
          tabla += "<th>Pressure</th>";
          tabla += "<td>"+tiempo.list[0].main.pressure+" hpa"+"</td>";
          tabla += "</tr>";
          tabla += "<tr>";
          tabla += "<th>Humidity</th>";
          tabla += "<td>"+tiempo.list[0].main.humidity+" %"+"</td>";
          tabla += "</tr>";
          tabla += "<tr>";
          tabla += "<th>Geo coords</th>";
          tabla += "<td>"+"[ "+Math.round(tiempo.city.coord.lat)+", "+Math.ceil(tiempo.city.coord.lon)+" ]"+"</td>";
          tabla += "</tr>";
          document.getElementById("miTabla").innerHTML = tabla;
          document.getElementById("maxMin").innerHTML = "Temperatura m&iacute;nima: "+tiempo.list[0].main.temp_min+" &#176;C<br>Temperatura m&aacute;xima: "+tiempo.list[0].main.temp_max+" &#176;C";
          
          document.getElementById("tituloGrafico").innerHTML = "<h3>Weather forecast in "+tiempo.city.name+", "+tiempo.city.country+"</h3>";  
          
          google.charts.load('current',{'packages':['corechart']});
          google.charts.setOnLoadCallback(dibujarGrafico);
          
          function dibujarGrafico(){
              var data = new google.visualization.DataTable();
              data.addColumn('number','Grados');
              data.addColumn('number','Hora');
              data.addRows([
                 [1,19],
                 [1,22],
                 [1,01],
                 [1,04],
                 [2.5,07],
                 [5,10],
                 [3,13],
                 [2.3,16],
                 [2.5,19],
                 [1,22]
              ]);
              
              var options = {
                title:'El tiempo en Granada',
                vAxis:{title:'Grados'},
                hAxis:{title:'Hora'},
                seriesType:'bars',
                series:{5:{type:'line'}}
              };
              
              var grafico = new google.visualization.ComboChart(document.getElementById("grafico"));
              grafico.draw(data,options);
          }
          
          document.getElementById("13day").innerHTML = "<h3>13 day weather forecast</h3>";
          
          for(var i = 0; i<tiempo.list.length; i++){
            document.getElementById("13day").innerHTML += "<br>"+tiempo.list[i].main.temp_max+" &#176;C&nbsp;&nbsp;&nbsp;"+tiempo.list[i].main.temp_min+" &#176;C&nbsp;&nbsp;&nbsp;"+tiempo.list[i].dt_txt+"&nbsp;&nbsp;&nbsp;"+tiempo.list[i].weather[0].description+"&nbsp;&nbsp;&nbsp;"+tiempo.list[i].wind.speed+" m/s<br>clouds: "+tiempo.list[i].clouds.all+" %&nbsp;&nbsp;&nbsp;"+tiempo.list[i].main.pressure+" hpa<br>";
          }  
     }          
    };
    
    xmlhttp.onreadystatechange = verTiempo;
    
    xmlhttp.open("get","http://api.openweathermap.org/data/2.5/forecast/city?id=2517117&q=Granada,es&units=metric&APPID=b0578aa959fc7e10bcb225c7a49f40ba",true);
    
    xmlhttp.send();
}
