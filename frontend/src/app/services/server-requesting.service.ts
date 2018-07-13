import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { toolStatus } from '../models/toolStatus';

@Injectable({
  providedIn: 'root'
})
export class ServerRequestingService {
  tStatus: toolStatus;
  nowPage: string;
  //
  constructor(private http: HttpClient) {}
  //
  getServerRequestingService(): Observable<toolStatus> {
    return this.http.get<toolStatus>(this.tStatus.nowPage);
  }
  // to first record
  toFisrt() {
    this.tStatus.dbStatus = 'F';
  }
  // to last record
  toLast() {
    this.tStatus.dbStatus = 'L';
  }
  // to previous record
  prevRec() {
    this.tStatus.dbStatus = '-';
  }
  // to next record
  nextRec() {
    this.tStatus.dbStatus = '+';
  }
  // query data using column data as condition
  queryRec() {
    this.tStatus.dbStatus = 'Q';
  }
  // insert data
  insertData() {
    this.tStatus.dbStatus = 'I';
  }
  // delete data
  deleteData() {
    this.tStatus.dbStatus = 'D';
  }
  // update data
  updateData() {
    this.tStatus.dbStatus = 'U';
  }
  // reset status
  resetDBStatus() {
    this.tStatus.dbStatus = null;
  }
}
