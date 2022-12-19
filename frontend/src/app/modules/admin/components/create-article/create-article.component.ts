import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, Form, FormControl, FormGroup } from '@angular/forms';
import { ContentChange, EditorChangeContent, EditorChangeSelection, QuillEditorComponent } from 'ngx-quill';
import { Delta } from 'quill';
import { ReplaySubject, Subject as BehaviorSubject } from 'rxjs';
import { Article, QuillProps } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';

enum EDITOR_MODE {
  RICHT_TEXT = 'richText',
  CODE_BLOCK = 'codeBlock',
}

@Component({
  selector: 'jic-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {

  @ViewChild('editor', { static: true }) public editor!: QuillEditorComponent;

  public content$: ReplaySubject<Delta>;
  public contentChange$: BehaviorSubject<ContentChange>;
  public articleForm: FormGroup;

  public get quillPropsControl(): AbstractControl<QuillProps, QuillProps> {
    return this.articleForm.get('quillProps') as AbstractControl<QuillProps, QuillProps>;
  }

  constructor(
    private _article: ArticleService
  ) {

    this.content$ = new ReplaySubject(50);
    this.contentChange$ = new BehaviorSubject();

    this.articleForm = new FormGroup({
      title: new FormControl<string>(''),
      description: new FormControl<string>(''),
      quillProps: new FormControl<QuillProps>({
        content: null,
        html: null,
        text: ''
      })
    });
  }

  public ngOnInit(): void {
    this.contentChange$.subscribe(({content, text, html}) => {
      this.quillPropsControl.setValue({
        content, text, html,
      });
    });
  }
  
  public onContentChanged(contentChange: ContentChange): void {
    console.log(contentChange);
    this.contentChange$.next(contentChange);
    this.content$.next(contentChange.content);
  }
  /**
   * text or selection is updated - independent of the source
   */
  public onEditorChanged(ec: EditorChangeContent | EditorChangeSelection): void {
    console.log(ec);
  }

  public saveArticle() {


    const article = new Article({
      quillProps: this.quillPropsControl.value,
      title: '',

    });
    console.log(article)
    this._article.save(article);

  }

}
