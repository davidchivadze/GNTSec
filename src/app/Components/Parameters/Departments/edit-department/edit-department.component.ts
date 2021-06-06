import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Api } from 'src/app/Services/SwaggerClient';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {

  EditDepartment:Api.EditDepartmentRequest
  ParentDepartmentList:Api.GetDepartmentsListItem[]
  constructor(public ParametersService:Api.ParametersService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('departmentID'));
    console.log(productIdFromRoute);
    this.ParametersService.getDepartmentsList().subscribe(res=>{
      if(res.ok){
        this.ParentDepartmentList=res.data.departmentsList
      }else{
        console.log(res.errors);
      }
     })
    this.ParametersService.getDepartmentsList().subscribe(res=>{
      if(res.ok){
        const EditDepartment=res.data.departmentsList.find(m=>m.iD==productIdFromRoute);
        this.EditDepartment=new Api.EditDepartmentRequest();
        this.EditDepartment.iD=EditDepartment.iD;
        this.EditDepartment.description=EditDepartment.description;
        this.EditDepartment.parentDepartmentID=EditDepartment.parentID;
      
      }else{
        this.router.navigate(["/Department"]);
      }
    });
    
  }
  SubmitEditDepartment(){
    console.log(this.EditDepartment);
    this.ParametersService.editDepartment(this.EditDepartment).subscribe(res=>{
      if(res.ok){
        this.router.navigate(["/Department"]);
      }else{
        console.log(res.errors);
      }
    })
  }
}
