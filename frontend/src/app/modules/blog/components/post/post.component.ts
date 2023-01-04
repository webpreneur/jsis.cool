import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map, Observable, of } from "rxjs";

@Component({
  selector: "jic-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
})
export class PostComponent implements OnInit {
  @Input()
  public title: string;
  @Input()
  public created: Date;

  public title$: Observable<string>;

  constructor(
    private _route: ActivatedRoute,
  ) {
    this.title = "{$title}";
    this.created = new Date();
    this.title$ = of("${title}");
  }

  ngOnInit(): void {
    this.title$ = this._route.paramMap.pipe(
      map((params) => params.get("title")!),
    );
  }
}
