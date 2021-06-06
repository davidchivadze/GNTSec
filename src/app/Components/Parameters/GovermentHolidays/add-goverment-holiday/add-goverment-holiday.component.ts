import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Api } from 'src/app/Services/SwaggerClient';

@Component({
  selector: 'app-add-goverment-holiday',
  templateUrl: './add-goverment-holiday.component.html',
  styleUrls: ['./add-goverment-holiday.component.css']
})
export class AddGovermentHolidayComponent implements OnInit {

  constructor(public EmployeeService:Api.EmployeeService,private router:Router) { }
  AddGovermentHoliday:Api.AddGovernmentRequest
  ngOnInit(): void {
    this.AddGovermentHoliday=new Api.AddGovernmentRequest();
  }
  SubmitAddHoliday(){
    this.AddGovermentHoliday.holidayDate=new Date(this.AddGovermentHoliday.holidayDate);
    this.EmployeeService.addGovernmentHoliday(this.AddGovermentHoliday).subscribe(res=>{
      if(res.ok&&res.data){
        this.router.navigate(["/GovermentHolidays"]);
      }
    })
  }

}
