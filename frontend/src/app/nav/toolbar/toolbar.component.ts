import { Component, OnInit } from '@angular/core';
import { ServerRequestingService } from '../../services/server-requesting.service';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  // constructor(private serverRequesting: ServerRequestingService) {}
  constructor() {}
  ngOnInit() {}
  //
  insertData() {}
  //
  updateData() {}
  //
  deleteData() {}
}
