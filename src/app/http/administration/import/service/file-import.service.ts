import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FileImportRequestModel} from "../../../../model/import/file-import.model";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable()
export class FileImportService {

  constructor(private http: HttpClient){
             // private endPointService: EndPointService) {
  }

  public importFile(request: FileImportRequestModel): Observable<boolean> {
    const formData = new FormData();
    formData.append('file', request.file);
    return this.http.post<boolean>(`hangfire/importfile`, formData)
      .pipe(map(response => {
        return response;
      }));
  }
}
