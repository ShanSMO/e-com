import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/internal/operators';
import {Global} from '../utils/global';
import {ApiEndPoints} from '../utils/api-end-points';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  loadStaticData(requestBody): Observable<any> {
    return this.http.post(Global.SERVER_URL.concat(ApiEndPoints.LOAD_DASHBOARD_DATA), requestBody).pipe(map(response => {
      return response;
    }));
  }
}
