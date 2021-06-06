import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthGuard} from "../../Guard/Guard/auth.guard";
import {AdministrationComponent} from "./administration.component";

const routes: Routes = [
  {
    path: '',
    component: AdministrationComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'import',
        loadChildren: () => import('../administration/import/import.module').then(m => m.ImportModule),
      },
    ],
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AdministrationComponent
  ],
  exports: [
    AdministrationComponent
  ]
})

export class AdministrationModule {
}
