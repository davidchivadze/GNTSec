import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Api } from 'src/app/Services/SwaggerClient';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {
  AddDepartmentRequest:Api.AddDepartmentRequest
  ParentDepartmentList:Api.GetDepartmentsListItem[]
  constructor(public ParameterService:Api.ParametersService,private router:Router) { }

  ngOnInit(): void {
    this.ParameterService.getDepartmentsList().subscribe(res=>{
     if(res.ok){
       this.ParentDepartmentList=res.data.departmentsList
     }else{
       console.log(res.errors);
     }
    })
    this.AddDepartmentRequest=new Api.AddDepartmentRequest();

  }
  SubmitAddDepartment()
  {
    this.ParameterService.addDepartment(this.AddDepartmentRequest).subscribe(res=>{
      if(res.ok){
        this.router.navigate(["/Department"]);
      }else{
        console.log(res.errors);
      }
    })
    
  }

}
