import { ContentChange } from "ngx-quill";
import { Delta } from "quill";

export interface IContentSection extends ContentChange {
  readonly _id: string;
  title: string;
  content: Delta;
}
