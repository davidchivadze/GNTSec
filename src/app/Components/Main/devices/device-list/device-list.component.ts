import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/Services/SwaggerClient';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {

  constructor(public RemoteDeviceComponent:Api.RemoteDeviceService,public DeviceService:Api.ParametersService) { }
  RemoteDeviceList:Api.GetDeviceListItem[]
  ngOnInit(): void {
    this.RemoteDeviceComponent.getDeviceList().subscribe(res=>{
      if(res.ok){
      this.RemoteDeviceList=res.data.deviceList;
      }else{
        console.log(res.errors);
      }
    })
  }
  DeleteDevice(DeviceID:number){
    this.DeviceService.deleteDevice(DeviceID).subscribe(res=>{
      if(res.ok){
       this.RemoteDeviceList.splice(this.RemoteDeviceList.findIndex(e=>e.iD==DeviceID),1);
      }else{
        console.log(res.errors);
      }
    })
  }
}
