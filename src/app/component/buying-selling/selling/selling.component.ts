import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-selling',
  templateUrl: './selling.component.html',
  styleUrls: ['./selling.component.scss']
})
export class SellingComponent implements OnInit {

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
