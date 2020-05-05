import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TableIdComponent } from './table-id/table-id.component';

const routes: Routes = [
  // { path: '', redirectTo: 'table', pathMatch: 'full' },
  { path: '', component: TableIdComponent},
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TableIdModule { }
