import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {Global} from '../utils/global';
import {ApiEndPoints} from '../utils/api-end-points';
import {map} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  loadAllCategories(requestBody): Observable<any> {
    return this.http.post(Global.SERVER_URL.concat(ApiEndPoints.LOAD_CATEGORIES), requestBody).pipe(map(response => response));
  }

  createCategory(requestBody): Observable<any> {
    return this.http.post(Global.SERVER_URL.concat(ApiEndPoints.CREATE_CATEGORY), requestBody).pipe(map(response => response));
  }
}
