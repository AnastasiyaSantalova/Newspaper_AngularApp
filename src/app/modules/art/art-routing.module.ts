import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ArtPageComponent} from './art-page/art-page.component';

const routes: Routes = [
  { path: '', component: ArtPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtRoutingModule { }
