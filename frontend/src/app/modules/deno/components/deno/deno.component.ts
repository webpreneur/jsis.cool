import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'jic-deno',
  templateUrl: './deno.component.html',
  styleUrls: ['./deno.component.scss']
})
export class DenoComponent implements OnInit {

  private _title: string;

  constructor(
    private _titleService: Title,
    private _metaTagService: Meta,
  ) {
    this._title = 'JsIsCool'
  }

  ngOnInit(): void {
    this._titleService.setTitle(this._title);
    this._metaTagService.updateTag(
      { name: 'description', content: 'Deno JS articles' }
    )
  }

}
