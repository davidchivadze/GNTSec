import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Api } from 'src/app/Services/SwaggerClient';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css']
})
export class AuthLayoutComponent implements OnInit {

  constructor(public EmployeeService:Api.EmployeeService,public translate:TranslateService){
    translate.addLangs(['en','ka','ru']);
    console.log(this.getLanguage());
    translate.setDefaultLang(this.getLanguage());
  }

  ngOnInit(): void {
  }
  title = 'ZKTecoAdmin';
  Language=this.getLanguage();
   translateWeb(lang:string) {
     localStorage.setItem('language',lang);
     this.translate.use(lang);
     this.Language=lang;
   }
   getLanguage():string{
    console.log(localStorage.getItem('language'))
     return localStorage.getItem('language')||"en";
   }
}
