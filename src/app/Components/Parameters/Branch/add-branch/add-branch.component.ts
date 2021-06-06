import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Api } from 'src/app/Services/SwaggerClient';

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css']
})
export class AddBranchComponent implements OnInit {

  constructor(public ParametersService:Api.ParametersService,private router:Router) { }
  CountryList:Api.GetCountryListItem[]
  CityList:Api.GetCitiesListItem[]
  AddBranch:Api.AddBranchRequest
  ngOnInit(): void {
    this.AddBranch=new Api.AddBranchRequest;
    this.ParametersService.getCountryList().subscribe(res=>{
      if(res.ok){
        this.CountryList=res.data.countryList
      }else{
        console.log(res.errors);
      }
    })
    

  }
  UpdateCitiesList(){
    this.ParametersService.getCitiesListByCountryID(this.AddBranch.countryID).subscribe(res=>{
      if(res.ok){
        this.CityList=res.data.citiesList
      }else{
        console.log(res.errors);
      }
    })
  }
  SubmitAddBranch(){
    this.ParametersService.addBranch(this.AddBranch).subscribe(res=>{
      if(res.ok){
        this.router.navigate(["/Branch"])
      }else{
        console.log(res);
      }
    })

  }
}

