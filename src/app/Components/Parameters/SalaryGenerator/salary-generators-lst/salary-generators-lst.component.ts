import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/Services/SwaggerClient';

@Component({
  selector: 'app-salary-generators-lst',
  templateUrl: './salary-generators-lst.component.html',
  styleUrls: ['./salary-generators-lst.component.css']
})
export class SalaryGeneratorsLstComponent implements OnInit {

  constructor(public parameterService:Api.ParametersService) { }
  GeneratorList:Api.SalaryGeneratorModel[]

  ngOnInit(): void {
    this.parameterService.getSalaryGenerators().subscribe(res=>{
      if(res.ok){
        this.GeneratorList=res.data
      }else{
        console.log(res.errors);
      }
    })
  }

}
