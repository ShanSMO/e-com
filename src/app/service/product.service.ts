import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {map} from 'rxjs/internal/operators';
import {ApiEndPoints} from '../utils/api-end-points';
import {Global} from '../utils/global';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  loadAllProducts(requestBody): Observable<any> {
    return this.http.post(Global.SERVER_URL.concat(ApiEndPoints.LOAD_PRODUCTS), requestBody).pipe(map(response => response));
  }

  createProduct(requestBody): Observable<any> {
    return this.http.post(Global.SERVER_URL.concat(ApiEndPoints.CREATE_PRODUCT), requestBody).pipe(map(response => response));
  }
}
