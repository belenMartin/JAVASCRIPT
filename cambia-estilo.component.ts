import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-cambia-estilo',
  templateUrl: './cambia-estilo.component.html',
  styleUrls: ['./cambia-estilo.component.css']
})
export class CambiaEstiloComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 dia(){
   document.getElementById("caja").style.backgroundColor = "skyblue";
   document.getElementById("caja").style.color = "green";
   document.getElementById("caja").style.fontWeight = "bold";
 }

 noche(){
   document.getElementById("caja").style.backgroundColor = "black";
   document.getElementById("caja").style.color = "red";
   document.getElementById("caja").style.fontWeight = "bold";
 }

 otroTema(){
   document.getElementById("caja").style.backgroundColor = "yellow";
   document.getElementById("caja").style.color = "#ff00ff";
   document.getElementById("caja").style.fontWeight = "bold";
 }

 normal(){
   document.getElementById("caja").style.backgroundColor = "white";
   document.getElementById("caja").style.color = "black";
   document.getElementById("caja").style.fontWeight = "normal"; 
 }

}
