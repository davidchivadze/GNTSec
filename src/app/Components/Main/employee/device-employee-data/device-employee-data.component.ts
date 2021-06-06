import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/Services/SwaggerClient';

@Component({
  selector: 'app-device-employee-data',
  templateUrl: './device-employee-data.component.html',
  styleUrls: ['./device-employee-data.component.css']
})
export class DeviceEmployeeDataComponent implements OnInit {

  DeviceEmployeeUsers:Api.GetDeviceUserLogItem[]
  constructor(private DeviceService:Api.RemoteDeviceService) { }

  ngOnInit(): void {
    this.DeviceService.getDeviceUserLogList().subscribe(res=>{
      if(res.ok){
        this.DeviceEmployeeUsers=res.data.deviceUserLogList
      }else{
        console.log(res);
      }
    })
  }
  DeleteDevice(logID:number){
    this.DeviceService.deleteDeviceLog(logID).subscribe(res=>{
      if(res.ok&&res.data){
     
        this.DeviceEmployeeUsers.splice(this.DeviceEmployeeUsers.findIndex(e=>e.iD==logID),1);
      }
    })
  }

}
