function modelo(){
    var misNotas = document.getElementById("nota").value;
    var miArray = [];
    miArray.push(misNotas);
    return miArray;
}

function vista(){
 var cajaTexto = document.createElement("textarea");
    cajaTexto.setAttribute("rows","10");
    cajaTexto.setAttribute("cols","50");
    cajaTexto.setAttribute("id","nota");
    document.getElementById("ejercicio").appendChild(cajaTexto);
    
    var botonCrear = document.createElement("input");
    botonCrear.setAttribute("type","button");
    botonCrear.setAttribute("value","Create");
    botonCrear.setAttribute("id","botonCreate");
    document.getElementById("ejercicio").appendChild(botonCrear);
    
    var botonBorrar = document.createElement("input");
    botonBorrar.setAttribute("type","button");
    botonBorrar.setAttribute("value","Eliminar Nota");
    botonBorrar.setAttribute("id","eliminarNota");
    document.getElementById("ejercicio").appendChild(botonBorrar);   
}

function vista1(){
    document.getElementById("cuerpo").style.backgroundImage = "url('cork.jpg')";
}

function vista2(){
    document.getElementById("cuerpo").style.backgroundImage = "url('flower.jpg')";
}

function controlador(){
    vista();
    document.getElementById("vista1").addEventListener("click",function(){vista1();});
    document.getElementById("vista2").addEventListener("click",function(){vista2();});
    document.getElementById("botonCreate").addEventListener("click",function(){var fecha = new Date();var j = 0;var notasAdh = document.createElement("div");notasAdh.setAttribute("class","adh");document.getElementById("notasAdhesivas").appendChild(notasAdh);for(var i =0; i<document.getElementsByClassName("adh").length;i++){document.getElementsByClassName("adh")[i].style = "background-color:yellow;width:200px;height:100px;";}for(var i = 0;i<document.getElementsByClassName("adh").length;i++){document.getElementsByClassName("adh")[i].innerHTML = "<br><b>Nota numero "+(j+1)+"</b><br>"+modelo()+"<br><i>Fecha de creacion: "+fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear()+"</i><br>";}});
    document.getElementById("eliminarNota").addEventListener("click",function(){for(var i = 0;i<document.getElementsByClassName("adh").length; i++){document.getElementById("notasAdhesivas").removeChild(document.getElementsByClassName("adh")[i]);}});
}
controlador();