import { Component, OnInit, Input, trigger, state, style, transition, animate} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { FiltraBusquedaService } from '../filtra-busqueda.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-info-const',
  templateUrl: './info-const.component.html',
  styleUrls: ['./info-const.component.css'],
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
export class InfoConstComponent implements OnInit {


  _infoConst:any;
  resultado:any;


  constructor(private route:ActivatedRoute, private ajax:Http) {    

  }

  ngOnInit() {

   this.ajax.get("http://ergast.com/api/f1/2013/constructors.json").subscribe(

   data=>this.resultado = data.json().MRData.ConstructorTable.Constructors,
   err=>console.log(err),
   ()=>console.log("Ha acabado la peticion")
   );

    this.route.params.subscribe(params=>{this._infoConst = params['infoConst'];console.log(this._infoConst);});
  }

}
