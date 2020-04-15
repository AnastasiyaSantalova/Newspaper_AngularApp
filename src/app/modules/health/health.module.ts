import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthRoutingModule } from './health-routing.module';
import { HealthPageComponent } from './health-page/health-page.component';


@NgModule({
  declarations: [
    HealthPageComponent,
  ],
  imports: [
    CommonModule,
    HealthRoutingModule
  ],
  exports: [],
})
export class HealthModule { }
