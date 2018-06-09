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


  // TODO ----- Date picker --- START
      dayArray: any[] = ['SUN', 'MON', 'TUE', 'WED', 'THR', 'FRI', 'SAT'];
      datesOfMonthArray: any[][] = [];
      monthsOfYearArray: any[] = [
        {id: 0, label: 'January'},
        {id: 1, label: 'February'},
        {id: 2, label: 'March'},
        {id: 3, label: 'April'},
        {id: 4, label: 'May'},
        {id: 5, label: 'June'},
        {id: 6, label: 'July'},
        {id: 7, label: 'August'},
        {id: 8, label: 'September'},
        {id: 9, label: 'October'},
        {id: 10, label: 'November'},
        {id: 11, label: 'December'}
      ];
      yearArray: any[] = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];

      setDatesOfMonth() {
        let dayId;
        let weekId;

        console.log(new Date().setDate(1));
        let date = new Date(new Date().setDate(1));
        const currentMonth = date.getMonth();
        let newMonth = date.getMonth();
        while (currentMonth !== newMonth) {
          dayId = 0;
          weekId = 0;

          this.datesOfMonthArray[weekId][dayId].push(date);
          date = new Date(new Date().setDate(1 + 1));
          newMonth = date.getMonth();
        }

        console.log(this.datesOfMonthArray);
      }

  // TODO ----- Date picker --- END

  ngOnInit() {
    this.setDatesOfMonth();
  }

}
