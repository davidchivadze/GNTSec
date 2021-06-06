import { Component, OnInit } from '@angular/core';
import { ExcelService } from 'src/app/Services/ExcelService';
import { Api } from 'src/app/Services/SwaggerClient';

@Component({
  selector: 'app-mod-report',
  templateUrl: './mod-report.component.html',
  styleUrls: ['./mod-report.component.css']
})
export class ModReportComponent implements OnInit {
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
    this.EmployeeService.getEmployeeModReport(month,year,0,this.branchID).subscribe(res=>{
      this.ExceServ.exportAsExcelFile("სატესტო ექსელი","",[],[],[],"Report","Main",res.data);
    })
  }
}
