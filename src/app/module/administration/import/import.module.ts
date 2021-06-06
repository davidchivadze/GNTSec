import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ImportComponent} from "./import.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {FileImportService} from "../../../http/administration/import/service/file-import.service";
import {MatButtonModule} from "@angular/material/button";
import {TranslateModule} from "@ngx-translate/core";
import {MatInputModule} from "@angular/material/input";
import {MatRippleModule} from "@angular/material/core";
import {AuthGuard} from "../../../Guard/Guard/auth.guard";
import {SharedModule} from "../../shared.module";

const routes: Routes = [
  {
    path: '',
    component: ImportComponent,
    canActivate: [AuthGuard]
  }
];

const matModules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatSelectModule
]

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild(),
    matModules,
    SharedModule
  ],
  declarations: [
    ImportComponent,
  ],
  exports: [matModules],
  providers: [
    FileImportService
  ],
})

export class ImportModule {
}
