import { Injectable, OnInit } from '@angular/core';
import { ServerRequestingService } from './server-requesting.service';
import { toolStatus } from '../models/toolStatus';

@Injectable({
  providedIn: 'root'
})
export class CustListService implements OnInit {
  tStatus: toolStatus;
  constructor(private serverRequestingService: ServerRequestingService) {}

  ngOnInit() {
    this.getServerRequestingService();
  }

  getServerRequestingService(): void {
    this.serverRequestingService
      .getServerRequestingService()
      .subscribe(tStatus => (this.tStatus = tStatus));
  }
}
