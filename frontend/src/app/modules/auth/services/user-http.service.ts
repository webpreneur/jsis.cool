import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  constructor(private _http: HttpClient) {

  }

  public getUserProfile(): Observable<any> {
    return this._http.get('api/user');
  }

}
