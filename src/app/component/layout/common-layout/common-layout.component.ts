import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-common-layout',
  templateUrl: './common-layout.component.html',
  styleUrls: ['./common-layout.component.css']
})
export class CommonLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // $(document).ready(function () {

      $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
      });

    // });
  }

}
