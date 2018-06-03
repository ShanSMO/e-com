import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'app';

  ngOnInit(): void {
    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
    });

    $('.menu-item').click(function () {
      $(this).siblings('li.active').removeClass('active');
      $(this).addClass('active');
    });
  }
}
