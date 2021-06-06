import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/Services/SwaggerClient';

@Component({
  selector: 'app-employee-positions-list',
  templateUrl: './employee-positions-list.component.html',
  styleUrls: ['./employee-positions-list.component.css']
})
export class EmployeePositionsListComponent implements OnInit {

  constructor(public ParameterService:Api.ParametersService) { }
  EmployeePositionList:Api.GetEmployeePositionsListItem[]
  ngOnInit(): void {
    this.ParameterService.getEmployeePositionsList().subscribe(res=>{
      if(res.ok){
        this.EmployeePositionList=res.data.getEmployeePositionsList
      }else{
        console.log(res.errors);
      }
    });
  }
  DeleteEmployeePosition(employeePositionID:number){
    this.ParameterService.deleteEmployeePosition(employeePositionID).subscribe(res=>{
      if(res.ok){
       this.EmployeePositionList.splice(this.EmployeePositionList.findIndex(e=>e.iD==employeePositionID),1);
      }else{
        console.log(res.errors);
      }
    })
  }

}
