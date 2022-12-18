import { Injectable } from '@angular/core';
import { randomId } from '../functions/random-id';
import { ArticleModel } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  public save(article: ArticleModel) {
    const _id = randomId();
  }
  public update(article: ArticleModel) {
    
  }
  public delete(id: string) {
    
  }
  public load(id: string) {
    
  }
  public loadAll(): ArticleModel[] {
    return [];
  }

}
