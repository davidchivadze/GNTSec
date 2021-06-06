import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Api } from 'src/app/Services/SwaggerClient';

@Component({
  selector: 'app-edit-goverment-holiday',
  templateUrl: './edit-goverment-holiday.component.html',
  styleUrls: ['./edit-goverment-holiday.component.css']
})
export class EditGovermentHolidayComponent implements OnInit {
  AddGovermentHoliday:Api.EditGovernmentHolidayRequest
  constructor(private EmployeeService:Api.EmployeeService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('editGovermentHolidayID'));
    this.EmployeeService.getGovernmentHolidayList().subscribe(res=>{
      if(res.ok){
        const holiday=res.data.governmentHolidayList.find(e=>e.iD==productIdFromRoute);
        this.AddGovermentHoliday=new Api.EditGovernmentHolidayRequest();
        this.AddGovermentHoliday.iD=holiday.iD;
        this.AddGovermentHoliday.holidayDate=new Date(holiday.holidayDate),
        this.AddGovermentHoliday.description=holiday.description
      }
    })
  }
  SubmitEditHoliday(){
    this.AddGovermentHoliday.holidayDate=new Date(this.AddGovermentHoliday.holidayDate);
    this.EmployeeService.editGovernmentHoliday(this.AddGovermentHoliday).subscribe(res=>{
      if(res.ok){
        this.router.navigate(["/GovermentHolidays"]);
      }
    })
  }

}
