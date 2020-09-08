import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtRoutingModule } from './art-routing.module';
import { ArtPageComponent } from './art-page/art-page.component';
import { StatisticComponent } from './statistic/statistic.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ArtPageComponent, StatisticComponent],
  imports: [
    CommonModule,
    ArtRoutingModule,
    SharedModule,
  ]
})
export class ArtModule { }
