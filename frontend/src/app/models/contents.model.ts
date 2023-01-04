import { IContentSection } from "./article.interfaces";

export class Contents {
  private _contents: IContentSection[] = [];

  public get contents(): IContentSection[] {
    return this._contents;
  }

  public insert(content: IContentSection, index = -1) {
    this.contents.splice(index, 0, content);
  }
  public update(content: IContentSection) {
    const updateAtIndex = this.contents.findIndex(({ _id }) => content._id);
    this.contents[updateAtIndex] = content;
  }
  public remove(id: string) {
    const removeAtIndex = this.contents.findIndex(({}) => {});
    this.contents.splice(removeAtIndex, 1);
  }
  public move(fromIndex: number, toIndex: number) {
    const [target] = this.contents.splice(fromIndex, 1);
    this.contents.splice(toIndex - 1, 0, target);
  }
}
