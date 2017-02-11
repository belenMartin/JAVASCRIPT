import { Component, Input, trigger, state, style, transition, animate, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FiltraBusquedaService } from './filtra-busqueda.service';
import { BuscarUsuarioPipe } from './buscar-usuario.pipe';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import "rxjs/add/operator/map";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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
export class AppComponent {

  buscar:any;
  listado:any;

  constructor(private miServicio: FiltraBusquedaService, private ajax:Http){

    this.buscar = this.miServicio.busqueda;

  }

 ngOnInit(){
 }

}
