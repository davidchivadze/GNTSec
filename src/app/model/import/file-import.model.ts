import {ImportTypeEnum} from "../../shared/enums/import/import-type.enum";

export interface FileImportRequestModel  {
  importType: ImportTypeEnum
  file: File;
}

export const importTypeInit = [
  {id: 1, value: "თანამშრომელი"},
  {id: 2, value: "გრაფიკი"}];
