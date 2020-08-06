import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtRoutingModule } from './art-routing.module';
import { ArtPageComponent } from './art-page/art-page.component';


@NgModule({
  declarations: [ArtPageComponent],
  imports: [
    CommonModule,
    ArtRoutingModule
  ]
})
export class ArtModule { }
