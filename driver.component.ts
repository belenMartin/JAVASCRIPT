import { Component, OnInit, Input, trigger, state, style, transition, animate} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import "rxjs/add/operator/map";
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { FiltraBusquedaService } from '../filtra-busqueda.service';
import { AppComponent } from '../app.component';
import { BuscarUsuarioPipe } from '../buscar-usuario.pipe';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css'],
  animations:[
    trigger('flyInOut',[
       state('in',style({transform: 'translateX(0)'})),
       transition('void => *',[
          style({transform: 'translateX(-100%)'}),
          animate(100)
       ]),
       transition('* => void',[
         animate(100, style({transform: 'translateX(100%)'}))
       ])
    ])
 ]
})
export class DriverComponent implements OnInit {

  listado:any;
  infoConst:any;
  resultado:any;
  preload:any;
  parametro1:any;
  buscar:any;

  constructor(private ajax:Http, private route:ActivatedRoute, private miServicio:FiltraBusquedaService) {
  
   this.buscar = this.miServicio.busqueda;

   }

  ngOnInit() {

    this.ajax.get("http://ergast.com/api/f1/2013/drivers.json").subscribe(

     data=>this.listado = data.json().MRData.DriverTable.Drivers,
     err=>console.log(err),
     ()=>console.log("Ha acabado la peticion")
    );
    this.ajax.get("http://ergast.com/api/f1/2013/constructors.json").subscribe(
   
      data=>this.infoConst = data.json().MRData.ConstructorTable.Constructors,
      err=>console.log(err),
      ()=>console.log("Ha acabado la peticion")    
    );

    this.ajax.get("http://ergast.com/api/f1/2013/5/results.json").subscribe(
   
      data=>this.resultado = data.json().MRData.RaceTable.Races.Results,
      err=>console.log(err),
      ()=>console.log("Ha acabado la peticion")    
    );

    this.route.params.subscribe(params=>{const _infoDriver = params['infoDriver']; const _infoConst = params['infoConst'];});
  }
}
