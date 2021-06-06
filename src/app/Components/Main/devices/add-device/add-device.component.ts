import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Api } from 'src/app/Services/SwaggerClient';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {

  constructor(public ParameterService:Api.ParametersService,public RemoteDeviceService:Api.RemoteDeviceService,private router:Router) { }
  DeviceLocationInBranch:Api.GetDeviceLocationInBranchListItem[]
  DeviceTypes:Api.GetDeviceTypeListItem[]
  BranchList:Api.GetBranchListItem[]
  AddDeviceRequestModel:Api.AddDeviceRequest
  ngOnInit(): void {
    this.AddDeviceRequestModel=new Api.AddDeviceRequest();
      this.ParameterService.getDeviceLocationInBranchList().subscribe(res=>{
        if(res.ok){
          this.DeviceLocationInBranch=res.data.deviceLocationInBranchList
        }else{
          console.log(res.errors);
        }
      });
      this.ParameterService.getDeviceTypeList().subscribe(res=>{
        if(res.ok){
          this.DeviceTypes=res.data.deviceTypeList
        }else{
          console.log(res.errors);
        }
      });
      this.ParameterService.getBranchList().subscribe(res=>{
        if(res.ok){
          this.BranchList=res.data.branchList
        }else{
          console.log(res.errors);
        }
      });
  }
  AddDevice(){
    console.log(this.AddDeviceRequestModel);
    var result=this.RemoteDeviceService.addDevice(this.AddDeviceRequestModel).subscribe(res=>{
      if(res.ok){
        this.router.navigate(["/Device"])
      }else{
        console.log(res);
      }
    })
  }

}
