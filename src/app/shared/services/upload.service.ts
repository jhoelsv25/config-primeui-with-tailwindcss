import { Injectable, signal } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({ providedIn: 'root' })
export class UploadExcelService {
  public data = signal<any[]>([]);
  public columns = signal<any[]>([]);
  constructor() {}

  uploadFile(file: any) {
    const target: DataTransfer = <DataTransfer>file.target;
    if (target.files.length !== 1) throw new Error('No se puede subir más de un archivo a la vez');

    const reader: FileReader = new FileReader();

    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      const data: any[][] = XLSX.utils.sheet_to_json(ws, { header: 1 });

      this.columns.set(data[0].map((col: string) => ({ field: col, header: col })));
      this.data.set(
        data.slice(1).map((row: any) => {
          const obj: any = {};
          this.columns().forEach((col, index) => {
            obj[col.field] = row[index];
          });
          return obj;
        })
      );
    };

    reader.readAsBinaryString(target.files[0]);
  }

  removeItem(index: number) {
    const newData = this.data().filter((_, i) => i !== index);
    this.data.set(newData);
  }
}
