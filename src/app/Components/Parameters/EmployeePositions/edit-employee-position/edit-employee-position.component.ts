import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Api } from 'src/app/Services/SwaggerClient';

@Component({
  selector: 'app-edit-employee-position',
  templateUrl: './edit-employee-position.component.html',
  styleUrls: ['./edit-employee-position.component.css']
})
export class EditEmployeePositionComponent implements OnInit {

  constructor(public ParametersService:Api.ParametersService,private router:Router,private route: ActivatedRoute) { }
  EditEmployeePosition:Api.EditEmployeePositionRequest
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('employeePositionID'));
    console.log(productIdFromRoute);
    this.EditEmployeePosition=new Api.EditEmployeePositionRequest;
    this.ParametersService.getEmployeePositionsList().subscribe(res=>{
      if(res.ok){
        var editItem=res.data.getEmployeePositionsList.find(el=>el.iD==productIdFromRoute);
        this.EditEmployeePosition=new Api.EditEmployeePositionRequest();
        this.EditEmployeePosition.iD=editItem.iD
        this.EditEmployeePosition.description=editItem.description
  }else{
    this.router.navigate(["/EmployeePositions"]);
  }
});
  }

  SubmitEditEmployeePosition(){
    this.ParametersService.editEmployeePosition(this.EditEmployeePosition).subscribe(res=>{
      if(res.ok){
        this.router.navigate(["/EmployeePositions"])
      }else{
        console.log(res);
      }
    })
  }
}
