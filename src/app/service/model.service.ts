import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {Global} from '../utils/global';
import {ApiEndPoints} from '../utils/api-end-points';
import {map} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(private http: HttpClient) { }

  loadModelsForBrand(requestBody): Observable<any> {
    return this.http.post(Global.SERVER_URL.concat(ApiEndPoints.LOAD_MODELS_FOR_BRAND), requestBody)
      .pipe(map(response => response));
  }
}
