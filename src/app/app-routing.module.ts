import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './components/error-page/error-page.component';


const routes: Routes = [
  { path: 'art', loadChildren: () => import('./modules/art/art.module').then((m) => m.ArtModule) },
  { path: 'health', loadChildren: () => import('./modules/health/health.module').then((m) => m.HealthModule) },
  { path: 'politics', loadChildren: () => import('./modules/politics/politics.module').then((m) => m.PoliticsModule) },
  { path: 'sport', loadChildren: () => import('./modules/sport/sport.module').then((m) => m.SportModule) },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
