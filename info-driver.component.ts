import { Component, OnInit, Input, trigger, state, style, transition, animate} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { ActivatedRoute } from '@angular/router';
import { FiltraBusquedaService } from '../filtra-busqueda.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-info-driver',
  templateUrl: './info-driver.component.html',
  styleUrls: ['./info-driver.component.css'],
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
export class InfoDriverComponent implements OnInit {

  resultado:any;
  _infoDriver:any;

  constructor(private ajax:Http, private route:ActivatedRoute) { }

  ngOnInit() {

   this.ajax.get("http://ergast.com/api/f1/2013/drivers.json").subscribe(

    data=>{this.resultado = data.json().MRData.DriverTable.Drivers},
    err=>console.log(err),
    ()=>console.log("Ha acabado la peticion")
   );

   this.route.params.subscribe(params=>{this._infoDriver = params['infoDriver'];console.log(this._infoDriver);});   
  }
}
