import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'jic-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private _title: string;

  constructor(
    private _titleService: Title,
    private _metaTagService: Meta,
  ) {
    this._title = 'JsIsCool'
  }

  ngOnInit(): void {
    this._titleService.setTitle(this._title);
    this._metaTagService.addTags([
      { name: 'description', content: 'JS is Cool homepage' },
      { name: 'author', content: 'webpreneur' },
      { name: 'keywords', content: 'Angular, TypeScript, JavaScript, SASS, CSS' },
    ]);
  }

}
