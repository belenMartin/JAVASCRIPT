$("#noticia1").css("font-size","15px");
$("#noticia2").css("font-size","20px");
$("#noticia3").css("font-size","25px");

$("#titulo1").click(function(){$("#textoNoticia1").toggle();});
$("#titulo2").click(function(){$("#textoNoticia2").toggle();});
$("#titulo3").click(function(){$("#textoNoticia3").toggle();});

$("#textoNoticia1").mouseover(function(){$("#textoNoticia1").css("background-color","pink");});
$("#textoNoticia2").mouseover(function(){$("#textoNoticia2").css("background-color","lightgreen");});
$("#textoNoticia3").mouseover(function(){$("#textoNoticia3").css("background-color","skyblue");});

$("#textoNoticia1").mouseout(function(){$("#textoNoticia1").css("background-color","white");});
$("#textoNoticia2").mouseout(function(){$("#textoNoticia2").css("background-color","white");});
$("#textoNoticia3").mouseout(function(){$("#textoNoticia3").css("background-color","white");});

