import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoliticsRoutingModule } from './politics-routing.module';
import { PoliticsPageComponent } from './politics-page/politics-page.component';


@NgModule({
  declarations: [
    PoliticsPageComponent,
  ],
  imports: [
    CommonModule,
    PoliticsRoutingModule,
  ],
  exports: [],
})
export class PoliticsModule { }
