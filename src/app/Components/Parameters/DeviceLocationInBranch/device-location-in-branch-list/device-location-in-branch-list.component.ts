import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/Services/SwaggerClient';

@Component({
  selector: 'app-device-location-in-branch-list',
  templateUrl: './device-location-in-branch-list.component.html',
  styleUrls: ['./device-location-in-branch-list.component.css']
})
export class DeviceLocationInBranchListComponent implements OnInit {

  constructor(private ParameterService:Api.ParametersService) { }

  DeviceLocationList:Api.GetDeviceLocationInBranchListItem[]
  ngOnInit(): void {
    this.ParameterService.getDeviceLocationInBranchList().subscribe(res=>{
      if(res.ok){
        this.DeviceLocationList=res.data.deviceLocationInBranchList
      }else{
        console.log(res.errors);
      }
    })
  }

}
