function buscaminas(){
    this.marcarBomba = function(){
      document.getElementById(Math.round(Math.random()*14)+1).addEventListener("contextmenu",function(){document.getElementById(Math.round(Math.random()*14)+1).innerHTML = "<img src='bomba.jpg' width='10' height='10'>";});
    };
    
    this.marcarAgua = function(){
      document.getElementById(Math.round(Math.random()*14)+1).addEventListener("click",function(){document.getElementById(Math.round(Math.random()*14)+1).style.backgroundColor = "skyblue";document.getElementById(Math.round(Math.random()*14)+1).innerHTML = Math.round(Math.random()*10)+1;document.getElementById(Math.round(Math.random()*14)+1).style.color = "red";});  
    };    
}

var juego = new buscaminas();
juego.marcarBomba();
juego.marcarAgua();
