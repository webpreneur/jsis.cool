import { randomId } from "../functions/random-id";
import { Contents } from "./contents.model";

export class Article {
    readonly id: string;
    readonly created: Date;
    readonly author: string;
    readonly contents: Contents;

    private _title: string;
    private _description: string;
    private _updated: Date;
    private _tags: string[];
    
    public get level(): 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED' {
        throw new Error("Hasn't implemented yet!")
    }

    public get title(): string {
        return this._title;
    }
    public get description(): string {
        return this._description;
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

    constructor() {
        this.id = randomId();
        this.created = new Date();
        this.author = 'webpreneur';
        this.contents = new Contents();
        
        this._description = '';
        this._title = '';
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

    public setTitle(title: string) {
        this._title = title;
    }
    public setDescription(description: string) {
        this._description = description;
    }

    public share(): void {
        /** TODO: Implement an url write to clipboard. */
    }

}

