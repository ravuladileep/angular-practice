import { Component, OnInit } from '@angular/core';
import { SocialUser, AuthService, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.css']
})
export class SocialLoginComponent implements OnInit {

 public user: SocialUser;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      // console.log(user);
    });
  }

  public signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(x => this.user = x);
  }

  public signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(x => this.user = x);
  }

  public signOut(): void {
    this.authService.signOut();
  }

}
