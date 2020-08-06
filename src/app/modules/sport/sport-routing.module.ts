import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SportPageComponent } from './sport-page/sport-page.component';

const routes: Routes = [
  { path: 'sport', component: SportPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SportRoutingModule { }
