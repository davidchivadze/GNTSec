import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/Services/SwaggerClient';

@Component({
  selector: 'app-employee-list-from-device',
  templateUrl: './employee-list-from-device.component.html',
  styleUrls: ['./employee-list-from-device.component.css']
})
export class EmployeeListFromDeviceComponent implements OnInit {

  constructor(public RemoteDeviceService:Api.RemoteDeviceService) { }
  EmployeeListDevice:Api.DeviceUserListItem[]
  ngOnInit(): void {
    this.RemoteDeviceService.getDeviceUserList(true).subscribe(res=>{
      if(res.ok){
        this.EmployeeListDevice=res.data.deviceUserListItems
      }else{
        console.log(res.errors);
      }
    })
  }

}
