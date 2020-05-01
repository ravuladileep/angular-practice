import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialLoginComponent } from './modules/social-login/social-login.component';
import { QueueRequestsComponent } from './modules/queue-requests/queue-requests.component';


const routes: Routes = [
  { path: '', redirectTo: 'social-login', pathMatch: 'full' },
  { path: 'social-login', component: SocialLoginComponent },
  { path: 'queue-requests', component: QueueRequestsComponent },
  {path: '**', component: SocialLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }