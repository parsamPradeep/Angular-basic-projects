import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableRowComponent } from './table-row/table-row.component';


const routes: Routes = [
  { path: '', redirectTo: 'app-table-row', pathMatch: 'full' },
  { path: 'app-table-row', component: TableRowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
