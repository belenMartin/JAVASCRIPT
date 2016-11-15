function inicializa(){
   var ul = document.createElement("ul");
   ul.setAttribute("id","lista");
   document.getElementById("cuerpo").appendChild(ul);
   
   var boton = document.createElement("input");
   boton.setAttribute("type","button");
   boton.setAttribute("value","Añadir a la lista");
   boton.setAttribute("onclick","function anadirALista(){var li = document.createElement('li');var texto = document.createTextNode(prompt('Introduce un elemento a añadir a la lista'));li.appendChild(texto);document.getElementById('lista').appendChild(li);};anadirALista();");
   document.getElementById("cuerpo").appendChild(boton);
}
inicializa();
