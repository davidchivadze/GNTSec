import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Api } from 'src/app/Services/SwaggerClient';

@Component({
  selector: 'app-add-device-log',
  templateUrl: './add-device-log.component.html',
  styleUrls: ['./add-device-log.component.css']
})
export class AddDeviceLogComponent implements OnInit {

  constructor(private EmployeeService:Api.EmployeeService,private DeviceService:Api.RemoteDeviceService,private router:Router) { }
  EmployeeList:Api.GetEmployeeListItem[]
  AddLog:Api.DeviceUserLog
  DeviceList:Api.GetDeviceListItem[]
  ngOnInit(): void {
    this.AddLog=new Api.DeviceUserLog();
    this.EmployeeService.getEmployeeList().subscribe(res=>{
      this.EmployeeList=res.data.getEmployeeList
    });
    this.DeviceService.getDeviceList().subscribe(res=>{
      this.DeviceList=res.data.deviceList
    })
  }
  SubmitAdd(){
    console.log(this.AddLog);
    this.AddLog.dateTimeRecord=new Date(this.AddLog.dateTimeRecord);
    this.DeviceService.addDeviceLog(this.AddLog).subscribe(res=>{
      if(res.ok&&res.data){
        this.router.navigate(["/Device/DeviceLogList"])
      }
    })
  }
}
