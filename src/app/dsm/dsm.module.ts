import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from '../table/table.component';
import { TableIdComponent } from '../table-id/table-id.component';

const routes: Routes = [
  { path: '', redirectTo: 'table', pathMatch: 'full' },
  { path: 'table', component: TableComponent},
  { path: 'table/:id', component: TableIdComponent}
];

@NgModule({
  declarations: [
    TableComponent,
    TableIdComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DsmModule { }
