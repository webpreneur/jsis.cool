import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export enum ROUTES {
  ANGULAR = '/angular/',
}

@Injectable({
  providedIn: 'root'
})
export class DynamicRoutesService {

  constructor(
    private _http: HttpClient
  ) { }

  public fetchDynamicRoutes(): Observable<string[]> {
    return this._http
      .get("dynamic-routes.txt", { responseType: 'text'})
      .pipe(map((text) => text.split("\n")))
  }

  public getRoutes(route: ROUTES): Observable<string[]> {
    return this.fetchDynamicRoutes().pipe(
      map((routes) => this._splitAndFilterByString(routes, route))
    )
  }

  private _splitAndFilterByString(dynamicRoutes: string[], route: ROUTES): string[] {
    return dynamicRoutes.filter(dynamicRoute => dynamicRoute.includes(route));
  }

}
