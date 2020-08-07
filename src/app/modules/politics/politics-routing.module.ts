import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoliticsPageComponent } from './politics-page/politics-page.component';

const routes: Routes = [
  { path: '', component: PoliticsPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoliticsRoutingModule { }
