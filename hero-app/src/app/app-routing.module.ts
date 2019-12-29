import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HerosComponent } from '../app/heros/heros.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';


const routes: Routes = [
  { path: '', component: DashbordComponent, pathMatch: 'full' },
  { path: 'heros', component: HerosComponent },
  { path: 'dashbord', component: DashbordComponent },
  { path: 'detail/:id', component: HeroDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
