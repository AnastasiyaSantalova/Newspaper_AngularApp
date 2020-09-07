import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoliticsPageComponent } from './politics-page/politics-page.component';
import { SteveJobsComponent } from './steve-jobs/steve-jobs.component';
import { BonJoviComponent } from './bon-jovi/bon-jovi.component';
import { MichaelKorsComponent } from './michael-kors/michael-kors.component';
import { BiographyComponent } from './biography/biography.component';

const routes: Routes = [
  {
    path: '',
    component: PoliticsPageComponent,
    children: [
      { path: '', component: BiographyComponent },
      { path: 'steve-jobs', component: SteveJobsComponent },
      { path: 'bon-jovi', component: BonJoviComponent },
      { path: 'michael-kors', component: MichaelKorsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoliticsRoutingModule { }
