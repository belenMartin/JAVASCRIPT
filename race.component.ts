import { Component, OnInit, Input, trigger, state, style, transition, animate} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import "rxjs/add/operator/map";
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { FiltraBusquedaService } from '../filtra-busqueda.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css'],
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
export class RaceComponent implements OnInit {

  raceYear:any;
  _grandPrix:any;
  _grandPrixDos:any;

  constructor(private ajax:Http, private route:ActivatedRoute) { }

  ngOnInit() {

   this.ajax.get("http://ergast.com/api/f1/2013.json").subscribe(
    data => this.raceYear = data.json().MRData.RaceTable.Races,
    err=>console.log(err),
    ()=>console.log("Ha acabado la peticion")
   );

   this.route.params.subscribe(params=>{this._grandPrix = params['grandPrix'];this._grandPrixDos = params['grandPrixDos'];});
  }
}
