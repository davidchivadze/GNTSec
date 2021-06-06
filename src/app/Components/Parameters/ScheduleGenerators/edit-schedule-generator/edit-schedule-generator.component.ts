import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Api } from 'src/app/Services/SwaggerClient';

@Component({
  selector: 'app-edit-schedule-generator',
  templateUrl: './edit-schedule-generator.component.html',
  styleUrls: ['./edit-schedule-generator.component.css']
})
export class EditScheduleGeneratorComponent implements OnInit {
  AddSchedule:Api.GetScheduleGeneratorItems
  constructor(public route:ActivatedRoute,public router:Router,public parameterSercvice:Api.ParametersService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('generatorID'));
    this.parameterSercvice.getScheduleGenerators().subscribe(res=>{
      if(res.ok){
        this.AddSchedule=res.data.scheduleGeneratorItems.find(x=>x.iD==productIdFromRoute)
      }else{
        this.router.navigate(["ScheduleGenerators"])
      }
    })
  }
  SubmitAdd(){
    this.parameterSercvice.editScheduleGenerator(this.AddSchedule).subscribe(res=>{
      if(res.ok){
        this.router.navigate(["ScheduleGenerators"])
      }
    })
  }

}
