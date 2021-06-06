import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Api } from 'src/app/Services/SwaggerClient';
import {LocalStorage} from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  UserName:string
  Password:string
  constructor(public authService:Api.AuthService,private cookie:CookieService,private router:Router,private localstorage:LocalStorage) { }

  ngOnInit(): void {
  }

  Login(){
    this.authService.login(this.UserName,this.Password).subscribe(res=>{
      if(res.ok){
        console.log(res.data);
        this.cookie.delete('authorization');
        
        this.cookie.set('authorization',res.data,null,null,null,null,null);
        this.router.navigate(['/Employee']);
      }else{
        if(res.errors[0]==="402"){
          this.router.navigate(["/InsertKeygen"]);
        }
      }
    })
  }

}
