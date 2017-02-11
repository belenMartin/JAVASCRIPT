import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { DriverComponent } from './driver/driver.component';
import { TeamComponent } from './team/team.component';
import { RaceComponent } from './race/race.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { routing } from './app.routes';
import { InfoDriverComponent } from './info-driver/info-driver.component';
import { ActivatedRoute} from '@angular/router';
import { InfoConstComponent } from './info-const/info-const.component';
import { InfoGrandPrixComponent } from './info-grand-prix/info-grand-prix.component';
import { InfoGrandPrixDosComponent } from './info-grand-prix-dos/info-grand-prix-dos.component';
import { FiltraBusquedaService } from './filtra-busqueda.service';
import { CambiaEstiloComponent } from './cambia-estilo/cambia-estilo.component';
import { BuscarUsuarioPipe } from './buscar-usuario.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PieComponent,
    CuerpoComponent,
    DriverComponent,
    TeamComponent,
    RaceComponent,
    PageNotFoundComponent,
    InfoDriverComponent,
    InfoConstComponent,
    InfoGrandPrixComponent,
    InfoGrandPrixDosComponent,
    CambiaEstiloComponent,
    BuscarUsuarioPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [FiltraBusquedaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
