import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {Global} from '../utils/global';
import {map} from 'rxjs/operators';
import {ApiEndPoints} from '../utils/api-end-points';


@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http: HttpClient) { }

  loadAllBrands(): Observable<any> {
    return this.http.get(Global.SERVER_URL.concat(ApiEndPoints.LOAD_BRANDS)).pipe(map(response => response));
  }
}
