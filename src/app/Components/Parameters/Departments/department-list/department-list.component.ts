import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/Services/SwaggerClient';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  DepartmentList:Api.GetDepartmentsListItem[]
  constructor(public ParameterService:Api.ParametersService) { }

  ngOnInit(): void {
    this.ParameterService.getDepartmentsList().subscribe(res=>{
      if(res.ok){
        this.DepartmentList=res.data.departmentsList
      }else{
        console.log(res.errors);
      }
    })
    
  }
  DeleteDepartment(departmentID:number){
    this.ParameterService.deleteDepartment(departmentID).subscribe(res=>{
      if(res.ok){
       this.DepartmentList.splice(this.DepartmentList.findIndex(e=>e.iD==departmentID),1);
      }else{
        console.log(res.errors);
      }
    })
  }

}
