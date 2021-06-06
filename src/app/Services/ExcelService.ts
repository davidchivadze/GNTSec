import {Injectable} from '@angular/core';
import {Workbook} from 'exceljs';
import * as fs from 'file-saver';
import { HttpClient } from '@angular/common/http';
import { Api } from './SwaggerClient';
import { empty } from 'rxjs';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION='.xlsx';
@Injectable({
    providedIn: 'root'
  })

  export class ExcelService{
       that=this;
      constructor(public httpClient:HttpClient,private EmployeeService:Api.EmployeeService){}
      public exportAsExcelFile(          reportHeading:string,
        reportSubHeading:string,
        headersArray:any[],
        json:any[],
        footerData:any,
        excelFileName:string,
        sheetName:string,
        EmployeeData:Api.GetEmployeeModReportResponse[] ){
            var templateStartRow=16;
            const workBook=new Workbook();
            this.httpClient.get('/assets/MODTemplate.xlsx',{responseType:'arraybuffer'}).subscribe(res=>{
                workBook.xlsx.load(res).then(function(){
                    const worksheet=workBook.getWorksheet('ReportWorkSheet');
                        console.log(EmployeeData.length);
                        var empService=new ExcelService(undefined,undefined);
                        for(var i=0;i<EmployeeData.length;i++){
                            worksheet.getCell('A'+templateStartRow).value=i;
                            worksheet.getCell('B'+templateStartRow).value=EmployeeData[i].employeeFullname +"("+EmployeeData[i].position+")";                          
                            worksheet.getCell('C'+templateStartRow).value=EmployeeData[i].personalNumber;
                            for(var b=0;b<15;b++){
                                var symbol=empService.numToAlpha(b+3);
                                console.log(symbol)
                                worksheet.getCell(symbol+templateStartRow.toString()).value=EmployeeData[i].workingLog[b]?.workedTimeHoures;
                            }
                            worksheet.getCell(empService.numToAlpha(15+3)+templateStartRow).value=EmployeeData[i].sumFirstHalf;
                            for(var b=15;b<=31;b++){
                                var symbol=empService.numToAlpha(b+4);
                                console.log(symbol)
                                try{
                                worksheet.getCell(symbol+templateStartRow.toString()).value=EmployeeData[i].workingLog[b]?.workedTimeHoures;
                            }catch{}
                            }
                            worksheet.getCell(empService.numToAlpha(36)+templateStartRow).value=EmployeeData[i].sumSecondHalf;
                            worksheet.getCell(empService.numToAlpha(37)+templateStartRow).value=EmployeeData[i].sumDaysInMonth;   
                            worksheet.getCell(empService.numToAlpha(38)+templateStartRow).value=EmployeeData[i].sumHouresInMonth;                            
                            worksheet.getCell(empService.numToAlpha(39)+templateStartRow).value=EmployeeData[i].overTime;
                            worksheet.getCell(empService.numToAlpha(40)+templateStartRow).value=EmployeeData[i].nightHoures;
                            worksheet.getCell(empService.numToAlpha(41)+templateStartRow).value=EmployeeData[i].workedHouresInGovermentHolidays;
                            worksheet.getCell(empService.numToAlpha(42)+templateStartRow).value="----";
                            worksheet.getCell(empService.numToAlpha(43)+templateStartRow).value="----";
                            worksheet.getCell(empService.numToAlpha(44)+templateStartRow).value=EmployeeData[i].sumHolidayes;                           
                            worksheet.getCell(empService.numToAlpha(45)+templateStartRow).value=EmployeeData[i].sumHolidaysWithoutCompensate;
                            templateStartRow=templateStartRow+1;
                        }
                        // worksheet.getCell('A16').value=EmployeeData;
                        workBook.xlsx.writeBuffer().then((data:ArrayBuffer)=>{
                            const blob=new Blob([data],{type:EXCEL_TYPE});
                            fs.saveAs(blob,excelFileName+EXCEL_EXTENSION);
                        });
                  
                })
            })
        }
        public exportAsExcelFull(
            reportHeading:string,
            reportSubHeading:string,
            headersArray:any[],
            json:any[],
            footerData:any,
            excelFileName:string,
            sheetName:string,
            EmployeeData:Api.GetEmployeeFullReportItem[] 
        ){
            // console.log(EmployeeData)
            const header="სამუშაო დროის აღრიცხვის ფორმა";
            const data=json;
            const workBook=new Workbook();
            workBook.creator="Angular";
            workBook.lastModifiedBy="Angular";
            workBook.created=new Date();
            workBook.modified=new Date();
            const worksheet=workBook.addWorksheet("ReportWorkSheet");
            let columnNumber=1;
            for(var i=0;i<EmployeeData.length;i++){
                worksheet.spliceRows(columnNumber,0,["თანამშრომელი","დეპარტამენტი","სერვის ცენტრი","განყოფილება","სულ დაგვიანება",
                "სულ ადრე გასვლა","სულ ადრე მოსვლა","სულ გვიან გასვლა","სულ ნამუშევარი საათები","ხელფასი",
                "გვიან მოსვლების რაოდენობა","ჯარიმა","სულ	ადრე გასვლების რაოდენობა","სულ იმუშავა გრაფიკში","სულ იმუშავა გრაფიკს გარეთ","დღის გაცდენა"]);
                worksheet.getRow(columnNumber).fill={pattern:"lightGrid",bgColor:{argb:"5987D6"},fgColor:{argb:"5987D6"},type:"pattern"};
                worksheet.getRow(columnNumber).border={bottom:{style:'thin',color:{argb:'000000'}},
                  top:{style:'thin',color:{argb:'000000'}},
                  left:{style:'thin',color:{argb:'000000'}},
                  right:{style:'thin',color:{argb:'000000'}}};
                columnNumber=columnNumber+1;
                worksheet.spliceRows(columnNumber,0,[
                    EmployeeData[i].fullName,
                    EmployeeData[i].department,
                    EmployeeData[i].serviceCenter,
                    EmployeeData[i].department,
                    this.convertMinsToHrsMins(EmployeeData[i].sumLateMinutes),
                    this.convertMinsToHrsMins(EmployeeData[i].sumEarlyCheckOut),
                    this.convertMinsToHrsMins(EmployeeData[i].sumEarlyMinutes),
                    this.convertMinsToHrsMins(EmployeeData[i].sumLateCheckOut),
                    this.convertMinsToHrsMins(EmployeeData[i].sumWorkedHoures),
                    EmployeeData[i].salaryAfterFine,
                    EmployeeData[i].sumLateCheckInCount,
                    EmployeeData[i].fineAmount,
                    EmployeeData[i].sumEarlyCheckOutCount,
                    this.convertMinsToHrsMins(EmployeeData[i].sumWorkedInSchedule),
                    this.convertMinsToHrsMins(EmployeeData[i].sumWorkedOutOfSchedule),
                    EmployeeData[i].sumMissedDays
                ]);
                //worksheet.getRow(columnNumber).outlineLevel=EmployeeData.length;
                // set column outline level
// worksheet.properties.outlineLevelCol = 1;

// // set row outline level
// worksheet.properties.outlineLevelRow = 1;
// worksheet.properties.outlineLevelCol = 1;

// worksheet.getColumn(3).outlineLevel = 1;

                columnNumber=columnNumber+1;
                columnNumber=columnNumber+1;
                columnNumber=columnNumber+1;
                worksheet.getRow(columnNumber).outlineLevel=1;
                worksheet.properties.outlineLevelRow=1;
                worksheet.spliceRows(columnNumber,5,[
                    "სამუშაოს დასაწყისი","სამუშაოს დასასრული","მოსვლის დრო","ავტორიზაციის დრო",	
                    "წასვლის დრო","დაგვიანება",
                    "ადრე მოსვლა","ადრე გასვლა","გვიან გასვლა","ნამუშევარი საათები","სტატუსი","ჯარიმის წუთები",
                    "იმუშავა გრაფიკში","იმუშავა გრაფიკს გარეთ","გაცდენილი საათები"

                ]);
                worksheet.getRow(columnNumber).fill={pattern:"lightGrid",bgColor:{argb:"5987D6"},fgColor:{argb:"5987D6"},type:"pattern"};
                worksheet.getRow(columnNumber).border={bottom:{style:'thin',color:{argb:'000000'}},
                  top:{style:'thin',color:{argb:'000000'}},
                  left:{style:'thin',color:{argb:'000000'}},
                  right:{style:'thin',color:{argb:'000000'}}};
                columnNumber=columnNumber+1;
                console.log(EmployeeData[i].employeeWorkingLogs);
                for(var b=0;b<EmployeeData[i].employeeWorkingLogs.length;b++){
                    worksheet.getRow(columnNumber).outlineLevel=1;
                    worksheet.spliceRows(columnNumber,5,[
                        EmployeeData[i].employeeWorkingLogs[b].scheduleFromTime?.toLocaleString(),
                        EmployeeData[i].employeeWorkingLogs[b].scheduleToTime?.toLocaleString(),
                        EmployeeData[i].employeeWorkingLogs[b].checkInTime?.toLocaleString(),
                        EmployeeData[i].employeeWorkingLogs[b].checkInTime?.toLocaleString(),
                        EmployeeData[i].employeeWorkingLogs[b].checkOutTime?.toLocaleString(),
                        this.convertMinsToHrsMins(EmployeeData[i].employeeWorkingLogs[b].lateCheckInMinutes),
                        this.convertMinsToHrsMins(EmployeeData[i].employeeWorkingLogs[b].earlyCheckInMinutes),
                        this.convertMinsToHrsMins(EmployeeData[i].employeeWorkingLogs[b].earlyCheckOutMinutes),
                        this.convertMinsToHrsMins(EmployeeData[i].employeeWorkingLogs[b].lateCheckOutMinutes),
                        this.convertMinsToHrsMins(EmployeeData[i].employeeWorkingLogs[b].workedMinutess),
                        EmployeeData[i].employeeWorkingLogs[b].workStatus,
                        EmployeeData[i].employeeWorkingLogs[b].fineMinutes,
                        
                        this.convertMinsToHrsMins(EmployeeData[i].employeeWorkingLogs[b].workedInSchedule),
                        this.convertMinsToHrsMins(EmployeeData[i].employeeWorkingLogs[b].workedOutSchedule),
                        this.convertMinsToHrsMins(EmployeeData[i].employeeWorkingLogs[b].missedMinutes)
                    ]);
               
                    if( worksheet.getRow(columnNumber).getCell('H').value!='00:00'&& worksheet.getRow(columnNumber).getCell('H').value!=''){
                        worksheet.getRow(columnNumber).getCell('H').fill={pattern:"lightGrid",bgColor:{argb:"800000"},fgColor:{argb:"800000"},type:"pattern"};
                    }
                    if( worksheet.getRow(columnNumber).getCell('O').value!='00:00'&& worksheet.getRow(columnNumber).getCell('O').value!=''){
                        worksheet.getRow(columnNumber).getCell('O').fill={pattern:"lightGrid",bgColor:{argb:"800000"},fgColor:{argb:"800000"},type:"pattern"};
                    }
                    if( worksheet.getRow(columnNumber).getCell('G').value!='00:00'&& worksheet.getRow(columnNumber).getCell('G').value!=''){
                        worksheet.getRow(columnNumber).getCell('G').fill={pattern:"lightGrid",bgColor:{argb:"008000"},fgColor:{argb:"008000"},type:"pattern"};
                    }
                    if( worksheet.getRow(columnNumber).getCell('I').value!='00:00'&& worksheet.getRow(columnNumber).getCell('I').value!=''){
                        worksheet.getRow(columnNumber).getCell('I').fill={pattern:"lightGrid",bgColor:{argb:"008000"},fgColor:{argb:"008000"},type:"pattern"};
                    }
                    if( worksheet.getRow(columnNumber).getCell('N').value!='00:00'&& worksheet.getRow(columnNumber).getCell('N').value!=''){
                        worksheet.getRow(columnNumber).getCell('N').fill={pattern:"lightGrid",bgColor:{argb:"008000"},fgColor:{argb:"008000"},type:"pattern"};
                    }
                    if( worksheet.getRow(columnNumber).getCell('K').value=='გააცდინა'){
                        worksheet.getRow(columnNumber).fill={pattern:"lightGrid",bgColor:{argb:"FF4500"},fgColor:{argb:"FF4500"},type:"pattern"};
                    }
                    columnNumber=columnNumber+1;
                }
                columnNumber=columnNumber+2;
            }
            worksheet.columns.forEach(function (column, i) {
                // var maxLength =6;
                // // column["eachCell"]({ includeEmpty: true }, function (cell) {
                // //     var columnLength = cell.value ? cell.value.toString().length : 10;
                // //     if (columnLength > maxLength ) {
                // //         maxLength = columnLength;
                // //     }
                // // });
                // column.width = maxLength < 10 ? 10 : maxLength;
                column.width=12;
                column.alignment={vertical: 'middle', horizontal: 'center', wrapText: true}
            });
  
            workBook.xlsx.writeBuffer().then((data:ArrayBuffer)=>{
                const blob=new Blob([data],{type:EXCEL_TYPE});
                fs.saveAs(blob,excelFileName+EXCEL_EXTENSION);
            })
        }
        public exportAsExcelFullWeek(
            reportHeading:string,
            reportSubHeading:string,
            headersArray:any[],
            json:any[],
            footerData:any,
            excelFileName:string,
            sheetName:string,
            EmployeeData:Api.GetEmployeeFullReportItem[] 
        ){
            // console.log(EmployeeData)
            const header="სამუშაო დროის აღრიცხვის ფორმა";
            const data=json;
            const workBook=new Workbook();
            workBook.creator="Angular";
            workBook.lastModifiedBy="Angular";
            workBook.created=new Date();
            workBook.modified=new Date();
            const worksheet=workBook.addWorksheet("ReportWorkSheet");
            let columnNumber=1;
            for(var i=0;i<EmployeeData.length;i++){
                worksheet.spliceRows(columnNumber,0,["თანამშრომელი","დეპარტამენტი","სერვის ცენტრი","განყოფილება","სულ დაგვიანება",
                "სულ ადრე გასვლა","სულ ადრე მოსვლა","სულ გვიან გასვლა","სულ ნამუშევარი საათები","ხელფასი",
                "გვიან მოსვლების რაოდენობა","ჯარიმა","სულ	ადრე გასვლების რაოდენობა","სულ იმუშავა გრაფიკში","სულ იმუშავა გრაფიკს გარეთ","დღის გაცდენა"]);
                worksheet.getRow(columnNumber).fill={pattern:"lightGrid",bgColor:{argb:"5987D6"},fgColor:{argb:"5987D6"},type:"pattern"};
                worksheet.getRow(columnNumber).border={bottom:{style:'thin',color:{argb:'000000'}},
                  top:{style:'thin',color:{argb:'000000'}},
                  left:{style:'thin',color:{argb:'000000'}},
                  right:{style:'thin',color:{argb:'000000'}}};
                columnNumber=columnNumber+1;
                worksheet.spliceRows(columnNumber,0,[
                    EmployeeData[i].fullName,
                    EmployeeData[i].department,
                    EmployeeData[i].serviceCenter,
                    EmployeeData[i].department,
                    this.convertMinsToHrsMins(EmployeeData[i].sumLateMinutes),
                    this.convertMinsToHrsMins(EmployeeData[i].sumEarlyCheckOut),
                    this.convertMinsToHrsMins(EmployeeData[i].sumEarlyMinutes),
                    this.convertMinsToHrsMins(EmployeeData[i].sumLateCheckOut),
                    this.convertMinsToHrsMins(EmployeeData[i].sumWorkedHoures),
                    EmployeeData[i].salaryAfterFine,
                    EmployeeData[i].sumLateCheckInCount,
                    EmployeeData[i].fineAmount,
                    EmployeeData[i].sumEarlyCheckOutCount,
                    this.convertMinsToHrsMins(EmployeeData[i].sumWorkedInSchedule),
                    this.convertMinsToHrsMins(EmployeeData[i].sumWorkedOutOfSchedule),
                    EmployeeData[i].sumMissedDays
                ]);
                //worksheet.getRow(columnNumber).outlineLevel=EmployeeData.length;
                // set column outline level
// worksheet.properties.outlineLevelCol = 1;

// // set row outline level
// worksheet.properties.outlineLevelRow = 1;
// worksheet.properties.outlineLevelCol = 1;

// worksheet.getColumn(3).outlineLevel = 1;


columnNumber=columnNumber+1;
columnNumber=columnNumber+1;
columnNumber=columnNumber+1;

worksheet.getRow(columnNumber).outlineLevel=1;
worksheet.properties.outlineLevelRow=1;
worksheet.spliceRows(columnNumber,5,[
    "კვირის საწყისი თარიღი",
    "კვირის დასრულების თარიღი",
    "კვირაში ნამუშევარი საათები",
    "კვირაში ზეგანაკვეთური ნამუშევარი საათები",
    "კვირაში გაცდენილი საათები"
])
worksheet.getRow(columnNumber).fill={pattern:"lightGrid",bgColor:{argb:"5987D6"},fgColor:{argb:"5987D6"},type:"pattern"};
worksheet.getRow(columnNumber).border={bottom:{style:'thin',color:{argb:'000000'}},
  top:{style:'thin',color:{argb:'000000'}},
  left:{style:'thin',color:{argb:'000000'}},
  right:{style:'thin',color:{argb:'000000'}}};
columnNumber=columnNumber+1;
console.log( EmployeeData[i].employeeWorkingLogWeekHoures);
for(var b=0;b<EmployeeData[i].employeeWorkingLogWeekHoures.length;b++){
    worksheet.getRow(columnNumber).outlineLevel=1;
    worksheet.spliceRows(columnNumber,5,[
        EmployeeData[i].employeeWorkingLogWeekHoures[b].fromDate?.toLocaleString(),
        EmployeeData[i].employeeWorkingLogWeekHoures[b].toDate?.toLocaleString(),
        this.convertMinsToHrsMins(EmployeeData[i].employeeWorkingLogWeekHoures[b].workedMinutesSum),
        this.convertMinsToHrsMins(EmployeeData[i].employeeWorkingLogWeekHoures[b].workedMinutesOvertime),
        this.convertMinsToHrsMins(EmployeeData[i].employeeWorkingLogWeekHoures[b].missedMinutes)
    ]);
    columnNumber=columnNumber+1;
}

                columnNumber=columnNumber+1;
                columnNumber=columnNumber+1;
                columnNumber=columnNumber+1;
                worksheet.getRow(columnNumber).outlineLevel=1;
                worksheet.properties.outlineLevelRow=1;
                worksheet.spliceRows(columnNumber,5,[
                    "სამუშაოს დასაწყისი","სამუშაოს დასასრული","მოსვლის დრო","ავტორიზაციის დრო",	
                    "წასვლის დრო","დაგვიანება",
                    "ადრე მოსვლა","ადრე გასვლა","გვიან გასვლა","ნამუშევარი საათები","სტატუსი","ჯარიმის წუთები",
                    "იმუშავა გრაფიკში","იმუშავა გრაფიკს გარეთ","გაცდენილი საათები"

                ]);
                worksheet.getRow(columnNumber).fill={pattern:"lightGrid",bgColor:{argb:"5987D6"},fgColor:{argb:"5987D6"},type:"pattern"};
                worksheet.getRow(columnNumber).border={bottom:{style:'thin',color:{argb:'000000'}},
                  top:{style:'thin',color:{argb:'000000'}},
                  left:{style:'thin',color:{argb:'000000'}},
                  right:{style:'thin',color:{argb:'000000'}}};
                columnNumber=columnNumber+1;
                console.log(EmployeeData[i].employeeWorkingLogs);
                for(var b=0;b<EmployeeData[i].employeeWorkingLogs.length;b++){
                    worksheet.getRow(columnNumber).outlineLevel=1;
                    worksheet.spliceRows(columnNumber,5,[
                        EmployeeData[i].employeeWorkingLogs[b].scheduleFromTime?.toLocaleString(),
                        EmployeeData[i].employeeWorkingLogs[b].scheduleToTime?.toLocaleString(),
                        EmployeeData[i].employeeWorkingLogs[b].checkInTime?.toLocaleString(),
                        EmployeeData[i].employeeWorkingLogs[b].checkInTime?.toLocaleString(),
                        EmployeeData[i].employeeWorkingLogs[b].checkOutTime?.toLocaleString(),
                        this.convertMinsToHrsMins(EmployeeData[i].employeeWorkingLogs[b].lateCheckInMinutes),
                        this.convertMinsToHrsMins(EmployeeData[i].employeeWorkingLogs[b].earlyCheckInMinutes),
                        this.convertMinsToHrsMins(EmployeeData[i].employeeWorkingLogs[b].earlyCheckOutMinutes),
                        this.convertMinsToHrsMins(EmployeeData[i].employeeWorkingLogs[b].lateCheckOutMinutes),
                        this.convertMinsToHrsMins(EmployeeData[i].employeeWorkingLogs[b].workedMinutess),
                        EmployeeData[i].employeeWorkingLogs[b].workStatus,
                        EmployeeData[i].employeeWorkingLogs[b].fineMinutes,
                        
                        this.convertMinsToHrsMins(EmployeeData[i].employeeWorkingLogs[b].workedInSchedule),
                        this.convertMinsToHrsMins(EmployeeData[i].employeeWorkingLogs[b].workedOutSchedule),
                        this.convertMinsToHrsMins(EmployeeData[i].employeeWorkingLogs[b].missedMinutes)
                    ]);
               
                    if( worksheet.getRow(columnNumber).getCell('H').value!='00:00'&& worksheet.getRow(columnNumber).getCell('H').value!=''){
                        worksheet.getRow(columnNumber).getCell('H').fill={pattern:"lightGrid",bgColor:{argb:"800000"},fgColor:{argb:"800000"},type:"pattern"};
                    }
                    if( worksheet.getRow(columnNumber).getCell('O').value!='00:00'&& worksheet.getRow(columnNumber).getCell('O').value!=''){
                        worksheet.getRow(columnNumber).getCell('O').fill={pattern:"lightGrid",bgColor:{argb:"800000"},fgColor:{argb:"800000"},type:"pattern"};
                    }
                    if( worksheet.getRow(columnNumber).getCell('G').value!='00:00'&& worksheet.getRow(columnNumber).getCell('G').value!=''){
                        worksheet.getRow(columnNumber).getCell('G').fill={pattern:"lightGrid",bgColor:{argb:"008000"},fgColor:{argb:"008000"},type:"pattern"};
                    }
                    if( worksheet.getRow(columnNumber).getCell('I').value!='00:00'&& worksheet.getRow(columnNumber).getCell('I').value!=''){
                        worksheet.getRow(columnNumber).getCell('I').fill={pattern:"lightGrid",bgColor:{argb:"008000"},fgColor:{argb:"008000"},type:"pattern"};
                    }
                    if( worksheet.getRow(columnNumber).getCell('N').value!='00:00'&& worksheet.getRow(columnNumber).getCell('N').value!=''){
                        worksheet.getRow(columnNumber).getCell('N').fill={pattern:"lightGrid",bgColor:{argb:"008000"},fgColor:{argb:"008000"},type:"pattern"};
                    }
                    if( worksheet.getRow(columnNumber).getCell('K').value=='გააცდინა'){
                        worksheet.getRow(columnNumber).fill={pattern:"lightGrid",bgColor:{argb:"FF4500"},fgColor:{argb:"FF4500"},type:"pattern"};
                    }
                    columnNumber=columnNumber+1;
                }
                columnNumber=columnNumber+2;
            }
            worksheet.columns.forEach(function (column, i) {
                // var maxLength =6;
                // // column["eachCell"]({ includeEmpty: true }, function (cell) {
                // //     var columnLength = cell.value ? cell.value.toString().length : 10;
                // //     if (columnLength > maxLength ) {
                // //         maxLength = columnLength;
                // //     }
                // // });
                // column.width = maxLength < 10 ? 10 : maxLength;
                column.width=12;
                column.alignment={vertical: 'middle', horizontal: 'center', wrapText: true}
            });
  
            workBook.xlsx.writeBuffer().then((data:ArrayBuffer)=>{
                const blob=new Blob([data],{type:EXCEL_TYPE});
                fs.saveAs(blob,excelFileName+EXCEL_EXTENSION);
            })
        }
      public exportAsExcelFile1(
          reportHeading:string,
          reportSubHeading:string,
          headersArray:any[],
          json:any[],
          footerData:any,
          excelFileName:string,
          sheetName:string
      ){
          const header="სამუშაო დროის აღრიცხვის ფორმა";
          const data=json;
          const workBook=new Workbook();
          workBook.creator="Angular";
          workBook.lastModifiedBy="Angular";
          workBook.created=new Date();
          workBook.modified=new Date();
          const worksheet=workBook.addWorksheet("ReportWorkSheet");
          /*header*/
          worksheet.addRow([]);
          worksheet.mergeCells('A1:'+this.numToAlpha(header.length-2)+'1')
          worksheet.getCell('A1').value="სამუშაო დროის აღრიცხვის ფორმა"
          worksheet.getCell('A1').alignment={horizontal:'center'}
          worksheet.getCell('A1').font={size:15,bold:true }
          worksheet.getCell('A1').border={bottom:{style:'thin',color:{argb:'000000'}}}
        //   /*ორგანიზაციის სახელი*/
        //   worksheet.addRow([]);
        //   worksheet.mergeCells('A2:'+this.numToAlpha(header.length-2)+'2')
        //   worksheet.getCell('A2').value="ორგანიზაციის დასახელება"
        //   worksheet.getCell('A2').alignment={horizontal:'center'}
        //   worksheet.getCell('A2').font={size:7,bold:true }
        //   worksheet.getCell('A2').border={bottom:{style:'thin',color:{argb:'000000'}}}
        //  console.log(this.numToAlpha(header.length-2));
        //   //სტრუქტურული ერთეული
        //   worksheet.addRow([]);
        //   worksheet.mergeCells('A3:'+this.numToAlpha(header.length-2)+'3')
        //   worksheet.getCell('A3').value="სტრუქტურული ერთეული"
        //   worksheet.getCell('A3').alignment={horizontal:'center'}
        //   worksheet.getCell('A3').font={size:7,bold:true }
        //   worksheet.getCell('A3').border={bottom:{style:'thin',color:{argb:'000000'}}}
        //   worksheet.addRow([]);
        //   worksheet.mergeCells('A5:C6');
        //   //საიდენტიფიკაციო კოდი
        //   worksheet.getCell('A5:C6').value="საიდენტიფიკაციო კოდი";
        //   worksheet.getCell('A5:C6').border={bottom:{style:'thin',color:{argb:'000000'}},
        //   top:{style:'thin',color:{argb:'000000'}},
        //   left:{style:'thin',color:{argb:'000000'}},
        //   right:{style:'thin',color:{argb:'000000'}}};
        //   worksheet.getCell('A5:C6').font={size:9,bold:true};          
        //   worksheet.getCell('A5:C6').alignment={vertical:'middle',horizontal:'center'};        
        //   worksheet.mergeCells('D5:F6');
        //   worksheet.getCell('D5:F6').value="416356455";
        //   worksheet.getCell('D5:F6').border={bottom:{style:'thin',color:{argb:'000000'}},
        //   top:{style:'thin',color:{argb:'000000'}},
        //   left:{style:'thin',color:{argb:'000000'}},
        //   right:{style:'thin',color:{argb:'000000'}}};
        //   worksheet.getCell('D5:F6').font={size:9,bold:true};
        //   worksheet.getCell('D5:F6').alignment={vertical:'middle',horizontal:'center'};

        //     //შედგენის თარიღი
        //     worksheet.mergeCells('S5:T6');
        //     worksheet.getCell('S5:T6').value="შედგენის თარიღი";
        //     worksheet.getCell('S5:T6').font={size:9,bold:true};    
        //     worksheet.getCell('S5:T6').border={bottom:{style:'thin',color:{argb:'000000'}},
        //     top:{style:'thin',color:{argb:'000000'}},
        //     left:{style:'thin',color:{argb:'000000'}},
        //     right:{style:'thin',color:{argb:'000000'}}}; 
        //     worksheet.mergeCells('S7:T8');
        //     worksheet.getCell('S7:T8').value=new Date().toString();
        //     worksheet.getCell('S7:T8').font={size:9,bold:true};    
        //     worksheet.getCell('S7:T8').border={bottom:{style:'thin',color:{argb:'000000'}},
        //     top:{style:'thin',color:{argb:'000000'}},
        //     left:{style:'thin',color:{argb:'000000'}},
        //     right:{style:'thin',color:{argb:'000000'}}};   
        //     //საანგარიშო პერიოდი
        //     worksheet.mergeCells('V5:W6');
        //     worksheet.getCell('V5:W6').value="საანგარიშო პერიოდი";
        //     worksheet.getCell('V5:W6').font={size:9,bold:true};    
        //     worksheet.getCell('V5:W6').border={bottom:{style:'thin',color:{argb:'000000'}},
        //     top:{style:'thin',color:{argb:'000000'}},
        //     left:{style:'thin',color:{argb:'000000'}},
        //     right:{style:'thin',color:{argb:'000000'}}}; 
        //     worksheet.getCell('V7').value="-დან";
        //     worksheet.getCell('V7').font={size:9,bold:true};    
        //     worksheet.getCell('V7').border={bottom:{style:'thin',color:{argb:'000000'}},
        //     top:{style:'thin',color:{argb:'000000'}},
        //     left:{style:'thin',color:{argb:'000000'}},
        //     right:{style:'thin',color:{argb:'000000'}}}; 
        //     worksheet.getCell('W7').value="-მდე";
        //     worksheet.getCell('W7').font={size:9,bold:true};    
        //     worksheet.getCell('W7').border={bottom:{style:'thin',color:{argb:'000000'}},
        //     top:{style:'thin',color:{argb:'000000'}},
        //     left:{style:'thin',color:{argb:'000000'}},
        //     right:{style:'thin',color:{argb:'000000'}}}; 
        //     worksheet.getCell('V8').value="2021/03/01";
        //     worksheet.getCell('V8').font={size:9,bold:true};    
        //     worksheet.getCell('V8').border={bottom:{style:'thin',color:{argb:'000000'}},
        //     top:{style:'thin',color:{argb:'000000'}},
        //     left:{style:'thin',color:{argb:'000000'}},
        //     right:{style:'thin',color:{argb:'000000'}}}; 
        //     worksheet.getCell('W8').value="2021/03/31";
        //     worksheet.getCell('W8').font={size:9,bold:true};    
        //     worksheet.getCell('W8').border={bottom:{style:'thin',color:{argb:'000000'}},
        //     top:{style:'thin',color:{argb:'000000'}},
        //     left:{style:'thin',color:{argb:'000000'}},
        //     right:{style:'thin',color:{argb:'000000'}}}; 


        //     worksheet.mergeCells('A4:'+this.numToAlpha(header.length-2)+'4')
        //     // worksheet.getCell('A4').fill={bgColor:{argb:'ffffff',theme:0},type:'pattern',pattern:'solid'};
        //     worksheet.mergeCells('A9:'+this.numToAlpha(header.length-2)+'9')          
            // worksheet.getCell('A9').fill={bgColor:{argb:'ffffff',theme:0},type:'pattern',pattern:'solid'};
                      workBook.xlsx.writeBuffer().then((data:ArrayBuffer)=>{
              const blob=new Blob([data],{type:EXCEL_TYPE});
              fs.saveAs(blob,excelFileName+EXCEL_EXTENSION);
          })

      }
      public numToAlpha(num:number){
          let alpha='';
          for(;num>=0;num=parseInt((num/26).toString(),10)-1){
              alpha=String.fromCharCode(num%26+0x41)+alpha;
          }
          return alpha;
      }
      public convertMinsToHrsMins(mins:number){
        let h = Math.floor(mins / 60);
        let m = mins % 60;
        let hour;
        let minute;
        if(h<0){ h=0}
        if(m<0){m=0}
        hour = h < 10 ? '0' + h : h;
        minute = m < 10 ? '0' + m : m;
        return `${hour}:${minute}`;
      }
  }