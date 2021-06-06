import { Component, OnInit } from '@angular/core';
import { ExcelService } from 'src/app/Services/ExcelService';
import { Api } from 'src/app/Services/SwaggerClient';

@Component({
  selector: 'app-full-report-week-results',
  templateUrl: './full-report-week-results.component.html',
  styleUrls: ['./full-report-week-results.component.css']
})
export class FullReportWeekResultsComponent implements OnInit {

  fromDate:Date
  ToDate:Date
  branchID:number
  BranchList:Api.GetBranchListItem[]
  constructor(public EmployeeService:Api.EmployeeService,public ExceServ:ExcelService,public ParameterService:Api.ParametersService) { }

  ngOnInit(): void {
    this.ParameterService.getBranchList().subscribe(res=>{
      this.BranchList=res.data.branchList
    })
  }
  Generate(){
   this.CreateExce();
  }

  CreateExce(){
    this.EmployeeService.getEmployeeFullReportWeekHoures(new Date(this.fromDate),new Date(this.ToDate),0,this.branchID).subscribe(res=>{
      this.ExceServ.exportAsExcelFullWeek("სატესტო ექსელი","",[],[],[],"Report","Main",res.data.getEmployeeFullReportItems);
    })
  }
}
