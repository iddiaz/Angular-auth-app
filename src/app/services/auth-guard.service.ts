import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { Auth } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor( private auth: Auth, private router: Router ) { }

  canActivate () {
    if ( this.auth.authenticated() ) {
      console.log('EL GUARD PASÓ!!');
      return true;
    } else {
      console.log('BLOQUEADO POR EL GUARD!!');
      this.router.navigate(['home']);
      return false;
    }
  }

}
