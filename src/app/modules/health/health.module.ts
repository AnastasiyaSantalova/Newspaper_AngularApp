import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthRoutingModule } from './health-routing.module';
import { HealthPageComponent } from './health-page/health-page.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { TimesDirective } from 'src/app/directives/times.directive';
import { SharedModule } from '../shared/shared.module';
import { SegmentComponent } from './segment/segment.component';


@NgModule({
  declarations: [
    HealthPageComponent,
    PlaceholderComponent,
    TimesDirective,
    SegmentComponent,
  ],
  imports: [
    CommonModule,
    HealthRoutingModule,
    SharedModule,
  ],
  exports: [],
})
export class HealthModule { }
