import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Api } from 'src/app/Services/SwaggerClient';

@Component({
  selector: 'app-edit-device',
  templateUrl: './edit-device.component.html',
  styleUrls: ['./edit-device.component.css']
})
export class EditDeviceComponent implements OnInit {

  constructor(public ParameterService:Api.ParametersService,public RemoteDeviceService:Api.RemoteDeviceService,private router:Router,private route:ActivatedRoute) { }
  DeviceLocationInBranch:Api.GetDeviceLocationInBranchListItem[]
  DeviceTypes:Api.GetDeviceTypeListItem[]
  BranchList:Api.GetBranchListItem[]
  AddDeviceRequestModel:Api.AddDeviceRequest
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('deviceID'));
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
      this.RemoteDeviceService.getDeviceForEdit(productIdFromRoute).subscribe(res=>{
        if(res.ok){
          this.AddDeviceRequestModel=res.data
        }else{
          console.log(res.errors);
        }
      })
  }
  EditDevice(){
    console.log(this.AddDeviceRequestModel);
    var result=this.RemoteDeviceService.editDevice(this.AddDeviceRequestModel).subscribe(res=>{
      if(res.ok){
        this.router.navigate(["/Device"])
      }else{
        console.log(res);
      }
    })
  }

}
