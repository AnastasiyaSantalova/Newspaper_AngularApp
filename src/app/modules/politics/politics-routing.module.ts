import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoliticsPageComponent } from './politics-page/politics-page.component';

const routes: Routes = [
  { path: 'politics', component: PoliticsPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoliticsRoutingModule { }
