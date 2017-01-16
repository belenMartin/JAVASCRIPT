var tamLetra = $("p").css("font-size").split("");
var str = tamLetra[0]+tamLetra[1];
var strNum = parseInt(str);

$("p").click(function(){$("p").animate({"font-size":(strNum++)+"px"},2000,"swing",$("p").finish());});
