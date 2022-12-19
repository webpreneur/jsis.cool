import { Delta } from "quill";
import { randomId } from "../functions/random-id";

export interface QuillProps {
    content: Delta | null, html: string | null, text: string
}

export class Article {
    readonly id: string;
    readonly created: Date;
    readonly author: string;

    private _quillProps: QuillProps;

    private _title: string;
    private _updated: Date;
    private _tags: string[];

    public get title(): string {
        return this._title;
    }

    public get content(): Delta | null {
        return this._quillProps.content;
    }
    public get html(): string | null {
        return this._quillProps.html;
    }
    public get text(): string {
        return this._quillProps.text;
    }

    public get tags(): string[] {
        return this._tags;
    }
    public get updated(): Date {
        return this._updated;
    }
    public get url(): string {
        /** TODO: Implement! */
        return '';
    }

    constructor({ quillProps, title }:{
        quillProps: QuillProps,
        title: string
    }) {
        this.id = randomId();
        this.created = new Date();
        this.author = 'webpreneur';
        
        this._title = title;
        this._quillProps = quillProps;
        this._updated = new Date();
        this._tags = [];
    }
    public update() {
        this._updated = new Date();
    }
    /* Accepts a comma seperated string */
    public addTags(tags: string) {
        Array.from(
            new Set([...this.tags, ...tags.split(',')])
        );
    }
    public updateQuillProps(props: QuillProps) {
        this._quillProps = props;
    }
    public updateTitle(title: string): string {
        this._title = title;
        return this.title;
    }
    public share(): void {
        /** TODO: Implement an url write to clipboard. */
    }

}