import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { from } from 'rxjs';

const routes: Routes = [
 { path: 'home', component: HomeComponent },
 {path: 'features', component:FeaturesComponent},
 {path: 'pricing',component:PricingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
