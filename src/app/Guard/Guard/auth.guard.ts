import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { LoginService } from 'src/app/Services/Auth/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginService:LoginService,
    private router:Router
    ){}
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
    if(this.loginService.loggedIn()){
      return true;
    }else{
      this.router.navigate(['/Auth/Login'])
      return false
    }
  }
}
