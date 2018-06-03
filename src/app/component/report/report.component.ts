import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('div.bhoechie-tab-menu>div.list-group>a').click(function(e) {
      e.preventDefault();
      $(this).siblings('a.active').removeClass('active');
      $(this).addClass('active');
      const index = $(this).index();
      $('div.bhoechie-tab>div.bhoechie-tab-content').removeClass('active');
      $('div.bhoechie-tab>div.bhoechie-tab-content').eq(index).addClass('active');
    });
  }

}
