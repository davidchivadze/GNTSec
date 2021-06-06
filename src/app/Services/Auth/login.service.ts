import { Injectable } from '@angular/core';
import { LoginModel, LoginResponseModel } from './login.service.model';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {CookieService} from 'ngx-cookie-service'
import { Local } from 'protractor/built/driverProviders';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  formData:LoginModel;
  readonly rootURL="http://localhost:3000"
  constructor(private http:HttpClient,private cookie:CookieService,private localstorage:LocalStorage) { }

  loggedIn(){
    
    return !!this.cookie.get('authorization');
  }
  getToken(){
    return this.cookie.get('authorization');
  }
}
