import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReplaySubject, Subject as BehaviorSubject } from 'rxjs';

import { IContentSection } from 'src/app/models/article.interfaces';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';


@Component({
  selector: 'jic-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent {

  public articleForm: FormGroup;

  private _article: Article;

  private get _title(): string {
    return this.articleForm.get('title')?.value;
  }
  private get _description(): string {
    return this.articleForm.get('description')?.value;
  }

  public get contentControls() {
    return this.articleForm.get('contents') as FormArray<FormControl<IContentSection>>;
  }

  constructor(
    private _articleService: ArticleService,
    private _fb: FormBuilder,
  ) {

    this._article = new Article();

    this.articleForm = new FormGroup({
      title: new FormControl<string>('', {
        validators: [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(50),
        ],
        updateOn: 'blur',
      }),
      description: new FormControl<string>(''),
      contents: this._fb.array<IContentSection>([]),
    });
  }

  public insertContentBlock(event: MouseEvent, index = -1): void {
    this.contentControls.insert(index, new FormControl());

    console.log(this.contentControls.value)
  }
  


  public saveArticle(): void {

    this._article.setTitle(this._title);
    this._article.setDescription(this._description);

    this._article.update();

    this._articleService.save(this._article);

  }

}
