import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Api } from 'src/app/Services/SwaggerClient';

@Component({
  selector: 'app-add-employee-position',
  templateUrl: './add-employee-position.component.html',
  styleUrls: ['./add-employee-position.component.css']
})
export class AddEmployeePositionComponent implements OnInit {

  constructor(public ParametersService:Api.ParametersService,private router:Router) { }
  AddEmployeePosition:Api.AddEmployeePositionRequest
  ngOnInit(): void {
    this.AddEmployeePosition=new Api.AddEmployeePositionRequest;
  }
  SubmitAddEmployeePosition(){
    this.ParametersService.addEmployeePositionType(this.AddEmployeePosition).subscribe(res=>{
      if(res.ok){
        this.router.navigate(["/EmployeePositions"])
      }else{
        console.log(res);
      }
    })

  }

}
