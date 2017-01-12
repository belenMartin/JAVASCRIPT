$(document).ready(alert("DOM cargado"));

$("#cuerpo").html($("<input type='button' value='Primer boton' id='botonUno'><input type='button' value='Segundo boton' id='botonDos'>"));

$("#botonUno").click(function(){alert($("head").html());});
$("#botonDos").click(function(){alert($("body").html());});

$("#cuerpo").append($("<p id='uno'>P&aacute;rrafo 1</p><p id='dos'>P&aacute;rrafo 2</p>"));

$("#uno").click(function(){alert("Párrafo 1 pulsado");$("#uno").hide();});
$("#dos").click(function(){alert("Párrafo 2 pulsado");});

$("#cuerpo").append($("<ul><li id='primero'>1</li><li id='segundo'>2</li><li id='tercero'>3</li></ul>"));

$("ul li").prepend("#");

$("#primero").click(function(){$("#primero").hide();});
$("#segundo").click(function(){$("#segundo").hide();});
$("#tercero").click(function(){$("#tercero").hide();});

$("#cuerpo").append($("<a href='http://www.google.es/'>Google</a><a href='http://www.ideal.es/'>Ideal.es</a><a href='http://www.mis-chistes.org/'>Chistes</a>"));

$("a").html("Enlace");

$("#cuerpo").append("<table border='1' width='200'><tr><td id='primeraCelda'>1</td></tr><tr><td id='segundaCelda'>2</td></tr></table>");

$("#primeraCelda").click(function(){$("#primeraCelda").css("background-color","red");});
$("#segundaCelda").click(function(){$("#segundaCelda").css("background-color","green");});

$("#cuerpo").append("<table border='1' width='200'><tr><td id='celdaUno'>1</td></tr><tr><td id='celdaDos'>2</td></tr><tr><td id='celdaTres'>3</td></tr></table>");

$("#celdaUno").click(function(){$("#celdaUno").hide();});
$("#celdaDos").click(function(){$("#celdaDos").hide();});
$("#celdaTres").click(function(){$("#celdaTres").hide();});
