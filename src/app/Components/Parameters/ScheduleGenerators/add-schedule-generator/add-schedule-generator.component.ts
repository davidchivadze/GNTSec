import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Api } from 'src/app/Services/SwaggerClient';

@Component({
  selector: 'app-add-schedule-generator',
  templateUrl: './add-schedule-generator.component.html',
  styleUrls: ['./add-schedule-generator.component.css']
})
export class AddScheduleGeneratorComponent implements OnInit {
  AddSchedule:Api.AddScheduleGenerator
  constructor(public ParameterService:Api.ParametersService,public router:Router) { }

  ngOnInit(): void {
    this.AddSchedule=new Api.AddScheduleGenerator();
  }

  SubmitAdd(){
    this.ParameterService.addScheduleGenerator(this.AddSchedule).subscribe(res=>{
      if(res.ok&&res.data){
        this.router.navigate(['/ScheduleGenerators']);
      }else{
        console.log(res.errors);
      }
    })
  }

}
