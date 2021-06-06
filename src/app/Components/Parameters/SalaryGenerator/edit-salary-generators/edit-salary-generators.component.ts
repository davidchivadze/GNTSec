import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Api } from 'src/app/Services/SwaggerClient';

@Component({
  selector: 'app-edit-salary-generators',
  templateUrl: './edit-salary-generators.component.html',
  styleUrls: ['./edit-salary-generators.component.css']
})
export class EditSalaryGeneratorsComponent implements OnInit {
  FineTypeList:Api.GetFineTypeListItem[]
  ForgivenessTypeList:Api.GetForgivenessTypeListItem[]
  SalaryTypeList:Api.GetSalaryTypeListItem[]
  SalaryGenerator:Api.SalaryGeneratorModel
  constructor(public ParameterService:Api.ParametersService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('generatorID'));
    this.ParameterService.getSalaryGenerators().subscribe(res=>{
      if(res.ok){
        this.SalaryGenerator=res.data.find(x=>x.iD==productIdFromRoute);
      }
    });
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
  SubmitEdit(){
    this.ParameterService.editSalaryGenerators(this.SalaryGenerator).subscribe(res=>{
      if(res.ok&&res.data){
        this.router.navigate(["/SalaryGenerators"]);
      }
    })
  }

}
