import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { DynamicRoutesService, ROUTES } from 'src/app/services/dynamic-routes.service';

@Component({
  selector: 'jic-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent {

  public routes$: Observable<string[]>;

  constructor(
    private _dynamicRoutes: DynamicRoutesService,
  ) {

    this.routes$ = this._dynamicRoutes.getRoutes(ROUTES.ANGULAR);

  }

}
