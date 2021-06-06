import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Api } from 'src/app/Services/SwaggerClient';

@Component({
  selector: 'app-add-salary-generators',
  templateUrl: './add-salary-generators.component.html',
  styleUrls: ['./add-salary-generators.component.css']
})
export class AddSalaryGeneratorsComponent implements OnInit {
  FineTypeList:Api.GetFineTypeListItem[]
  ForgivenessTypeList:Api.GetForgivenessTypeListItem[]
  SalaryTypeList:Api.GetSalaryTypeListItem[]
  SalaryGenerator:Api.SalaryGeneratorModel
  constructor(public ParameterService:Api.ParametersService,private router:Router) { }

  ngOnInit(): void {
    this.SalaryGenerator=new Api.SalaryGeneratorModel();
    this.ParameterService.getSalaryTypesList().subscribe(res=>{
      if(res.ok){
        this.SalaryTypeList=res.data.salaryTypes
       }else{
         console.log(res);
       }
    })
    this.ParameterService.getForgivenessTypesLIst().subscribe(res=>{
      if(res.ok){
        this.ForgivenessTypeList=res.data.forgivenessTypes
      }else{
       console.log(res);
     }
    })
    
    this.ParameterService.getFineTypesLIst().subscribe(res=>{
     if(res.ok){
       this.FineTypeList=res.data.fineTypes
     }else{
       console.log(res);
     }
   })
  }
  SubmitAdd(){

    this.ParameterService.addSalaryGenerator(this.SalaryGenerator).subscribe(res=>{
      if(res.ok){
        this.router.navigate(["/SalaryGenerators"]);
      }else{
        console.log(res.errors);
      }

    })
  }

}
