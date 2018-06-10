import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  currentDate: any;

  ngOnInit(): void {
    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
    });

    $('.menu-item').click(function () {
      $(this).siblings('li.active').removeClass('active');
      $(this).addClass('active');
    });

    // ---- Current date view
    const fullDate = new Date();
    const year = fullDate.getFullYear();
    const month = fullDate.getMonth().toString().length < 2 ? '0' + fullDate.getMonth() : fullDate.getMonth();
    const date = fullDate.getDate();
    this.currentDate = year + '-' + month + '-' + date;
  }
}
