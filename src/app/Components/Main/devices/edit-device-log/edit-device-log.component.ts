import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Api } from 'src/app/Services/SwaggerClient';

@Component({
  selector: 'app-edit-device-log',
  templateUrl: './edit-device-log.component.html',
  styleUrls: ['./edit-device-log.component.css']
})
export class EditDeviceLogComponent implements OnInit {
  EditModel:Api.GetDeviceUserLogItemForEdit
  constructor(private route:ActivatedRoute,private DeviceService:Api.RemoteDeviceService,private EmployeeService:Api.EmployeeService,private router:Router) { }
  EmployeeList:Api.GetEmployeeListItem[]
  DeviceList:Api.GetDeviceListItem[]
  ngOnInit(): void {
    this.EditModel=new Api.GetDeviceUserLogItem();
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('deviceLogID'));
    this.EmployeeService.getEmployeeList().subscribe(res=>{
      this.EmployeeList=res.data.getEmployeeList
    });
    this.DeviceService.getDeviceList().subscribe(res=>{
      this.DeviceList=res.data.deviceList
    })
    this.DeviceService.getDeviceUserLogForEdit(productIdFromRoute).subscribe(res=>{
      this.EditModel=res.data
      console.log(res.data);
    });
  }
  SubmitEdit(){
    this.EditModel.dateTimeRecord=new Date(this.EditModel.dateTimeRecord);
    this.DeviceService.editDeviceUserLog(this.EditModel).subscribe(res=>{
      if(res.ok&&res.data){
        this.router.navigate(["/Device/DeviceLogList"])
      }
    })
  }
}
