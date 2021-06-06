import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Api } from 'src/app/Services/SwaggerClient';

@Component({
  selector: 'app-edit-branch',
  templateUrl: './edit-branch.component.html',
  styleUrls: ['./edit-branch.component.css']
})
export class EditBranchComponent implements OnInit {

  constructor(public ParametersService:Api.ParametersService,private router:Router,private route: ActivatedRoute) { }
  CountryList:Api.GetCountryListItem[]
  CityList:Api.GetCitiesListItem[]
  EditBranch:Api.EditBranchRequest
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('branchID'));
    console.log(productIdFromRoute);
    this.EditBranch=new Api.EditBranchRequest;

    this.ParametersService.getBranchForEdit(productIdFromRoute).subscribe(res=>{
      if(res.ok){
        this.EditBranch.address=res.data.address,
        this.EditBranch.branchName=res.data.description,
        this.EditBranch.cityID=res.data.cityID,
        this.EditBranch.countryID=res.data.countryID,
        this.EditBranch.iD=res.data.iD
        this.ParametersService.getCountryList().subscribe(res=>{
          if(res.ok){
            this.CountryList=res.data.countryList
            this.ParametersService.getCitiesListByCountryID(this.EditBranch.countryID).subscribe(res=>{
              if(res.ok){
                this.CityList=res.data.citiesList
              }else{
                console.log(res.errors);
              }
            })
          }else{
            console.log(res.errors);
          }
        })
      }else{
        this.router.navigate(["/Branch"]);
        console.log(res.errors);
        
      }
    })

    

  }
  UpdateCitiesList(){
    console.log(this.EditBranch.countryID);
    this.ParametersService.getCitiesListByCountryID(this.EditBranch.countryID).subscribe(res=>{
      if(res.ok){
        this.CityList=res.data.citiesList
        console.log(res.data.citiesList)
      }else{
        this.CityList=null;
        console.log(res.errors);
      }
    })
  }
  SubmitEditBranch(){
    this.ParametersService.editBranch(this.EditBranch).subscribe(res=>{
      if(res.ok){
        this.router.navigate(["/Branch"])
      }else{
        console.log(res);
      }
    })

}
}
