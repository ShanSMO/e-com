import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../../../service/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit {

  countData: any = {
    mobile: 0,
    photoCopy: []
  };

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.loadDashboardData();
  }

  loadDashboardData() {
    const requestBody = {
      startDate: '2018-04-29',
      endDate: '2018-05-30'
    };
    this.dashboardService.loadStaticData(requestBody).subscribe(data => {
      console.log(data);
      this.countData.mobile = data.object.MOBILE;
      this.countData.photoCopy = data.object.PHOTO_COPY_GROUP;
    });
  }

}
