import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Api } from 'src/app/Services/SwaggerClient';

@Component({
  selector: 'app-add-device-location-in-branch',
  templateUrl: './add-device-location-in-branch.component.html',
  styleUrls: ['./add-device-location-in-branch.component.css']
})
export class AddDeviceLocationInBranchComponent implements OnInit {

  constructor(public ParameterService:Api.ParametersService,private router:Router) { }
  AddDeviceLocationInBranch:Api.AddDeviceLocationInBranchRequest
  BranchList:Api.GetBranchListItem[]
  ngOnInit(): void {
    this.AddDeviceLocationInBranch=new Api.AddDeviceLocationInBranchRequest();
    this.ParameterService.getBranchList().subscribe(res=>{
      if(res.ok){
        this.BranchList=res.data.branchList
      }else{
        console.log(res.errors);
      }
    })
  }
  SubmitAddDeviceLocationInBranch(){
    this.ParameterService.addDeviceLocationInBranch(this.AddDeviceLocationInBranch).subscribe(res=>{
      if(res.ok){
        this.router.navigate(["/DeviceLocationtInBranch"])
      }else{
        console.log(res);
      }
    })

}
}
