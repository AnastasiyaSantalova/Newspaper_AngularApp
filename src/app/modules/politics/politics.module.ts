import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoliticsRoutingModule } from './politics-routing.module';
import { SharedModule } from '../shared/shared.module';

import { PoliticsPageComponent } from './politics-page/politics-page.component';
import { TableComponent } from './table/table.component';
import { SteveJobsComponent } from './steve-jobs/steve-jobs.component';
import { BonJoviComponent } from './bon-jovi/bon-jovi.component';
import { MichaelKorsComponent } from './michael-kors/michael-kors.component';
import { BiographyComponent } from './biography/biography.component';
import { TabsComponent } from './tabs/tabs.component';


@NgModule({
  declarations: [
    PoliticsPageComponent,
    TableComponent,
    SteveJobsComponent,
    BonJoviComponent,
    MichaelKorsComponent,
    BiographyComponent,
    TabsComponent,
  ],
  imports: [
    CommonModule,
    PoliticsRoutingModule,
    SharedModule,
  ],
  exports: [],
})
export class PoliticsModule { }
