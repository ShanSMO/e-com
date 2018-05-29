import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {ApiEndPoints} from '../utils/api-end-points';
import {map} from 'rxjs/internal/operators';
import {Global} from '../utils/global';

@Injectable({
  providedIn: 'root'
})
export class PhotoCopyService {

  constructor(private http: HttpClient) { }

  loadPageSizes(): Observable<any> {
    return this.http.get(Global.SERVER_URL.concat(ApiEndPoints.LOAD_PAGE_SIZES))
      .pipe(map(response => response));
  }

  create(requestBody): Observable<any> {
    return this.http.post(Global.SERVER_URL.concat(ApiEndPoints.CREATE_PHOTO_COPY), requestBody)
      .pipe(map(response => response));
  }

  loadSavedAll(): Observable<any> {
    return this.http.get(Global.SERVER_URL.concat(ApiEndPoints.LOAD_ALL_SAVED))
      .pipe(map(response => response));
  }

  sellPhotoCopy(requestBody): Observable<any> {
    return this.http.post(Global.SERVER_URL.concat(ApiEndPoints.SELL_PHOTOCOPY_BULK), requestBody)
      .pipe(map(response => response));
  }
}
