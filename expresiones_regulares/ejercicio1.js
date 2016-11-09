function user(){
   var userID = document.getElementById("usuario").value;
   if(userID.length >= 5 && userID.length <= 12){
      document.getElementById("reqUs").innerHTML = "<img src='tic-verde.png' width='10' height='10'>";      
    }else{
       alert("ID de usuario demasiado corto");
    }
}

function passwd(){
   var pass = document.getElementById("password").value;
   if(pass.length >= 7 && pass.length <= 12){
        document.getElementById("reqPas").innerHTML = "<img src='tic-verde.png' width='10' height='10'>";
    }else{
        alert("La password es demasiado corta");
    }
}

function nameUser(){
    var nom = document.getElementById("nombre").value;
    var expNom = /[a-z]/g;
    if(expNom.test(nom)){
        document.getElementById("reqNom").innerHTML = "<img src='tic-verde.png' width='10' height='10'>";
    }else{
        alert("El nombre de usuario no cumple el patron");
    }
}

function zipPostal(){
    var codPostal = document.getElementById("codigoPostal").value;
    var expZip = /[0-9]/g;
    if(expZip.test(codPostal)){
        document.getElementById("reqZip").innerHTML = "<img src='tic-verde.png' width='10' height='10'>";
    }else{
        alert("El codigo Postal no cumple el patron");
    }
}

function correoElectronico(){
    var correo = document.getElementById("email").value;
    var expEmail = /^\w*(\.|-?)|(\w+)\@?[a-z]{5,7}\.?[a-z]{2,3}?$/g;
    if(expEmail.test(correo)){
        document.getElementById("reqEmail").innerHTML = "<img src='tic-verde.png' width='10' height='10'>";
    }else{
        alert("El email no cumple el patron");
        console.log("no cumple la expresion regular");
    }
}

function pais(){
    if(document.getElementById("uno")){
        document.getElementById("reqPais").innerHTML = "<img src='tic-verde.png' width='10' height='10'>";
    }else if(document.getElementById("dos")){
        document.getElementById("reqPais").innerHTML = "<img src='tic-verde.png' width='10' height='10'>";
    }else if(document.getElementById("tres")){
        document.getElementById("reqPais").innerHTML = "<img src='tic-verde.png' width='10' height='10'>";
    }else if(document.getElementById("cuatro")){
        document.getElementById("reqPais").innerHTML = "<img src='tic-verde.png' width='10' height='10'>";
    }else{
        alert("No ha seleccionado un pais");
    }
}

function sexo(){
    if(document.getElementById("m")){
        document.getElementById("reqSexo").innerHTML = "<img src='tic-verde.png' width='10' height='10'>";
    }else if(document.getElementById("f")){
        document.getElementById("reqSexo").innerHTML = "<img src='tic-verde.png' width='10' height='10'>";
    }else{
        alert("No ha seleccionado el sexo");
    }
}

function language(){
        if(document.getElementById("english") || document.getElementById("english").defaultChecked){
           document.getElementById("reqIdioma").innerHTML = "<img src='tic-verde.png' width='10' height='10'>"; 
        }else if(document.getElementById("noEnglish") || document.getElementById("noEnglish").defaultChecked){
           document.getElementById("reqIdioma").innerHTML = "<img src='tic-verde.png' width='10' height='10'>"; 
        }else{
           alert("No ha seleccionado el idioma");
    }
}