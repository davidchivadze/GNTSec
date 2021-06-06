import { Injectable,Injector } from '@angular/core';
import { HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse} from '@angular/common/http'
import {LoginService} from './login.service'
import {Router} from '@angular/router';
import { catchError, retry } from 'rxjs/operators';
import { LocalStorage } from '@ngx-pwa/local-storage';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
 constructor(private injector:Injector,private router:Router,private localSotrage:LocalStorage){}

  intercept(req, next) {
    let loginService=this.injector.get(LoginService);
    console.log(localStorage.getItem("authorization"))
    let tokenizedReq=req.clone({
      setHeaders:{
        Authorization:"Bearer "+`${loginService.getToken()}`
      }
    })
    return next.handle(tokenizedReq).pipe(catchError((err: any) => {
      if(err.status===401){
  
        return this.router.navigate(['/Auth/Login']);
      }
      if(err.status===402){
        return this.router.navigate(['/InsertKeygen']);
      }
  }))
  }


}
