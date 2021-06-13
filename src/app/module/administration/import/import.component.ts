import {Component, ElementRef, ViewChild} from "@angular/core";
import {FileImportRequestModel, importTypeInit} from "../../../model/import/file-import.model";
import {FileImportService} from "../../../http/administration/import/service/file-import.service";
import {custom} from "devextreme/ui/dialog";
import {LoadingService} from "../../../Components/layout/loading/loading.service";
import {catchError, map} from "rxjs/operators";

@Component({
  selector: 'app-import-component',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss']
})
export class ImportComponent {
  @ViewChild('fileInputElement') fileInputElement: ElementRef;
  importTypes = importTypeInit
  selectedImportType: number;

  public hostName: string = 'import';

  constructor(private fileImportService: FileImportService,
              public loadingService: LoadingService) {
    this.loadingService.hideLoader(this.hostName);
  }

  openFileDialog(_: MouseEvent) {
    if (!this.selectedImportType) {
      this.dialogAlert('აირჩიეთ იმპორტის ტიპი', false,true)
      return;
    }
    this.fileInputElement.nativeElement.click()
  }

  handle(e) {
    this.loadingService.showLoader(this.hostName);
    if (e.target.files.length === 0)
      return;

    const file = <File>e.target.files[0];
    if (file) {
      this.fileImportService.importFile(<FileImportRequestModel>{
        importType : this.selectedImportType,
        file
      }).pipe(
          map((result) => {
            if(result) {
              this.loadingService.hideLoader(this.hostName);
              this.dialogAlert('მიმდინარეობს მონაცემების სინქრონიზაცია', false);
            }
          }),
          catchError(error => {
              this.loadingService.hideLoader(this.hostName);
            this.dialogAlert('მიმდინარეობს მონაცემების სინქრონიზაცია', false);
            throw error.message;
          }),
        ).subscribe();
    }
  }

  dialogAlert(message: string, showTitle: boolean, includeButtons: boolean = false){
    if(includeButtons){
      custom({
        message: message,
        showTitle: showTitle,
        buttons: [
          {text: 'კარგი', onClick: _ => true},
        ]
      }).show()
      return;
    }else{
      custom({
        message: message,
        showTitle: showTitle,
      }).show()
      return;
    }
  }
}
