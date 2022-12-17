import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { HighlightAutoResult, HighlightLoader } from 'ngx-highlightjs';


@Component({
  selector: 'jic-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private _title: string;

  public code: string = `
    /** Bad */
    function createCar(gps: boolean, radio: 56)ff {
        /** ... return a Car ...*/
    }
    /** Good */
    interface ICarExtras {
        gps: boolean;
        radio: boolean;
    }
    function createCar(extras: ICarExtras) {
        /** ... return a Car ...*/
    }
  `;

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

  onHighlight(highlightAutoResultEvent: HighlightAutoResult) {
    console.log(highlightAutoResultEvent);
  }

}
