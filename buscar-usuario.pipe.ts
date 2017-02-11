import { Pipe, PipeTransform } from '@angular/core';
import { AppComponent } from './app.component';
import { FiltraBusquedaService } from './filtra-busqueda.service';

@Pipe({
  name: 'buscarUsuario'
})
export class BuscarUsuarioPipe implements PipeTransform {

 public miServicio: FiltraBusquedaService;

  transform(value:any, buscar?:any):any {
    console.log(value);
    if(value.indexOf(buscar) == 0){
      return buscar;
    }else{
      return value.replace(buscar,"");
    }
  }
}
