import { Component, OnInit } from '@angular/core';
import { ExcelService } from 'src/app/Services/ExcelService';
import { Api } from 'src/app/Services/SwaggerClient';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  EmployeeList:Api.GetEmployeeListItem[]
  RecordLength:number
  DeleteIDs:number[]
  constructor(private EmployeeService:Api.EmployeeService,private DeviceService:Api.RemoteDeviceService,private ExceServ:ExcelService) { }

  ngOnInit(): void {
    this.DeleteIDs=new Array<number>();
    this.RecordLength=0;
    this.EmployeeService.getEmployeeList().subscribe(res=>{
       if(res.ok){
         this.EmployeeList=res.data.getEmployeeList
         this.RecordLength=res.data.getEmployeeList.length
       }else{
         console.log(res.ok);
       }
    })
  }
  // CreateExce(){
  //   this.EmployeeService.getEmployeeModReport(3,2021,0).subscribe(res=>{
  //     this.ExceServ.exportAsExcelFile("სატესტო ექსელი","",[],[],[],"Report","Main",res.data);
  //   })
    
  // }
  SyncUserToDevice(employeeID:number){
      this.DeviceService.insertUserToDevice(employeeID).subscribe(res=>{
        if(res.ok){
          this.EmployeeList.find(e=>e.iD==employeeID).userIDInDevice=15;
        }else{
          console.log(res.errors);
        }
      })
  }
  DeleteEmployee(employeeID:number){
    this.EmployeeService.deleteEmployee(employeeID).subscribe(res=>{
      if(res.ok){
       this.EmployeeList.splice(this.EmployeeList.findIndex(e=>e.iD==employeeID),1);
      }else{
        console.log(res.errors);
      }
    })
  }
  ChangeEmployeeCheck(event:any,id:number){
    if(event.currentTarget.checked){
      this.DeleteIDs.push(id);
    }else{
      this.DeleteIDs.splice(this.DeleteIDs.findIndex(e=>e===id),1);
    }
    console.log(this.DeleteIDs);

  }
  DeleteSelected(){
    this.EmployeeService.deleteEmployees(this.DeleteIDs).subscribe(res=>{
     if(res.ok){
      this.EmployeeService.getEmployeeList().subscribe(res=>{
        if(res.ok){
          this.EmployeeList=res.data.getEmployeeList
          this.RecordLength=res.data.getEmployeeList.length
        }else{
          console.log(res.ok);
        }
     })
    }else{
      console.log(res.errors);
    }
    })
  }
}
