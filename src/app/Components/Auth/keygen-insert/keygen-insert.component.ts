import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Api } from 'src/app/Services/SwaggerClient';

@Component({
  selector: 'app-keygen-insert',
  templateUrl: './keygen-insert.component.html',
  styleUrls: ['./keygen-insert.component.css']
})
export class KeygenInsertComponent implements OnInit {
  Keygen:string
  constructor(public authService:Api.AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  Activate(){
    this.authService.updateSerialKey(this.Keygen).subscribe(res=>{
      console.log(res);
      if(res.ok){
        this.router.navigate(["/Employee"]);
      }
    })
  }

}
