import { Component } from '@angular/core';
import { ContentChange, EditorChangeContent, EditorChangeSelection } from 'ngx-quill';
import { Delta } from 'quill';
import { ReplaySubject, Subject } from 'rxjs';
import { ArticleModel } from 'src/app/models/article.model';
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
export class CreateArticleComponent {

  public content$: ReplaySubject<Delta>;

  constructor(private _article: ArticleService) {
    this.content$ = new ReplaySubject(50);
  }

  public onContentChanged(contentChange: ContentChange): void {
    console.log(contentChange);
    this.content$.next(contentChange.content);
  }
  /**
   * text or selection is updated - independent of the source
   */
  public onEditorChanged(ec: EditorChangeContent | EditorChangeSelection): void {
    console.log(ec);
  }

  private _saveArticle() {
    this.content$.subscribe(content => {
      const article: Partial<ArticleModel> = {
        content,

      };
      this._article.save(article)
    })
  }

}
