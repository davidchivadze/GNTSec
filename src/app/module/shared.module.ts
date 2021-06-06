import {NgModule} from "@angular/core";
import {LoadingComponent} from "../Components/layout/loading/loading.component";
import {LoadingService} from "../Components/layout/loading/loading.service";
import {TranslateModule} from "@ngx-translate/core";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  imports: [
    TranslateModule.forChild(),
    MatProgressSpinnerModule,
  ],
  declarations: [
    LoadingComponent
  ],
  exports: [
    LoadingComponent
  ],
  providers: [
    LoadingService
  ]
})

export class SharedModule {
}
