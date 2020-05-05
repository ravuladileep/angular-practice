import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from '../table-module/table/table.component';
import { TableIdComponent } from '../table-id-module/table-id/table-id.component';


const routes: Routes = [
  { path: '', redirectTo: 'table', pathMatch: 'full' },
  { path: 'table', loadChildren: () => import('../table-module/table.module').then(m => m.TableModule)},
  { path: 'table/:id', loadChildren: () => import('../table-id-module/table-id.module').then(m => m.TableIdModule)}
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
