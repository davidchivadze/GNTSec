import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/Services/SwaggerClient';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  IsRunning:boolean
  IsRunningUser:boolean
  IsRunningFull:boolean
  Data:any[]=[];
  Column:any[]=[];
  footerData:any[][]=[];
  totalCount:number=0;
  constructor(private DeviceService:Api.RemoteDeviceService) { }
  
  ngOnInit(): void {
    this.DeviceService.syncIsRunning().subscribe(res=>{
      console.log(res);
      if(res.ok){
        this.IsRunning=res.data
        this.IsRunningFull=res.data
      }else{
        this.IsRunning=false;
        this.IsRunningFull=false;
      }
    });
  }
  SyncDeviceData(){
    this.DeviceService.syncUserLog(false,true).subscribe(res=>{
      this.IsRunning=false;
    });
    this.IsRunning=true;
  }
  SyncDeviceUserData(){
    this.DeviceService.syncUserLog(true,false).subscribe(res=>{
      this.IsRunningUser=false;
    });
    this.IsRunningUser=true;
  }
  SyncDeviceFullData(){
    this.DeviceService.syncUserLog(true,true).subscribe(res=>{
      this.IsRunningFull=false;
    });
    this.IsRunningFull=true;
  }
  SetExcelReportData(){

  }
  CreateExcelReport(){

  }

}
