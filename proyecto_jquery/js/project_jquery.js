$("#buscarPelicula").click(function(){
   $.ajax({url:"http://www.omdbapi.com/?t="+$("#tituloPeli").val()+"&type=movie&plot=short&r=json&page=10&s="+$("#tituloPeli").val(),type:"get",error:function(xhr,status,error){
      $("body").html(status+": "+error);
   },success:function(xhr,status,result){              
       var pelis = "";
       var pelis1 = "";
       var rutaImagen = "";
       var rutaImagen1 = "";
       
       var titulo = "";
       var anio = "";
       
       var titulo1 = "";
       var anio1 = "";
       
       var altoVentana = $(window).height();
       var scroll = $(window).scrollTop();
       
       for(var i = 0; i<xhr.Search.length; i++){
          pelis = xhr.Search[i];
          if(xhr.Search[i+1] != undefined){
            pelis1 = xhr.Search[i+1];
          }
          if(pelis.Poster == "N/A"){
              titulo = pelis.Title;
              anio = pelis.Year;
              rutaImagen = "<img src='./images/imagen-no-disponible.png' width='300' height='300' title='"+titulo+" - "+anio+"' alt='"+titulo+" - "+anio+"'>";              
              $("#myTabla").append("<tr><td>"+rutaImagen+"</td><th><b>"+titulo+" - "+anio+"</b></th>");
          }else if(pelis1.Poster == "N/A"){
              titulo1 = pelis1.Title;
              anio1 = pelis1.Year;
              rutaImagen1 = "<img src='./images/imagen-no-disponible.png' width='300' height='300' title='"+titulo1+" - "+anio1+"' alt='"+titulo1+" - "+anio1+"'>";
              $("#myTabla").append("<tr><td>"+rutaImagen1+"</td><th><b>"+titulo1+" - "+anio1+"</b></th>");
          }else if(pelis.Poster != "N/A" || pelis1.Poster != "N/A"){
            $("#myTabla").append("<tr><td><img src='"+pelis.Poster+"' width='300' height='300' title='"+pelis.Title+" - "+pelis.Year+"' alt='"+pelis.Title+" - "+pelis.Year+"'></td><th><b>"+pelis.Title+" - "+pelis.Year+"</b></th><td><img src='"+pelis1.Poster+"' width='300' height='300' title='"+pelis1.Title+" - "+pelis1.Year+"' alt='"+pelis1.Title+" - "+pelis1.Year+"'></td><th><b>"+pelis1.Title+" - "+pelis1.Year+"</b></th>");
         }                     
      }
     $(document).scroll(function(){
      if(scroll === altoVentana){
        $.ajax({url:"http://www.omdbapi.com/?t="+$("#tituloPeli").val()+"&type=movie&plot=short&r=json&page=5&s="+$("#tituloPeli").val(),type:"get",beforeSend:function(){
          $("div.panel").append("<img src='images/preload.gif' title='cargando...' alt='cargando...'>");
          console.log("Ha entrado en beforeSend");
       },success:function(xhr,status,result){          
          for(var i = 0; i<xhr.Search.length; i++){
            pelis = xhr.Search[i];
            if(xhr.Search[i+1] != undefined){
              pelis1 = xhr.Search[i+1];
            }
            if(pelis.Poster == "N/A"){
              titulo = pelis.Title;
              anio = pelis.Year;
              rutaImagen = "<img src='./images/imagen-no-disponible.png' width='300' height='300' title='"+titulo+" - "+anio+"' alt='"+titulo+" - "+anio+"'>";              
              $("#myTabla").append("<tr><td>"+rutaImagen+"</td><th><b>"+titulo+" - "+anio+"</b></th>");
          }else if(pelis1.Poster == "N/A"){
              titulo1 = pelis1.Title;
              anio1 = pelis1.Year;
              rutaImagen1 = "<img src='./images/imagen-no-disponible.png' width='300' height='300' title='"+titulo1+" - "+anio1+"' alt='"+titulo1+" - "+anio1+"'>";
              $("#myTabla").append("<tr><td>"+rutaImagen1+"</td><th><b>"+titulo1+" - "+anio1+"</b></th>");
          }else if(pelis.Poster != "N/A" || pelis.Poster != "N/A"){
              $("#myTabla").append("<tr><td><img src='"+pelis.Poster+"' width='300' height='300' title='"+pelis.Title+" - "+pelis.Year+"' alt='"+pelis.Title+" - "+pelis.Year+"'></td><th><b>"+pelis.Title+" - "+pelis.Year+"</b></th><td><img src='"+pelis1.Poster+"' width='300' height='300' title='"+pelis1.Title+" - "+pelis1.Year+"' alt='"+pelis1.Title+" - "+pelis1.Year+"'></td><th><b>"+pelis1.Title+" - "+pelis1.Year+"</b></th>");
          }
         }      
       },error:function(xhr,status,error){
           $("body").append(status+": "+error);
       }
      });      
       }
    });
   }
   });
});