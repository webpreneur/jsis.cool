import { Component, ViewChild } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import {
  ContentChange,
  EditorChangeContent,
  EditorChangeSelection,
  QuillEditorComponent,
} from "ngx-quill";

@Component({
  selector: "jic-content-section-editor",
  templateUrl: "./content-section-editor.component.html",
  styleUrls: ["./content-section-editor.component.scss"],
})
export class ContentSectionEditorComponent {
  @ViewChild("editor", { static: true })
  public editor!: QuillEditorComponent;

  public contentEditorForm: FormGroup;

  constructor() {
    this.contentEditorForm = new FormGroup({
      title: new FormControl<string>(""),
      content: new FormControl<ContentChange | null>(null),
    });
  }

  public onContentChanged(contentChange: ContentChange): void {
    console.log(contentChange);
  }
  /**
   * text or selection is updated - independent of the source
   */
  public onEditorChanged(
    ec: EditorChangeContent | EditorChangeSelection,
  ): void {
    console.log(ec);
  }
}
