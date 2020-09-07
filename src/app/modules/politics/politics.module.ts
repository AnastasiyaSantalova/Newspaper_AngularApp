import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoliticsRoutingModule } from './politics-routing.module';
import { SharedModule } from '../shared/shared.module';

import { PoliticsPageComponent } from './politics-page/politics-page.component';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    PoliticsPageComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    PoliticsRoutingModule,
    SharedModule,
  ],
  exports: [],
})
export class PoliticsModule { }
