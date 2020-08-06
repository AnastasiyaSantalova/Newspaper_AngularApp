import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SportRoutingModule } from './sport-routing.module';
import { SportPageComponent } from './sport-page/sport-page.component';


@NgModule({
  declarations: [SportPageComponent],
  imports: [
    CommonModule,
    SportRoutingModule
  ]
})
export class SportModule { }
