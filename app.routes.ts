import { Routes, RouterModule } from '@angular/router';

import { DriverComponent } from './driver/driver.component';
import { TeamComponent } from './team/team.component';
import { RaceComponent } from './race/race.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InfoDriverComponent } from './info-driver/info-driver.component';
import { ActivatedRoute } from '@angular/router';
import { InfoConstComponent } from './info-const/info-const.component';
import { InfoGrandPrixComponent } from './info-grand-prix/info-grand-prix.component';
import { InfoGrandPrixDosComponent } from './info-grand-prix-dos/info-grand-prix-dos.component';

const routes: Routes = [

    {path: '', component: DriverComponent},
    {path: 'drivers', component: DriverComponent },
    {path: 'drivers/:infoDriver', component: InfoDriverComponent },
    {path: 'constructs/:infoConst', component: InfoConstComponent },
    {path: 'races/:grandPrix', component: InfoGrandPrixComponent },
    {path: 'races/:grandPrixDos', component: InfoGrandPrixDosComponent },
    {path: 'pitStops', component: TeamComponent },
    {path: 'races', component: RaceComponent },
    {path: '**', component: PageNotFoundComponent },    
];

export const routing = RouterModule.forRoot(routes);
