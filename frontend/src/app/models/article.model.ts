import { Delta } from "quill";
import { randomId } from "../functions/random-id";

interface QuillProps {
    content: Delta, html: string, text: string
}

export class ArticleModel {
    readonly id: string;
    readonly created: Date;
    readonly author: string;

    private _quillProps: QuillProps;
    private _updated: Date;
    private _tags: string[];

    public get content(): Delta {
        return this._quillProps.content;
    }
    public get html(): string {
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

    constructor({ quillProps }:{ quillProps: QuillProps }) {
        this.id = randomId();
        this.created = new Date();
        this.author = 'webpreneur';

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
    public setQuillProps(props: QuillProps) {
        this._quillProps = props;
    }
    public share(): void {
        /** TODO: Implement an url write to clipboard. */
    }
}