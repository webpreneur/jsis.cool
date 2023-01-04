import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateArticleComponent } from '../../create-article/create-article.component';

@Component({
  selector: 'jic-editor-button',
  templateUrl: './editor-button.component.html',
  styleUrls: ['./editor-button.component.scss']
})
export class EditorButtonComponent {
  constructor(public dialog: MatDialog) {

  }
  public openEditorDialog(event: MouseEvent) {
    const dialogRef = this.dialog.open(CreateArticleComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
