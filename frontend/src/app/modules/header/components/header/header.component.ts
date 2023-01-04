import { Component, Input } from '@angular/core';

@Component({
  selector: 'jic-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input('h1') title: string;

  constructor() {
    this.title = '';
  }
}
