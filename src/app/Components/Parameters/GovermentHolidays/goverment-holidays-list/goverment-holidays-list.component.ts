import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/Services/SwaggerClient';

@Component({
  selector: 'app-goverment-holidays-list',
  templateUrl: './goverment-holidays-list.component.html',
  styleUrls: ['./goverment-holidays-list.component.css']
})
export class GovermentHolidaysListComponent implements OnInit {

  constructor(public ParameterService:Api.EmployeeService) { }
  HolidayList:Api.GetGovernmentHolidayListItem[]
  ngOnInit(): void {
    this.ParameterService.getGovernmentHolidayList().subscribe(res=>{
      this.HolidayList=res.data.governmentHolidayList
    });
  }

  DeleteHoliday(id:number){
    this.ParameterService.deleteGovernmentHoliday(id).subscribe(res=>{
      if(res.ok&&res.data){
        this.HolidayList.splice(this.HolidayList.findIndex(e=>e.iD==id),1);
      }
    })
  }

}
