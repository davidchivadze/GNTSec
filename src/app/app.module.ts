import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataSynchronizationComponent } from './Components/Main/data-synchronization/data-synchronization.component';
import { UserManagmentComponent } from './Components/Main/user-managment/user-managment.component';
import { DevicesComponent } from './Components/Main/devices/devices.component';
import { EmployeeComponent } from './Components/Main/employee/employee.component';
import {Api, Api as APIService,} from './Services/SwaggerClient'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule,HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddEmployeeComponent } from './Components/Main/employee/add-employee/add-employee.component';
import { EmployeeListComponent } from './Components/Main/employee/employee-list/employee-list.component';
import {TranslateModule,TranslateLoader, TranslateService, MissingTranslationHandler, MissingTranslationHandlerParams} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { NavigationComponent } from './Components/Shared/navigation/navigation.component';
import { AuthLayoutComponent } from './Components/Shared/auth-layout/auth-layout.component';
import { DeviceEmployeeDataComponent } from './Components/Main/Employee/device-employee-data/device-employee-data.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AddDeviceComponent } from './Components/Main/devices/add-device/add-device.component';
import { DeviceListComponent } from './Components/Main/devices/device-list/device-list.component';
import { BranchListComponent } from './Components/Parameters/Branch/branch-list/branch-list.component';
import { AddBranchComponent } from './Components/Parameters/Branch/add-branch/add-branch.component';
import { BranchMainComponent } from './Components/Parameters/Branch/branch-main/branch-main.component';
import { AddDepartmentComponent } from './Components/Parameters/Departments/add-department/add-department.component';
import { DepartmentListComponent } from './Components/Parameters/Departments/department-list/department-list.component';
import { DepartmentMainComponent } from './Components/Parameters/Departments/department-main/department-main.component';
import { EditBranchComponent } from './Components/Parameters/Branch/edit-branch/edit-branch.component';
import { EditDepartmentComponent } from './Components/Parameters/Departments/edit-department/edit-department.component';
import { EmployeePositionsListComponent } from './Components/Parameters/EmployeePositions/employee-positions-list/employee-positions-list.component';
import { AddEmployeePositionComponent } from './Components/Parameters/EmployeePositions/add-employee-position/add-employee-position.component';
import { EditEmployeePositionComponent } from './Components/Parameters/EmployeePositions/edit-employee-position/edit-employee-position.component';
import { EmployeePositonMainComponent } from './Components/Parameters/EmployeePositions/employee-positon-main/employee-positon-main.component';
import { DeviceLogListComponent } from './Components/Main/devices/device-log-list/device-log-list.component';
import { LoginComponent } from './Components/Auth/login/login.component';
import { AuthGuard } from './Guard/Guard/auth.guard';
import { CookieService } from 'ngx-cookie-service';
import { LoginLayoutComponent } from './Components/Shared/login-layout/login-layout.component';
import { AddDeviceLocationInBranchComponent } from './Components/Parameters/DeviceLocationInBranch/add-device-location-in-branch/add-device-location-in-branch.component';
import { MainDeviceLocationInBranchComponent } from './Components/Parameters/DeviceLocationInBranch/main-device-location-in-branch/main-device-location-in-branch.component';
import { EditDeviceLocationInBranchComponent } from './Components/Parameters/DeviceLocationInBranch/edit-device-location-in-branch/edit-device-location-in-branch.component';
import { DeviceLocationInBranchListComponent } from './Components/Parameters/DeviceLocationInBranch/device-location-in-branch-list/device-location-in-branch-list.component';
import { EditEmployeeComponent } from './Components/Main/employee/edit-employee/edit-employee.component';
import { environment } from 'src/environments/environment';
import { EditDeviceComponent } from './Components/Main/devices/edit-device/edit-device.component';
import { KeygenInsertComponent } from './Components/Auth/keygen-insert/keygen-insert.component';
import { EmployeeListFromDeviceComponent } from './Components/Main/employee/employee-list-from-device/employee-list-from-device.component';
import { ExcelService } from './Services/ExcelService';
import { ReportsComponent } from './Components/Main/reports/reports/reports.component';
import { ModReportComponent } from './Components/Main/reports/mod-report/mod-report.component';
import { FullReportComponent } from './Components/Main/reports/full-report/full-report.component';
import { AddGovermentHolidayComponent } from './Components/Parameters/GovermentHolidays/add-goverment-holiday/add-goverment-holiday.component';
import { GovermentHolidaysMainComponent } from './Components/Parameters/GovermentHolidays/goverment-holidays-main/goverment-holidays-main.component';
import { GovermentHolidaysListComponent } from './Components/Parameters/GovermentHolidays/goverment-holidays-list/goverment-holidays-list.component';
import { EditGovermentHolidayComponent } from './Components/Parameters/GovermentHolidays/edit-goverment-holiday/edit-goverment-holiday.component';
import { ScheduleGeneratorsComponent } from './Components/Parameters/ScheduleGenerators/schedule-generators/schedule-generators.component';
import { AddScheduleGeneratorComponent } from './Components/Parameters/ScheduleGenerators/add-schedule-generator/add-schedule-generator.component';
import { ScheduleGeneratorsListComponent } from './Components/Parameters/ScheduleGenerators/schedule-generators-list/schedule-generators-list.component';
import { EditScheduleGeneratorComponent } from './Components/Parameters/ScheduleGenerators/edit-schedule-generator/edit-schedule-generator.component';
import { SalaryGeneratorsComponent } from './Components/Parameters/SalaryGenerator/salary-generators/salary-generators.component';
import { SalaryGeneratorsLstComponent } from './Components/Parameters/SalaryGenerator/salary-generators-lst/salary-generators-lst.component';
import { AddSalaryGeneratorsComponent } from './Components/Parameters/SalaryGenerator/add-salary-generators/add-salary-generators.component';
import { EditSalaryGeneratorsComponent } from './Components/Parameters/SalaryGenerator/edit-salary-generators/edit-salary-generators.component';
import { AddDeviceLogComponent } from './Components/Main/devices/add-device-log/add-device-log.component';
import { FullReportWeekResultsComponent } from './Components/Main/reports/full-report-week-results/full-report-week-results.component';
import { EditDeviceLogComponent } from './Components/Main/devices/edit-device-log/edit-device-log.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import { RouterModule } from '@angular/router';
import {CommonModule, DatePipe} from '@angular/common';
// NgBootstrap
import {NgbDropdownModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
// Perfect Scrollbar
import {CoreModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatTableModule} from "@angular/material/table";
import {MatRadioModule} from "@angular/material/radio";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatNativeDateModule} from "@angular/material/core";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSortModule} from "@angular/material/sort";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDialogModule} from "@angular/material/dialog";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatTabsModule} from "@angular/material/tabs";
import {MatCardModule} from "@angular/material/card";
import {FileImportService} from "./http/administration/import/service/file-import.service";
import {MatFormFieldModule} from "@angular/material/form-field";
import {DxButtonModule, DxDataGridModule, DxDropDownBoxModule, DxListModule, DxTagBoxModule} from "devextreme-angular";
import {LoadingComponent} from "./Components/layout/loading/loading.component";
import {LoadingService} from "./Components/layout/loading/loading.service";
import {SharedModule} from "./module/shared.module";

export function CrateTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http);
}
// export function translateFactory(translate:TranslateService){
//   return async () => {
//     translate.setDefaultLang('en');
// translate.use('en');
// return new Promise(resolve => {
// translate.onLangChange.subscribe(() => {
//     resolve();
// });
// });
// };
// }
export class TranslateHandler implements MissingTranslationHandler {
  private response: String;

  handle(params: MissingTranslationHandlerParams) {
    if (params.interpolateParams) {
      return params.interpolateParams["ka"] || params.key;
    }
    return params.key;
  }
}

const matModules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatMenuModule,
  MatSelectModule,
  MatInputModule,
  MatTableModule,
  MatAutocompleteModule,
  MatRadioModule,
  MatIconModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatDatepickerModule,
  MatCardModule,
  MatPaginatorModule,
  MatSortModule,
  MatCheckboxModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatTabsModule,
  MatTooltipModule,
  MatDialogModule
];

const dxModule = [
  DxButtonModule,
  DxDataGridModule,
  DxListModule,
  DxDropDownBoxModule,
  DxTagBoxModule
];

@NgModule({
  declarations: [
    AppComponent,
    DataSynchronizationComponent,
    UserManagmentComponent,
    DevicesComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    EmployeeListComponent,
    NavigationComponent,
    AuthLayoutComponent,
    DeviceEmployeeDataComponent,
    AddDeviceComponent,
    DeviceListComponent,
    BranchListComponent,
    AddBranchComponent,
    BranchMainComponent,
    AddDepartmentComponent,
    DepartmentListComponent,
    DepartmentMainComponent,
    EditBranchComponent,
    EditDepartmentComponent,
    EmployeePositionsListComponent,
    AddEmployeePositionComponent,
    EditEmployeePositionComponent,
    EmployeePositonMainComponent,
    DeviceLogListComponent,
    LoginLayoutComponent,
    LoginComponent,
    AddDeviceLocationInBranchComponent,
    MainDeviceLocationInBranchComponent,
    EditDeviceLocationInBranchComponent,
    DeviceLocationInBranchListComponent,
    EditEmployeeComponent,
    EditDeviceComponent,
    KeygenInsertComponent,
    EmployeeListFromDeviceComponent,
    ReportsComponent,
    ModReportComponent,
    FullReportComponent,
    AddGovermentHolidayComponent,
    GovermentHolidaysMainComponent,
    GovermentHolidaysListComponent,
    EditGovermentHolidayComponent,
    ScheduleGeneratorsComponent,
    AddScheduleGeneratorComponent,
    ScheduleGeneratorsListComponent,
    EditScheduleGeneratorComponent,
    SalaryGeneratorsComponent,
    SalaryGeneratorsLstComponent,
    AddSalaryGeneratorsComponent,
    EditSalaryGeneratorsComponent,
    AddDeviceLogComponent,
    FullReportWeekResultsComponent,
    EditDeviceLogComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TranslateModule.forRoot(),
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    SharedModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    //matModules,
    dxModule,
    NgbDropdownModule,
    NgbTooltipModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:CrateTranslateLoader,
        deps:[HttpClient]
      },
    })
  ],
  exports: [matModules, LoadingComponent],
  providers: [
    Api.EmployeeService,
    Api.ParametersService,
    Api.RemoteDeviceService,
    ExcelService,
    AuthGuard,
    CookieService,
    FileImportService,
    // {provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true},
    {provide:APIService.API_BASE_URL, useValue:environment.API_URL},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
