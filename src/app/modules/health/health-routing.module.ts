import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HealthPageComponent } from './health-page/health-page.component';

const routes: Routes = [
  { path: '', component: HealthPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthRoutingModule { }
