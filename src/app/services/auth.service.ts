// app/auth.service.ts

import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

import { Router } from '@angular/router';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
  // Configure Auth0
  lock = new Auth0Lock('EF44qnm8Asu3vc4zU7Lt6aH0vlhhNAqp', 'iddiaz.eu.auth0.com', {});

  //Perfil del Usuario
  userProfile: Object;

  constructor( private router: Router ) {
    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);

       // Fetch profile information
      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) {
          // Handle error
          alert(error);
          return;
        }

        localStorage.setItem('profile', JSON.stringify(profile));
        this.userProfile = profile;
      });

    });
  }

  public getProfile() {
    if ( this.authenticated ) {
      return JSON.parse( localStorage.getItem( 'profile' ) );
    } else {
      return {};
    }
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  }

  public logout() {
    // Remove token from localStorage
    this.router.navigate(['home']);
    localStorage.removeItem('id_token');

  }
}