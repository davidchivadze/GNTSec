import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/Services/SwaggerClient';

@Component({
  selector: 'app-schedule-generators-list',
  templateUrl: './schedule-generators-list.component.html',
  styleUrls: ['./schedule-generators-list.component.css']
})
export class ScheduleGeneratorsListComponent implements OnInit {

  constructor(public parameterService:Api.ParametersService) { }
  GeneratorList:Api.GetScheduleGeneratorItems[]
  ngOnInit(): void {
    this.parameterService.getScheduleGenerators().subscribe(res=>{
      this.GeneratorList=res.data.scheduleGeneratorItems
    });
  }
  DeleteGenerator(){
    console.log("delete");
  }
}
