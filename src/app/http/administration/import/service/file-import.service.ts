import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FileImportRequestModel} from "../../../../model/import/file-import.model";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable()
export class FileImportService {

  constructor(private http: HttpClient){
             // private endPointService: EndPointService) {
  }

  public importFile(request: FileImportRequestModel): Observable<boolean> {
    let formData = new FormData();
    formData.append('file', request.file);
    formData.append('importType', request.importType.toString());

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data'
      })
    };

    return this.http.post<boolean>(`http://localhost:5000/ImportJob/FileImport`, formData)
      .pipe(map(response => {
        return response;
      }));
  }
}
