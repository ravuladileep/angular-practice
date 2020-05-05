import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialLoginComponent } from './modules/social-login/social-login.component';
import { QueueRequestsComponent } from './modules/queue-requests/queue-requests.component';
import { StoreDemoComponent } from './modules/store-demo/store-demo.component';


const routes: Routes = [
  { path: '', redirectTo: 'social-login', pathMatch: 'full' },
  { path: 'social-login', component: SocialLoginComponent },
  { path: 'queue-requests', component: QueueRequestsComponent },
  { path: 'dsm', loadChildren: () => import('./modules/dsm/dsm.module').then(m => m.DsmModule)},
  { path: 'demo-store', component: StoreDemoComponent },
  { path: '**', component: SocialLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
