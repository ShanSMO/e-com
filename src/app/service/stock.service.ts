import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {Global} from '../utils/global';
import {ApiEndPoints} from '../utils/api-end-points';
import {map} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) { }

  loadMobileStock(requestBody): Observable<any> {
    return this.http.post(Global.SERVER_URL.concat(ApiEndPoints.LOAD_MOBILE_STOCK), requestBody)
      .pipe(map(response => {
      return response;
    }));
  }

  loadMobileStockCount(requestBody): Observable<any> {
    return this.http.post(Global.SERVER_URL.concat(ApiEndPoints.LOAD_MOBILE_STOCK_COUNT), requestBody)
      .pipe(map(response => {
      return response;
    }));
  }
}
