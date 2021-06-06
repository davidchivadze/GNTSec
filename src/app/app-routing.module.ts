import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { KeygenInsertComponent } from './Components/Auth/keygen-insert/keygen-insert.component';
import { LoginComponent } from './Components/Auth/login/login.component';
import { AddDeviceLogComponent } from './Components/Main/devices/add-device-log/add-device-log.component';
import { AddDeviceComponent } from './Components/Main/devices/add-device/add-device.component';
import { DeviceListComponent } from './Components/Main/devices/device-list/device-list.component';
import { DeviceLogListComponent } from './Components/Main/devices/device-log-list/device-log-list.component';
import { DevicesComponent } from './Components/Main/devices/devices.component';
import { EditDeviceLogComponent } from './Components/Main/devices/edit-device-log/edit-device-log.component';
import { EditDeviceComponent } from './Components/Main/devices/edit-device/edit-device.component';
import { AddEmployeeComponent } from './Components/Main/employee/add-employee/add-employee.component';
import { DeviceEmployeeDataComponent } from './Components/Main/Employee/device-employee-data/device-employee-data.component';
import { EditEmployeeComponent } from './Components/Main/employee/edit-employee/edit-employee.component';
import { EmployeeListFromDeviceComponent } from './Components/Main/employee/employee-list-from-device/employee-list-from-device.component';
import { EmployeeListComponent } from './Components/Main/employee/employee-list/employee-list.component';
import { EmployeeComponent } from './Components/Main/employee/employee.component';
import { FullReportWeekResultsComponent } from './Components/Main/reports/full-report-week-results/full-report-week-results.component';
import { FullReportComponent } from './Components/Main/reports/full-report/full-report.component';
import { ModReportComponent } from './Components/Main/reports/mod-report/mod-report.component';
import { ReportsComponent } from './Components/Main/reports/reports/reports.component';
import { AddBranchComponent } from './Components/Parameters/Branch/add-branch/add-branch.component';
import { BranchListComponent } from './Components/Parameters/Branch/branch-list/branch-list.component';
import { BranchMainComponent } from './Components/Parameters/Branch/branch-main/branch-main.component';
import { EditBranchComponent } from './Components/Parameters/Branch/edit-branch/edit-branch.component';
import { AddDepartmentComponent } from './Components/Parameters/Departments/add-department/add-department.component';
import { DepartmentListComponent } from './Components/Parameters/Departments/department-list/department-list.component';
import { DepartmentMainComponent } from './Components/Parameters/Departments/department-main/department-main.component';
import { EditDepartmentComponent } from './Components/Parameters/Departments/edit-department/edit-department.component';
import { AddDeviceLocationInBranchComponent } from './Components/Parameters/DeviceLocationInBranch/add-device-location-in-branch/add-device-location-in-branch.component';
import { DeviceLocationInBranchListComponent } from './Components/Parameters/DeviceLocationInBranch/device-location-in-branch-list/device-location-in-branch-list.component';
import { EditDeviceLocationInBranchComponent } from './Components/Parameters/DeviceLocationInBranch/edit-device-location-in-branch/edit-device-location-in-branch.component';
import { MainDeviceLocationInBranchComponent } from './Components/Parameters/DeviceLocationInBranch/main-device-location-in-branch/main-device-location-in-branch.component';
import { AddEmployeePositionComponent } from './Components/Parameters/EmployeePositions/add-employee-position/add-employee-position.component';
import { EditEmployeePositionComponent } from './Components/Parameters/EmployeePositions/edit-employee-position/edit-employee-position.component';
import { EmployeePositionsListComponent } from './Components/Parameters/EmployeePositions/employee-positions-list/employee-positions-list.component';
import { EmployeePositonMainComponent } from './Components/Parameters/EmployeePositions/employee-positon-main/employee-positon-main.component';
import { AddGovermentHolidayComponent } from './Components/Parameters/GovermentHolidays/add-goverment-holiday/add-goverment-holiday.component';
import { EditGovermentHolidayComponent } from './Components/Parameters/GovermentHolidays/edit-goverment-holiday/edit-goverment-holiday.component';
import { GovermentHolidaysListComponent } from './Components/Parameters/GovermentHolidays/goverment-holidays-list/goverment-holidays-list.component';
import { GovermentHolidaysMainComponent } from './Components/Parameters/GovermentHolidays/goverment-holidays-main/goverment-holidays-main.component';
import { AddSalaryGeneratorsComponent } from './Components/Parameters/SalaryGenerator/add-salary-generators/add-salary-generators.component';
import { EditSalaryGeneratorsComponent } from './Components/Parameters/SalaryGenerator/edit-salary-generators/edit-salary-generators.component';
import { SalaryGeneratorsLstComponent } from './Components/Parameters/SalaryGenerator/salary-generators-lst/salary-generators-lst.component';
import { SalaryGeneratorsComponent } from './Components/Parameters/SalaryGenerator/salary-generators/salary-generators.component';
import { AddScheduleGeneratorComponent } from './Components/Parameters/ScheduleGenerators/add-schedule-generator/add-schedule-generator.component';
import { EditScheduleGeneratorComponent } from './Components/Parameters/ScheduleGenerators/edit-schedule-generator/edit-schedule-generator.component';
import { ScheduleGeneratorsListComponent } from './Components/Parameters/ScheduleGenerators/schedule-generators-list/schedule-generators-list.component';
import { ScheduleGeneratorsComponent } from './Components/Parameters/ScheduleGenerators/schedule-generators/schedule-generators.component';
import { AuthLayoutComponent } from './Components/Shared/auth-layout/auth-layout.component';
import { LoginLayoutComponent } from './Components/Shared/login-layout/login-layout.component';
import { AuthGuard } from './Guard/Guard/auth.guard';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path:"*",component:AuthLayoutComponent},
  {path:"",component:AuthLayoutComponent,children:[
  {path:"Device",component:DevicesComponent,children:[
    {path:"",component:DeviceListComponent},
    {path:"DeviceList",component:DeviceListComponent},
    {path:"AddDevice",component:AddDeviceComponent},
    {path:"AddDeviceLog",component:AddDeviceLogComponent},
    {path:"DeviceLogList",component:DeviceEmployeeDataComponent},
    // {path:"EmployeeListDevice",component:},
    {path:"EditDevice/:deviceID",component:EditDeviceComponent},
    {path:"EditDeviceLog/:deviceLogID",component:EditDeviceLogComponent}
  ],
  },
  {path:"Branch",component:BranchMainComponent,children:[
    {path:"",component:BranchListComponent},
    {path:"BranchList",component:BranchListComponent},
    {path:"AddBranch",component:AddBranchComponent},
    {path:"EditBranch/:branchID",component:EditBranchComponent}
  ],
},
{path:"DeviceLocationInBranch",component:MainDeviceLocationInBranchComponent,children:[
  {path:"",component:DeviceLocationInBranchListComponent},
  {path:"DeviceLocationInBranchList",component:DeviceLocationInBranchListComponent},
  {path:"AddDeviceLocationInBranch",component:AddDeviceLocationInBranchComponent},
  {path:"EditDeviceLocationInBranch/:deviceLocationInBranchID",component:EditDeviceLocationInBranchComponent}
],
},
  {path:"Department",component:DepartmentMainComponent,children:[
    {path:"",component:DepartmentListComponent},
    {path:"DepartmentList",component:DepartmentListComponent},
    {path:"AddDepartment",component:AddDepartmentComponent},
    {path:"EditDepartment/:departmentID",component:EditDepartmentComponent}
  ],
 },
 {path:"GovermentHolidays",component:GovermentHolidaysMainComponent,children:[
  {path:"",component:GovermentHolidaysListComponent},
  {path:"GovermentHolidaysList",component:GovermentHolidaysListComponent},
  {path:"AddGovermentHoliday",component:AddGovermentHolidayComponent},
  {path:"EditGovermentHoliday/:editGovermentHolidayID",component:EditGovermentHolidayComponent}
],
},
  {path:"EmployeePositions",component:EmployeePositonMainComponent,children:[
    {path:"",component:EmployeePositionsListComponent},
    {path:"EmployeePositionsList",component:EmployeePositionsListComponent},
    {path:"AddEmployeePosition",component:AddEmployeePositionComponent},
    {path:"EditEmployeePosition/:employeePositionID",component:EditEmployeePositionComponent}
  ],
 },  {path:"ScheduleGenerators",component:ScheduleGeneratorsComponent,children:[
  {path:"",component:ScheduleGeneratorsListComponent},
  {path:"ScheduleGeneratorsList",component:ScheduleGeneratorsListComponent},
  {path:"AddScheduleGenerator",component:AddScheduleGeneratorComponent},
  {path:"EditScheduleGenerator/:generatorID",component:EditScheduleGeneratorComponent}
],
}, {path:"SalaryGenerators",component:SalaryGeneratorsComponent,children:[
  {path:"",component:SalaryGeneratorsLstComponent},
  {path:"SalaryGeneratorsList",component:SalaryGeneratorsLstComponent},
  {path:"AddSalaryGenerator",component:AddSalaryGeneratorsComponent},
  {path:"EditSalaryGenerator/:generatorID",component:EditSalaryGeneratorsComponent}
],
},
  {path:"Employee",component:EmployeeComponent,children:[
    {path:"",component:EmployeeListComponent},
    {path:"EmployeeListFromDevice",component:EmployeeListFromDeviceComponent},
    {path:"AddEmployee",component:AddEmployeeComponent},
    {path:"AddEmployee/:deviceUserID",component:AddEmployeeComponent},


    {path:"EmployeeList",component:EmployeeListComponent},
    {path:"EditEmployee/:editEmployeeID",component:EditEmployeeComponent}
  ]},
  {path:"Reports",component:ReportsComponent,children:[
    {path:"",component:ModReportComponent},
    {path:"ModReport",component:ModReportComponent},
    {path:"FullReport",component:FullReportComponent},
    {path:"FullReportWeekly",component:FullReportWeekResultsComponent}
  ]},
      {
        path: 'admin',
        loadChildren: () => import('./module/administration/administration.module').then(m => m.AdministrationModule),
      },
  ],  canActivate:[AuthGuard]
},
  {path:"Auth",component:LoginLayoutComponent,children:[
    {path:"Login",component:LoginComponent},

  ]},
  {path:"InsertKeygen",component:KeygenInsertComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
