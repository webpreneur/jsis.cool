import { Component, OnInit } from '@angular/core';

import { UserHttpService } from '../../services/user-http.service';

@Component({
  selector: 'jic-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private _userHttp: UserHttpService,
  ) {
  }

  public ngOnInit(): void {
      this._userHttp.getUserProfile().subscribe(console.log);
  }



}
