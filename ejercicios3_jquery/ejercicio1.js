for(var i = 1; i<=8; i++){   
    $("#cuerpo").append("<table border='1' width='200' height='50'><tr><td>"+i+"</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr></table>");
}

for(var i = 0; i<$("tr").length; i++){
    if(i < 2){
        $("tr").eq(i).css("background-color","red");
    }
    if(i > 2){
        $("tr").eq(i).css("background-color","blue");
    }
}

