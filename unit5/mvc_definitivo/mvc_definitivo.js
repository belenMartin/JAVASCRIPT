function modelo(){
    var misNotas = document.getElementById("notas").value;
    return misNotas;
}

function vista1(){
    document.getElementById("cuerpo").style.backgroundImage = "url(\"cork.jpg\")";
}

function vista2(){
    document.getElementById("cuerpo").style.backgroundImage = "url(\"flower.jpg\")";
}

function vista(){
    var fondo1 = document.createElement("input");
    fondo1.setAttribute("type","button");
    fondo1.setAttribute("value","Fondo de cork");
    fondo1.setAttribute("id","fondo1");
    fondo1.setAttribute("onclick","vista1()");
    document.getElementById("ejercicio").appendChild(fondo1);
    
    var fondo2 = document.createElement("input");
    fondo2.setAttribute("type","button");
    fondo2.setAttribute("value","Fondo de flower");
    fondo2.setAttribute("id","fondo2");
    fondo2.setAttribute("onclick","vista2()");
    document.getElementById("ejercicio").appendChild(fondo2);
    
    var botonMas = document.createElement("img");
    botonMas.setAttribute("src","botonCreate.jpg");
    botonMas.setAttribute("width","50");
    botonMas.setAttribute("height","50");
    botonMas.setAttribute("title","Add a Note");
    botonMas.setAttribute("id","botonMas");
    document.getElementById("ejercicio").appendChild(botonMas);       
}

function addZero(i){
    if(i < 10){
        i = "0"+i;
    }
    return i;
}

function tiempo(){
    var fecha = new Date();
    var minutos = addZero(fecha.getMinutes());
    var segundos = addZero(fecha.getSeconds());
    var time = minutos+":"+segundos;
    setInterval(tiempo,1000);
    return time;
}

var contador = 0;
function controlador(){
   vista();
   contador++;
   var miBoton = document.getElementById("botonMas");
   miBoton.addEventListener("click",function(){ 
       var miDiv = document.createElement("div");
       miDiv.setAttribute("width","50");
       miDiv.setAttribute("height","50");
       miDiv.setAttribute("id","myDiv");
       document.getElementById("notasAdhesivas").appendChild(miDiv);
               
       var miNota = document.createElement("textarea");
       miNota.setAttribute("rows","10");
       miNota.setAttribute("cols","50");
       miNota.setAttribute("id","notas");
       miNota.setAttribute("style","background-color:yellow;margin-top:100px;");
       var miTexto = document.createTextNode("Nota número "+(contador++)+" Hora creación: "+tiempo());
       miNota.appendChild(miTexto);
       document.getElementById("myDiv").appendChild(miNota);
                            
       var imagenCierre = document.createElement("img");
       imagenCierre.setAttribute("src","cruz-cierre.jpg");
       imagenCierre.setAttribute("width","22");
       imagenCierre.setAttribute("height","22");
       imagenCierre.setAttribute("title","Remove a Note");
       imagenCierre.setAttribute("id","cruzCierre");
       imagenCierre.setAttribute("onclick","function eliminar(){document.getElementById('myDiv').removeChild(document.getElementById('notas'));document.getElementById('myDiv').removeChild(document.getElementById('cruzCierre'));document.getElementById('myDiv').removeChild(document.getElementById('vineta'));}eliminar();");
       document.getElementById("myDiv").appendChild(imagenCierre);
       
       if(typeof(Storage) !== "undefined"){
         localStorage.setItem("notasAdhesivas",document.getElementById("notas").innerHTML);
         document.getElementById("notasAdhesivas").innerHTML += "<div style=\"width:200px;height:200px;background-color:yellow;\">"+localStorage.getItem("notasAdhesivas")+"</div>";  
       }else{
           document.getElementById("notasAdhesivas").innerHTML += "<h1>Sorry! No Web Storage support</h1>";
       }              
   });
}

controlador();
