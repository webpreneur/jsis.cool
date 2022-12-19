import { Injectable } from '@angular/core';
import { randomId } from '../functions/random-id';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  public save(article: Article) {
    const _id = randomId();
  }
  public update(article: Article) {
    
  }
  public delete(id: string) {
    
  }
  public load(id: string) {
    
  }
  public loadAll(): Article[] {
    return [];
  }

}
