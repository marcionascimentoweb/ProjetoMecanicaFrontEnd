import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AutheticationService } from './authetication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authentication: AutheticationService, 
    private router: Router) { 

  }

  canActivate() : boolean {
    if (!this.authentication.estaAutenticado()) {   
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
