import { Component, OnInit, Input, trigger, state, style, transition, animate} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { FiltraBusquedaService } from '../filtra-busqueda.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-info-grand-prix-dos',
  templateUrl: './info-grand-prix-dos.component.html',
  styleUrls: ['./info-grand-prix-dos.component.css'],
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
export class InfoGrandPrixDosComponent implements OnInit {

  resultado:any;
  _grandPrixDos:any;

  constructor(private route:ActivatedRoute, private ajax:Http) { }

  ngOnInit() {

    this.ajax.get("http://ergast.com/api/f1/2013/circuits.json").subscribe(

    data=>this.resultado = data.json().MRData.CircuitTable.Circuits,
    err=>console.log(err),
    ()=>console.log("Ha acabado la peticion")
   );

   this.route.params.subscribe(params=>this._grandPrixDos = params['grandPrixDos']);
  }

}
