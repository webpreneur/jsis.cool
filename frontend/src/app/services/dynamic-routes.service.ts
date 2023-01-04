import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import routes from "src/dynamic-routes.json";

export enum ROUTES {
  ANGULAR = "angular",
  DENO = "deno",
  CLEAN_CODE = "clean-code",
}

@Injectable({
  providedIn: "root",
})
export class DynamicRoutesService {
  constructor(
    private _http: HttpClient,
  ) {}

  public getRoutes(route: ROUTES): string[] {
    return routes[route];
  }
}
