import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {Global} from '../utils/global';
import {ApiEndPoints} from '../utils/api-end-points';
import {map} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class MobilePhoneService {

  constructor(private http: HttpClient) { }

  create(requestBody): Observable<any> {
    return this.http.post(Global.SERVER_URL.concat(ApiEndPoints.CREATE_MOBILE_PHONE), requestBody)
      .pipe(map(response => response));
  }

  loadByBarcode(requestBody): Observable<any> {
    return this.http.post(Global.SERVER_URL.concat(ApiEndPoints.LOAD_PHONE_BY_BARCODE), requestBody)
      .pipe(map(response => response));
  }

  leaseMobile(requestBody): Observable<any> {
    return this.http.post(Global.SERVER_URL.concat(ApiEndPoints.LEASE_MOBILE), requestBody)
      .pipe(map(response => response));
  }

  sellMobile(requestBody): Observable<any> {
    return this.http.post(Global.SERVER_URL.concat(ApiEndPoints.SELL_MOBILE), requestBody)
      .pipe(map(response => response));
  }
}
