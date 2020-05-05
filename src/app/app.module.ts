import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialLoginComponent } from './modules/social-login/social-login.component';
import { RouterModule } from '@angular/router';

import { SocialLoginModule } from 'angularx-social-login';
import { AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider} from 'angularx-social-login';
import { HttpClientModule } from '@angular/common/http';
import { QueueService } from './services/queue.service';
import { QueueRequestsComponent } from './modules/queue-requests/queue-requests.component';
import { DsmModule } from './modules/dsm/dsm.module';
import { TableModule } from './modules/table-module/table.module';
import { TableIdModule } from './modules/table-id-module/table-id.module';
import { StoreModule} from '@ngrx/store';
import { simpleReducer } from './reducers/simplereducer';
import { StoreDemoComponent } from './modules/store-demo/store-demo.component';
import { counterReducer } from './reducers/counter.reducer';



// configuring the authservice provider
const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('106001563410-o92j3g97gqtcr82f756cdqhdv03cnhld')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('865772500572235')
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    SocialLoginComponent,
    QueueRequestsComponent,
    StoreDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    SocialLoginModule,
    HttpClientModule,
    DsmModule,
    TableModule,
    TableIdModule,
    StoreModule.forRoot({message: simpleReducer, count: counterReducer})
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    QueueService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
