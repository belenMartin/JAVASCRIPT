import { Component, OnInit, Input, trigger, state, style, transition, animate} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { FiltraBusquedaService } from '../filtra-busqueda.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
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
export class TeamComponent implements OnInit {

  constStand: any;

  constructor(private ajax:Http) { }

  ngOnInit() {

   this.ajax.get("http://ergast.com/api/f1/2013/5/pitstops.json").subscribe(
     data=>this.constStand = data.json().MRData.RaceTable.Races,
     err=>console.log(err),
     ()=>console.log("Ha acabado la peticion")
   );
  }
}
