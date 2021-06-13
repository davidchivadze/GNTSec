import { resolve } from '@angular/compiler-cli/src/ngtsc/file_system';
import { Component, OnInit } from '@angular/core';
import { ExcelService } from 'src/app/Services/ExcelService';
import { Api } from 'src/app/Services/SwaggerClient';

@Component({
  selector: 'app-send-reports',
  templateUrl: './send-reports.component.html',
  styleUrls: ['./send-reports.component.css']
})
export class SendReportsComponent implements OnInit {

  month:number
  year:number
  branchID:number
  BranchList:Api.GetBranchListItem[]
  constructor(public EmployeeService:Api.EmployeeService,public ExceServ:ExcelService,public ParameterService:Api.ParametersService) { 
this.ParameterService.getBranchList().subscribe(res=>{
  this.BranchList=res.data.branchList
})

  }


  ngOnInit(): void {
  }
  Generate(){
    this.CreateExce(this.year,this.month);
   }
 
   CreateExce(year:number,month:number){
     for(var i=0;i<this.BranchList.length;i++){
     this.EmployeeService.getEmployeeModReport(month,year,0,this.BranchList[i].iD).subscribe(res=>{
       var data="";
       var promise=new Promise((resolve,reject)=>{
        var data=this.ExceServ.exportAsExcelFileSend("სატესტო ექსელი","",[],[],[],"Report","Main",res.data);
        resolve(data);
       })
   .then((data)=>{console.log(data)});
       
     })
    }
   }
}
