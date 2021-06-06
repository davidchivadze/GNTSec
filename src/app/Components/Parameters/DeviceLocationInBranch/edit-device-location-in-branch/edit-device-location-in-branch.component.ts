import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Api } from 'src/app/Services/SwaggerClient';

@Component({
  selector: 'app-edit-device-location-in-branch',
  templateUrl: './edit-device-location-in-branch.component.html',
  styleUrls: ['./edit-device-location-in-branch.component.css']
})
export class EditDeviceLocationInBranchComponent implements OnInit {

  constructor(public ParameterService:Api.ParametersService,private router:Router,private route:ActivatedRoute) { }
  EditDeviceLocationInBranch:Api.EditDeviceLocationInBranchRequest
  BranchList:Api.GetBranchListItem[]
  ErrorResponse:String
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('deviceLocationInBranchID'));
    this.EditDeviceLocationInBranch=new Api.EditDeviceLocationInBranchRequest();
    this.ParameterService.getBranchList().subscribe(res=>{
      if(res.ok){
        this.BranchList=res.data.branchList
      }else{
        console.log(res.errors);
      }
    })
    this.ParameterService.getDeviceLocationInBranchList().subscribe(res=>{
      if(res.ok){
        this.EditDeviceLocationInBranch=res.data.deviceLocationInBranchList.find(element=>element.iD==productIdFromRoute)
      }else{
        console.log(res.errors)
      }
    })
  }
  SubmitEditDeviceLocationInBranch(){

    this.ParameterService.editDeviceLocationInBranch(this.EditDeviceLocationInBranch).subscribe(res=>{
      if(res.ok){
        this.router.navigate(["DeviceLocationInBranch"]);
      }else{
        this.ErrorResponse=res.errors[0];
      }
    })

  }

}
