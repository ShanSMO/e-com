import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-photo-copy-report',
  templateUrl: './photo-copy-report.component.html',
  styleUrls: ['./photo-copy-report.component.css']
})
export class PhotoCopyReportComponent implements OnInit {

  itemList: any[] = [1];
  constructor() { }

  ngOnInit() {
    // jQuery('#datetimepicker').datetimepicker();
  }

}
