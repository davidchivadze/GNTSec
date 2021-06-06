import { Component, OnInit } from '@angular/core';
import { ExcelService } from 'src/app/Services/ExcelService';
import { Api } from 'src/app/Services/SwaggerClient';

@Component({
  selector: 'app-full-report',
  templateUrl: './full-report.component.html',
  styleUrls: ['./full-report.component.css']
})
export class FullReportComponent implements OnInit {

  month:number
  year:number
  branchID:number
  BranchList:Api.GetBranchListItem[]
  constructor(public EmployeeService:Api.EmployeeService,public ExceServ:ExcelService,public ParameterService:Api.ParametersService) { }

  ngOnInit(): void {
    this.ParameterService.getBranchList().subscribe(res=>{
      this.BranchList=res.data.branchList
    })
  }
  Generate(){
   this.CreateExce(this.year,this.month);
  }

  CreateExce(year:number,month:number){
    this.EmployeeService.getEmployeeFullReport(month,year,0,this.branchID).subscribe(res=>{
      this.ExceServ.exportAsExcelFull("სატესტო ექსელი","",[],[],[],"Report","Main",res.data.getEmployeeFullReportItems);
    })
  }

}
