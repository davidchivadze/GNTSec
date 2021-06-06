import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/Services/SwaggerClient';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.css']
})

export class BranchListComponent implements OnInit {
BranchList:Api.GetBranchListItem[]
  constructor(public ParameterService:Api.ParametersService) { }

  ngOnInit(): void {
    this.ParameterService.getBranchList().subscribe(res=>{
      if(res.ok){
        this.BranchList=res.data.branchList
      }else{
        console.log(res.errors);
      }
    });
  }
  DeleteBranch(branchID:number){
    this.ParameterService.deleteDevice(branchID).subscribe(res=>{
      if(res.ok){
       this.BranchList.splice(this.BranchList.findIndex(e=>e.iD==branchID),1);
      }else{
        console.log(res.errors);
      }
    })
  }

}
