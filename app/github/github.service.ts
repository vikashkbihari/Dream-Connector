import { Injectable } from '@angular/core';
import { Http }    from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class GithubService {

  constructor(private http: Http) { }
  //private giturl = "https://api.github.com/users";
  private giturl = "http://localhost:5000/api/ProductInfo";
  private repos = 'repos';
  private data: any;
  //private data_string: any;
  get_data(username: string):any{
    // const headerDict = {
    //   'Content-Type': 'application/json',
    //   'Accept': 'application/json',
    //   // 'Access-Control-Allow-Headers': 'Content-Type',
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Methods': 'GET, POST',
    //   'Access-Control-Allow-Headers': 'X-Requested-With'
    // }
                                                                                                                                                                    
    //  this.headers = new Headers(headerDict), 
    //  this.myParams = new URLSearchParams();
    
    // const options = new RequestOptions({ headers: this.headers, params: myParams });
    const url = `${this.giturl}`;
    // this.data = this.http.get(url).map(res =>{ res.json(); console.log('1'); console.log(res);} ).subscribe(res => {this.data_string = res.json()});
    this.data = this.http.get(url)
    //to check the result in console.
    console.log(this.data);
    // console.log(this.data_string);
    return this.data;
  }
   get_repo(username: string):any{
    const url = `${this.giturl}/${username}/${this.repos}`;
    this.data = this.http.get(url)
    // console.log(this.data);
    // console.log(this.data_string);
    return this.data;
  
  }
}
