import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { ContentID } from './ContentID';
@Injectable()
export class PrivacyService {
  constructor(private http: Http) { }
  private url = "http://localhost:5000/api/Content";
  private data: any;
  public IsPrivate :boolean;
  content: ContentID;
  public id: number = 1;
  public con: string;
  public tags: string;
  public favourite: boolean;
  public user: string;

  get_data():any{
    
    const url = `${this.url}`;
   
    this.data = this.http.get(url)
    return this.data;
  }
  put_data(value):any{
    this.IsPrivate=value;
    const url = `${this.url}`;
    this.content = new ContentID(this.id, this.con, this.tags, this.favourite, this.user,this.IsPrivate);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.put(this.url, this.content, options).map(response => response.json())
    .subscribe(
      ()=> { console.log('Success') }
    );

  }
   
}